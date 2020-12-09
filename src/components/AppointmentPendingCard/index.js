import React, { useState, useEffect } from 'react';
import moment from 'moment';
// import 'moment/min/locales';
import { ScrollView, Text, Alert, AsyncStorage } from 'react-native';


import api from '../../services/api';

import {
  Container,
  EmptyView,
  EmptyText,
  Card,
  IconCard,
  Data,
  NameLabel,
  SpecialtyLabel,
  Image,
  ButtonsView,
  RefuseButton,
  RefuseButtonText,
  AcceptButton,
  AcceptButtonText,
} from './styles';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import logo from '../../assets/logo.png';


const AppointmentPendingCard = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function getAppointments() {
      const doctor_id = await AsyncStorage.getItem('auth_id');

      const responsePending = await api.get(`appointment/pendingAppointments/${doctor_id}`);
      setAppointments(responsePending.data)

    }

    getAppointments();
  }, []);

  async function removeCard(index) {
    let pivot = appointments.filter(
      (item, iterableIndex) => index !== iterableIndex
    );
    setAppointments(pivot);
  }

  async function acceptAppointment(id, pacientName, index) {
    try {
      Alert.alert(
        "Atenção",
        `Deseja realmente aceitar a solicitação de consulta de ${pacientName}?`,
        [
          {
            text: "Sim",
            onPress: () => {
              api.put(`appointment/accept/${id}`)
                .then(removeCard(index))
            },
          },
          { text: "Não", onPress: () => { }, style: "cancel" }
        ],
        { cancelable: false }
      );

    } catch (err) {
      alert("accepting: " + err)
    }

  }

  async function refuseAppointment(id, pacientName, index) {
    try {
      Alert.alert(
        "Atenção",
        `Deseja realmente aceitar a solicitação de consulta de ${pacientName}?`,
        [
          {
            text: "Sim",
            onPress: () => {
              api.put(`appointment/reject/${id}`)
                .then(removeCard(index))
            }
          },
          { text: "Não", onPress: () => { }, style: "cancel" }
        ],
        { cancelable: false }
      );

    } catch (err) {
      alert("refusing: " + err)
    }
  }


  return (
    <>
      <Container elevation={8}>
        {appointments.length === 0 ?
          (
            <>
              <EmptyView>
                <EmptyText>Não encontramos solicitações de consulta</EmptyText>
              </EmptyView>
            </>
          ) : (
            <>
              {appointments.map((appointment, index) => (
                <Card
                  key={appointment.id}>

                  <IconCard>
                    <Image source={{uri: appointment.user.path_avatar}} resizeMode="center" />
                  </IconCard>

                  <Data>
                    <NameLabel>{appointment.user.username} {appointment.user.surname}</NameLabel>
                    <SpecialtyLabel>
                      {moment(appointment.consultation_schedule).format('lll')}
                    </SpecialtyLabel>

                    <ButtonsView>
                      <AcceptButton onPress={() =>
                        acceptAppointment(
                          appointment.id,
                          `${appointment.user.username + " " + appointment.user.surname}`,
                          index
                        )}>
                        <AcceptButtonText>Aceitar</AcceptButtonText>
                      </AcceptButton>

                      <RefuseButton onPress={() => refuseAppointment(appointment.id, `${appointment.user.username + " " + appointment.user.surname}`, index)}>
                        <RefuseButtonText>Recusar</RefuseButtonText>
                      </RefuseButton>
                    </ButtonsView>
                  </Data>
                </Card>
              ))}
            </>
          )}
      </Container>
    </>
  );
};

export default AppointmentPendingCard;
