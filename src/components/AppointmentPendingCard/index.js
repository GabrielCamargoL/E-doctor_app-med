import React, {useState, useEffect} from 'react';
import moment from 'moment';
// import 'moment/min/locales';
import {ScrollView, Text} from 'react-native';


import api from '../../services/api';

import {
  Container,
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


const AppointmentCard = ({appointmentData, navigation})  => {

  const goDetailsDoctor = () => {
    navigation.navigate('DetailsDoctor');
  };

  useEffect(() => {
    moment.locale('pt-BR')
  }, []);

  async function acceptAppointment() {
    // aceitar e mudar status para aceito
  }

  async function refuseAppointment() {
    // recusar e mudar status para recusado (notificar paciente)
  }
  

  return (
    <>
    <Container
      elevation={8}>
      {appointmentData.map((appointment, index) => (
        <Card
          key={appointment.id}
          onPress={goDetailsDoctor}>

          <IconCard>
            <Image source={logo} resizeMode="center"/>
          </IconCard>

          <Data>
            <NameLabel>{appointment.user.username} {appointment.user.surname}</NameLabel>
            <SpecialtyLabel>
              {moment(appointment.consultation_schedule).format('lll')}
            </SpecialtyLabel>

            <ButtonsView>
              <AcceptButton onPress={() => acceptAppointment()}>
                <AcceptButtonText>Aceitar</AcceptButtonText>
              </AcceptButton>
              
              <RefuseButton onPress={() => refuseAppointment()}>
                <RefuseButtonText>Recusar</RefuseButtonText>
              </RefuseButton>
            </ButtonsView>
          </Data>
        </Card>
      ))}
    </Container>
    </>
  );
};

export default AppointmentCard;
