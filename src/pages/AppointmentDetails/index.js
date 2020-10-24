/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import moment from 'moment';
import 'moment/min/locales'
import tz from 'moment-timezone';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { colors, general, fonts } from '../../styles';
// import LottieView from 'lottie-react-native';

import {
  Container,
  ViewLoad,
  TextLoad,
  SectionCompanyData,
  DateAppointmentText,
  HeaderText,
  SubtitleText,
  DetailsText,
  Row,
  Col,
  FlatButton,
  Button,
  ButtonText,
  FlatButtonText,
  CompanyRate,
} from './styles';

import Lottie from 'lottie-react-native';
import loadingHeart from '../../assets/loadingHeart.json';

import HeaderCheckout from '../../components/HeaderCheckout';

import api from '../../services/api';

export default function DetailsDoctor({ navigation, route }) {
  const appointment_id = route.params.appointment_id;

  const [value, setValue] = useState([]);

  const [load, setLoad] = useState(true);
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    async function getAppointmentInfo() {
      try {
        const response = await api.get(`appointment/details/${appointment_id}`)
        setAppointment(response.data[0])

        setLoad(false)
      } catch (err) {
        alert(err)
      }
    }

    getAppointmentInfo()
  }, [])

  return (
    <>
      {load ? (
        <>
          <ViewLoad>
            <Lottie
              source={loadingHeart}
              style={{ width: '80%' }}
              autoSize
              autoPlay
              loop={true}
              resizeMode="cover"
            />
            <TextLoad>Carregando informações, aguarde...</TextLoad>
          </ViewLoad>
        </>
      ) : (
          <>
            <Container>
              <ScrollView>
                <HeaderCheckout
                  butchery={value}
                  //showcase={showcase.url}
                  //logo={logo.url}
                  // onGoBack={
                  //   prevRouterName
                  //     ? () => navigation.navigate(prevRouterName, {total})
                  //     : () => navigation.navigate('Main', {total})
                  // }
                  large
                />
                <Row>
                  <Col>
                    <DateAppointmentText>
                      {moment(appointment.consultation_schedule).format('DD/MM/YYYY') + " - "}
                      {moment(appointment.consultation_schedule).locale('pt-br').format('dddd') + " às "}  
                      {moment(appointment.consultation_schedule).tz('America/Sao_Paulo').format('HH:ss')}h
                    </DateAppointmentText>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <HeaderText>{`${appointment.user.username} ${appointment.user.surname}`}</HeaderText>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <SubtitleText>Ficha médica</SubtitleText>
                    <DetailsText>
                      Idade: {appointment.user.birthday ?`${moment().diff(appointment.user.birthday, 'years')} anos`  :'Não informado' } {'\n\n'}
                      Peso: {appointment.user.medicalInfo.weight ? `${appointment.user.medicalInfo.weight} kg` :'Não informado'} {'\n\n'}
                      Altura: {appointment.user.medicalInfo.height ? `${appointment.user.medicalInfo.height} cm` :'Não informado'} {'\n\n'}
                      Tipo sanguíneo: {appointment.user.medicalInfo.blood_type ? appointment.user.medicalInfo.blood_type :'Não informado'}
                    </DetailsText>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <SubtitleText>Problemas de Saúde</SubtitleText>
                    <DetailsText>
                      {appointment.user.medicalInfo.health_problems ? appointment.user.medicalInfo.health_problems : 'Não informado'}
                    </DetailsText>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <SubtitleText>Alergias e Reações</SubtitleText>
                    <DetailsText>
                      {appointment.user.medicalInfo.allergy ? appointment.user.medicalInfo.allergy : 'Não informado'}
                    </DetailsText>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <SubtitleText>Medicamentos que utiliza regularmente</SubtitleText>
                    <DetailsText>
                    {appointment.user.medicalInfo.personal_medicine ? appointment.user.medicalInfo.personal_medicine : 'Não informado'}
                    </DetailsText>
                  </Col>
                </Row>
              </ScrollView>
            </Container>
          </>
        )}
    </>
  );
}
