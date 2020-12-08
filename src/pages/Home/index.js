import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, AsyncStorage, ScrollView, TouchableOpacity, RefreshControl, BackHandler, Alert } from 'react-native';

import { useIsDrawerOpen } from '@react-navigation/drawer';

import moment from 'moment';
import tz from 'moment-timezone';

import { Tabs, TabHeading, Tab } from 'native-base';

import { Agenda, LocaleConfig } from 'react-native-calendars';
LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Maio.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br';

import {
  Container,
  Logo,
  Title,
  TabMenu,
  PacientName,
  HeaderText,
  Col,
  Row,
  IconAppointment,
  IconAppointmentText,
  Button2,
  ButtonText,
  ViewIcon,
  ViewGoBackIcon,
  GoBackIcon
} from './styles';

import {colors, fonts} from '../../styles';

import AppointmentPendingCard from '../../components/AppointmentPendingCard';
import api from '../../services/api';
import logo from '../../assets/logo.png';

export default function Home({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [reload, setReload] = useState(0);

  const [items, setItems] = useState({});

  useEffect(() => {
    setRefreshing(true);
    getAppointments()
    setRefreshing(false);
  }, [reload]);

  async function getAppointments() {
    const doctor_id = await AsyncStorage.getItem('auth_id');

    const responseConfirmed = await api.get(`appointment/confirmedAppointments/${doctor_id}`);
    setConfirmedAppointments(responseConfirmed.data)
  }

  function handleNavigateToApointmentDetals(appointment_id) {
    navigation.navigate('AppointmentDetails', {
      appointment_id: appointment_id
    })
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAppointments()
    setRefreshing(false);
  }, []);


  const loadItems = async (day) => {
    const selectedDay = moment(day.timestamp).format("YYYY-MM-DD")

    let pivot = confirmedAppointments.filter((appointment) => {
      let datetime = appointment.consultation_schedule.split('T');
      let date = datetime[0];
      console.log(Date.parse(date))
      console.log(Date.parse(moment(day.timestamp).format("l")))

      return Date.parse(date) === Date.parse(moment(day.timestamp).format("l"));
    })

    let ArrayHelp = [];
    var obj = {};

    for (var consulta of (pivot)) {
      ArrayHelp.push({
        "appointment_id": `${consulta.id}`,
        "name": `${consulta.user.username} ${consulta.user.surname}`,
        "time": consulta.consultation_schedule,
        "specialty": consulta.doctor.specialty
      })
    }

    obj[selectedDay] = ArrayHelp;

    setItems(obj)
    console.log(obj)
  }


  const renderItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() => { handleNavigateToApointmentDetals(item.appointment_id) }}
        style={{ marginTop: 17, marginRight: 10 }}>
        <Container>
          <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center' }}>
            <IconAppointment>
              <IconAppointmentText>
                {item.name.split(' ')[0].substr(0, 1).toUpperCase()}
                {item.name.split(' ')[1].substr(0, 1).toUpperCase()}
              </IconAppointmentText>
            </IconAppointment>
            <View style={{ flexDirection: 'column', justifyContent: "center", alignItems: 'flex-start' }}>
              <PacientName>
                {item.name}
              </PacientName>
              <HeaderText>
                {item.specialty + " " + moment(item.time).tz('America/Sao_Paulo').format('HH:ss') + "h"}
              </HeaderText>
            </View >
          </View>
        </Container>
      </TouchableOpacity>
    )
  }

  return (
    <>
      <StatusBar backgroundColor="#7915c1" />
      <Container refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>

        <ViewGoBackIcon onPress={() => navigation.openDrawer()}>
          <GoBackIcon />
        </ViewGoBackIcon>

        <Tabs
          onChangeTab={() => {
            onRefresh()
            setReload(reload + 1)
          }}
          tabContainerStyle={styles.tab}
          tabBarUnderlineStyle={{backgroundColor: 'transparent'}}
          >

          <Tab
            heading="Agenda"
            style={{backgroundColor:'#f1f1f1'}}
            tabStyle={styles.tabHeadingLeft}
            textStyle={{color: '#111'}}
            activeTabStyle={styles.tabHeadingActiveLeft}
            activeTextStyle={styles.tabHeadingActiveLeft}
          >
            <HeaderText style={{backgroundColor:'#FFF'}}>Consultas marcadas</HeaderText>
            <Agenda
              items={items}
              loadItemsForMonth={loadItems}
              selected={Date.now()}
              renderItem={renderItem}
            />
          </Tab>

          <Tab
            heading="Solicitações"
            style={{backgroundColor:'#f1f1f1'}}
            tabStyle={styles.tabHeadingRigth}
            textStyle={{color: '#111'}}
            activeTabStyle={styles.tabHeadingActiveRigth}
            activeTextStyle={styles.tabHeadingActiveRigth}>
            <AppointmentPendingCard
              key={pendingAppointments.id}
              navigation={navigation}
            />
          </Tab>

        </Tabs>
      </Container>
    </>
  );
}


const styles = StyleSheet.create({
  tab: {
    backgroundColor: 'transparent',
    alignSelf : 'center',
    marginTop: 30,
    marginLeft: 40,
    width: '80%',
    height : 40,
    borderRadius: 50,
  },
  tabHeadingActiveLeft: {
    backgroundColor: `${colors.primary}`,
    color: 'white',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50
  },
  tabHeadingActiveRigth: {
    backgroundColor: `${colors.primary}`,
    color: 'white',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50
  },
  tabHeadingLeft: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50
  },
  tabHeadingRigth: {
    backgroundColor: '#fff',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50
  }
});