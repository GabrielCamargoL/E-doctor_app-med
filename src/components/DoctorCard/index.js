import React, {useState, useEffect} from 'react';

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


const DoctorCard = ({doctorId, doctorData, navigation})  => {

  const goDetailsDoctor = () => {
    console.log('tester');
    navigation.navigate('DetailsDoctor');
  };

  return (
    <>
    <Container
      elevation={8}>
      {doctorData.map(doctor => (
        <Card
          key={doctor.id}
          onPress={goDetailsDoctor}>

          <IconCard>
            <Image source={logo} resizeMode="center"/>
          </IconCard>

          <Data>
            <NameLabel>{doctor.name}</NameLabel>
            <SpecialtyLabel>{doctor.cargo}</SpecialtyLabel>
          </Data>
        </Card>
      ))}
    </Container>
    </>
  );
};

export default DoctorCard;
