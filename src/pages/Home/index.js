import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, AsyncStorage, ScrollView, TouchableOpacity } from 'react-native';
import { Tabs, TabHeading, Tab } from 'native-base';
import moment from 'moment';
import tz from 'moment-timezone';

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
} from './styles';

import AppointmentPendingCard from '../../components/AppointmentPendingCard';
import api from '../../services/api';
import logo from '../../assets/logo.png';

export default function Home({ navigation }) {
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);
  const [pendingAppointments, setPendingAppointments] = useState([]);

  const [items, setItems] = useState({});

  useEffect(() => {
    async function getAppointments() {
      const doctor_id = await AsyncStorage.getItem('auth_id');

      const responseConfirmed = await api.get(`appointment/confirmedAppointments/${doctor_id}`);
      setConfirmedAppointments(responseConfirmed.data)

      const responsePending = await api.get(`appointment/pendingAppointments/${doctor_id}`);
      setPendingAppointments(responsePending.data)
    }

    getAppointments();
  }, []);

  function handleNavigateToApointmentDetals(appointment_id) {
    navigation.navigate('AppointmentDetails', {
      appointment_id: appointment_id
    })
  }


  const loadItems = async (day) => {
    const selectedDay = moment(day.timestamp).format("YYYY-MM-DD")

    let pivot = confirmedAppointments.filter((appointment) => {
      let datetime = appointment.consultation_schedule.split('T');
      let date = datetime[0];
      console.log(Date.parse(date))
      console.log(Date.parse(moment(day.timestamp).format("l")))

      return Date.parse(date) === Date.parse(moment(day.timestamp).format("l"));
    })

    let ArrayHelp = []
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
  }


  const renderItem = (item) => {
    return (
      <TouchableOpacity
        onPress={ () => { handleNavigateToApointmentDetals(item.appointment_id) } }
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
      <Container>
        <Tabs>
          <Tab
            heading={
              <TabHeading style={styles.tabHeading}>
                <TabMenu>Agenda</TabMenu>
              </TabHeading>
            }>
            <HeaderText>Consultas marcadas</HeaderText>
            <Agenda
              items={items}
              loadItemsForMonth={loadItems}
              selected={Date.now()}
              renderItem={renderItem}
            />
          </Tab>
          <Tab
            style={styles.tabs}
            heading={
              <TabHeading style={styles.tabHeading}>
                <TabMenu>Solicitações</TabMenu>
              </TabHeading>
            }>
            <AppointmentPendingCard
              key={pendingAppointments.id}
              navigation={navigation}
              appointmentData={pendingAppointments}
            />

          </Tab>
        </Tabs>
      </Container>
    </>
  );
}


const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: '#7915c1',
    borderBottomWidth: 3,
    borderBottomColor: '#7915c1',
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});