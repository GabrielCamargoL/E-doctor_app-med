import React, {useState, useEffect} from 'react';
import moment from 'moment';
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
} from './styles';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import logo from '../../assets/logo.png';


const AppointmentCard = ({appointmentData, navigation})  => {

  const goDetailsDoctor = () => {
    navigation.navigate('DetailsDoctor');
  };

  useEffect(() => {
    moment.locale('pt-BR')
  }, [])
  

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
          </Data>
        </Card>
      ))}
    </Container>
    </>
  );
};

export default AppointmentCard;
