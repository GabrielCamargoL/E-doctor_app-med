import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, AsyncStorage, ScrollView, TouchableOpacity } from 'react-native';
import { Tabs, TabHeading, Tab } from 'native-base';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';

import {
  Container,
  Logo,
  Title,
  TabMenu,
  HeaderText,
  Col,
  Row,
  Logo2,
  Button2,
  ButtonText,
} from './styles';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Maio.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br';

import AppointmentCard from '../../components/AppointmentCard';
import AppointmentPendingCard from '../../components/AppointmentPendingCard';
import api from '../../services/api';
import logo from '../../assets/logo.png';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

export default function Home({ navigation }) {
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);
  const [pendingAppointments, setPendingAppointments] = useState([]);

  const [value, setValue] = useState([]);
  const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
  const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
  const workout = { key: 'workout', color: 'green' };
  const [heigth, setHeigth] = useState(0)
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


  function find_dimesions(layout) {
    const { x, y, width, height } = layout;
    setHeigth(height)
  }


  const loadItems = async (day) => {
    setTimeout(() => {
      let arrayOfDays = [{}];
      console.log(confirmedAppointments)
      confirmedAppointments.map((appointment) => {
        let datetime = appointment.consultation_schedule.split(' ');
        let date = datetime[0];
        let time = datetime[1];
        let pacient_name = `${appointment.username} ${appointment.surname}`;
        arrayOfDays = [{ ...arrayOfDays }, { date: [{ "name": pacient_name, "time": time }] }]
      })
      console.log(arrayOfDays)
      setItems(arrayOfDays)
    }, 1000);
  }


  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginTop: 17, marginRight: 10 }}>
        <Container>
          <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
            <HeaderText>
              {item.name}
            </HeaderText>
            <HeaderText>
              {item.time}
            </HeaderText>
            <Logo2 source={logo} resizeMode="contain" />
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
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 3,
    borderBottomColor: '#7915c1',
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});