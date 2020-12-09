/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  Image,
  ImageBackground,
  CheckBox,
  Picker
} from 'react-native';

import { Icon } from 'native-base';

import moment from 'moment';
import 'moment/min/locales'
import tz from 'moment-timezone';

import { colors, general, fonts } from '../../styles';

import {
  Container,
  ViewLoad,
  TextLoad,
  SectionCompanyData,
  DateAppointmentText,
  UnscheduleText,
  FinalizeText,
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
  ModalContainer,
  CancelingButton,
  FinalizeButton,
  Circle,
  CheckedCircle,
  ButtonContainer,
  LabelMedicine,
} from './styles';

import Lottie from 'lottie-react-native';
import loadingHeart from '../../assets/loadingHeart.json';

import { Modalize } from 'react-native-modalize';

import image from '../../assets/FinalizeSchedule.png'
import cancel from '../../assets/CancelAppointment.png'

import HeaderCheckout from '../../components/HeaderCheckout';

import api from '../../services/api';
import { color } from 'react-native-reanimated';


export default function DetailsDoctor({ navigation, route }) {
  const appointment_id = route.params.appointment_id;

  const [load, setLoad] = useState(true);
  const [appointment, setAppointment] = useState([]);
  const [reason, setReason] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const [medicine, setMedicine] = useState('');
  const [quantity, setQuantity] = useState('');
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [unit, setUnit] = useState('');
  const [period_type, setPeriodType] = useState('');

  const options = [
    {
      key: 'Não poderei comparecer a consulta',
      value: 'Não poderei comparecer a consulta'
    },
    {
      key: 'Aceitei a solicitação por acidente',
      value: 'Aceitei a solicitação por acidente'
    },
    {
      key: 'Outro',
      value: 'Outro:'
    }
  ]

  const period_options = [
    {
      key: 'exact_hour',
      value: 'horas exatas (às 10 horas)'
    },
    {
      key: 'interval',
      value: 'intervalo (das 10 horas às 14 horas)'
    },
    {
      key: 'in_event',
      value: 'após algum evento (antes do almoço/janta/dormir)'
    }
  ]

  const modalUnschedule = useRef(null);
  const modalFinalize = useRef(null);

  const onOpen = (modalRef) => {
    modalRef.current?.open();
  };


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

  async function unscheduleAppointment(id) {
    try {
      Alert.alert(
        "Desmarcar consulta",
        `Deseja realmente desmarcar a consulta com ${appointment.user.username} ${appointment.user.surname}?`,
        [
          {
            text: "Sim",
            onPress: () => {
              api.put(`appointment/cancel/${id}`, {
                reason: reason
              }).then((response) => {
                alert('Consulta cancelada com sucesso.')
                navigation.reset({ routes: [{ name: 'Home' }] });
              })
            },
          },
          { text: "Não", onPress: () => { }, style: "cancel" }
        ],
        { cancelable: true }
      );
    } catch (err) {
      alert("Erro ao desmarcar: " + err)
    }
  }

  async function finalizeAppointment(id) {
    try {
      let hours_formated = `${hours}:${minutes}:00`;
      Alert.alert(
        "Finalizar consulta",
        `Deseja realmente concluir a consulta com ${appointment.user.username} ${appointment.user.surname}?`,
        [
          {
            text: "Sim",
            onPress: () => {
              api.put(`appointment/done/${id}`, {
                "medicines": [{
                  name: medicine,
                  quantity,
                  unit,
                  period_type,
                  hours: hours_formated,
                  days
                }]
              })
                .then(response => {
                  alert('Consulta finalizada com sucesso.')
                  navigation.reset({ routes: [{ name: 'Home' }] });
                })
            },
          },
          { text: "Não", onPress: () => { }, style: "cancel" }
        ],
        { cancelable: true }
      );
    } catch (err) {
      alert("Erro ao desmarcar: " + err)
    }
  }

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
                <HeaderCheckout image={appointment.user.path_avatar}/>

                <Row style={{ justifyContent: 'space-between' }}>
                  <Col>
                    <DateAppointmentText>
                      {
                        moment(appointment.consultation_schedule)
                          .format('DD/MM/YYYY') + " \n"
                      }
                      {
                        moment(appointment.consultation_schedule)
                          .locale('pt-br')
                          .format('dddd') + " às "
                      }
                      {
                        moment(appointment.consultation_schedule)
                          .tz('America/Sao_Paulo')
                          .format('HH:ss') + "h"
                      }
                    </DateAppointmentText>
                  </Col>

                  <Col style={{ marginRight: 0 }}>
                    <TouchableOpacity onPress={() => onOpen(modalUnschedule)}
                      style={{ marginBottom: 10 }}>
                      <UnscheduleText>Desmarcar</UnscheduleText>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => onOpen(modalFinalize)}>
                      <FinalizeText>Finalizar consulta</FinalizeText>
                    </TouchableOpacity>
                  </Col>
                </Row>

                <Row style={{ borderTopColor: `${colors.light}`, borderTopWidth: 2 }}>
                  <Col>
                    <HeaderText style={{ marginTop: 20 }}>{`${appointment.user.username} ${appointment.user.surname}`}</HeaderText>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <SubtitleText>Ficha médica</SubtitleText>
                    <DetailsText>
                      Idade: {appointment.user.birthday ? `${moment().diff(appointment.user.birthday, 'years')} anos` : 'Não informado'} {'\n\n'}
                      Peso: {appointment.user.medicalInfo.weight ? `${appointment.user.medicalInfo.weight} kg` : 'Não informado'} {'\n\n'}
                      Altura: {appointment.user.medicalInfo.height ? `${appointment.user.medicalInfo.height} cm` : 'Não informado'} {'\n\n'}
                      Tipo sanguíneo: {appointment.user.medicalInfo.blood_type ? appointment.user.medicalInfo.blood_type : 'Não informado'}
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











      {/* modal de Cancelamento da consulta */}
      <Modalize ref={modalUnschedule}>
        <ModalContainer>
          <HeaderText
            style={{
              marginTop: 20, marginBottom: 20,
              alignSelf: 'center',
            }}>
            Cancelando Consulta
          </HeaderText>

          <Image source={cancel}
            style={{
              height: 200, width: 200,
              marginBottom: 20, marginLeft: 35,
              alignSelf: 'center',
            }}
          />

          <Row>
            <Col>
              <SubtitleText>Motivo do cancelamento</SubtitleText>
            </Col>
          </Row>

          <Row>
            <Col>
              {options.map(item => {
                return (
                  <ButtonContainer>
                    <Circle onPress={() => setReason(item.key)}>
                      {reason === item.key && (<CheckedCircle />)}
                    </Circle>

                    <Text>{item.value}</Text>
                  </ButtonContainer>
                )
              })}

              {reason === 'Outro' ?
                <Row>
                  <TextInput
                    keyboardType="default"
                    value={otherReason}
                    onChangeText={setOtherReason}
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#000',
                      height: 40,
                      width: '80%',
                      marginTop: -44.5,
                      marginLeft: 70
                    }} />
                </Row> : null}
            </Col>
          </Row>

          <Row>
            <Col>
              <Text style={{ color: `${colors.light}` }}>
                Obs: ao aceitar o cancelamento da consulta, tenha em mente que possivelmente estára prejudicando um paciente.
              </Text>
            </Col>
          </Row>

          <CancelingButton onPress={() => unscheduleAppointment(appointment.id)}>
            <Text style={{ color: '#fff' }}>Cancelar consulta</Text>
          </CancelingButton>
        </ModalContainer>
      </Modalize>


      {/* modal de Finalização da consulta */}
      <Modalize ref={modalFinalize}>
        <ModalContainer>
          <HeaderText
            style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
          >
            Finalizando Consulta
            </HeaderText>

          <Row style={{ borderBottomColor: `${colors.light}`, borderBottomWidth: 2 }}>
            <Col>
              <HeaderText style={{ marginBottom: 15 }}>Prescrição médica</HeaderText>
            </Col>
          </Row>

          <Row>
            <LabelMedicine>Nome:</LabelMedicine>
            <TextInput
              placeholder='amoxilina'
              keyboardType="default"
              value={medicine}
              onChangeText={setMedicine}
              style={{
                borderBottomWidth: 1, borderRadius: 10, borderColor: `${colors.light}`,
                backgroundColor: '#fff',
                height: 37, width: '70%',
                marginTop: -5, marginLeft: 5
              }}
            />
          </Row>

          <Row>
            <LabelMedicine>Quantidade:</LabelMedicine>

            <TextInput
              placeholder='300'
              keyboardType="default"
              value={quantity}
              onChangeText={setQuantity}
              style={{
                borderBottomWidth: 2, borderRadius: 10, borderColor: `${colors.light}`,
                backgroundColor: '#fff',
                height: 37, width: '15%',
                marginTop: -5, marginLeft: 5
              }}
            />

            <View style={{ borderBottomWidth: 2, borderColor: `${colors.light}`, marginLeft: 15 }}>
              <Picker
                mode="dropdown"
                selectedValue={unit}
                style={{ height: 30, width: 150 }}
                onValueChange={(itemValue, itemIndex) =>
                  setUnit(itemValue)
                }>
                <Picker.Item label="Selecione" value={null} />
                <Picker.Item label="gramas(g)" value="gramas(g)" />
                <Picker.Item label="miligramas(mg)" value="miligramas(mg)" />
                <Picker.Item label="mililitros(ml)" value="mililitros(ml)" />
                <Picker.Item label="comprimidos" value="comprimidos" />
              </Picker>
            </View>
          </Row>

          <Row>
            <LabelMedicine>Periodo</LabelMedicine>
          </Row>

          <Row>
            <Col>
              {period_options.map(item => {
                return (
                  <ButtonContainer>
                    <Circle onPress={() => setPeriodType(item.key)}>
                      {period_type === item.key && (<CheckedCircle />)}
                    </Circle>

                    <Text>{item.value}</Text>
                  </ButtonContainer>
                )
              })}
            </Col>
          </Row>

          {period_type === 'exact_hour' ?
            <>
              <Row>
                <LabelMedicine>Horário do medicamento:</LabelMedicine>
              </Row>

              <Row>
                <TextInput
                  placeholder='10'
                  keyboardType="default"
                  value={hours}
                  onChangeText={setHours}
                  style={{
                    borderBottomWidth: 2, borderRadius: 10, borderColor: `${colors.light}`,
                    backgroundColor: '#fff',
                    height: 37, width: '10%',
                    marginTop: -5, marginLeft: 5
                  }}
                />

                <LabelMedicine>:</LabelMedicine>

                <TextInput
                  placeholder='00'
                  keyboardType="default"
                  value={minutes}
                  onChangeText={setMinutes}
                  style={{
                    borderBottomWidth: 2, borderRadius: 10, borderColor: `${colors.light}`,
                    backgroundColor: '#fff',
                    height: 37, width: '10%',
                    marginTop: -5, marginLeft: 5
                  }}
                />

                <LabelMedicine>h</LabelMedicine>

              </Row>

              <Row>
                <LabelMedicine>Quantidade de Dias:</LabelMedicine>

                <TextInput
                  placeholder='15'
                  keyboardType="default"
                  value={days}
                  onChangeText={setDays}
                  style={{
                    borderBottomWidth: 2, borderRadius: 10, borderColor: `${colors.light}`,
                    backgroundColor: '#fff',
                    height: 37, width: '15%',
                    marginTop: -5, marginLeft: 5
                  }}
                />
              </Row>
            </>
            : null
          }

          <Row>
            <Text style={{ color: `${colors.light}`, fontWeight: 'bold' }}>
              Obs: Confira todos os dados inseridos antes de concluir a consulta.
            </Text>
          </Row>

          <FinalizeButton onPress={() => finalizeAppointment(appointment.id)}>
            <Text style={{ color: '#fff', fontSize: 15 }}>Concluir consulta</Text>
          </FinalizeButton>
        </ModalContainer>
      </Modalize>
    </>

  );
}
