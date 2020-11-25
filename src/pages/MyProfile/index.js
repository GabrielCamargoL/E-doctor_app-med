import React, { useState, useEffect, useRef } from 'react';
import { AsyncStorage, TouchableOpacity, View, Text, FlatList, Alert } from 'react-native';

import { colors, general, fonts } from '../../styles';
import {
  Container,
  Row,
  Col,
  CategoryTitle,
  CategoryInfo,
  EditButton,
  EditButtonText,
  ModalContainer,
  Badge,
  BadgeLabel,
} from './styles';

import { Icon } from 'native-base';

import { Modalize } from 'react-native-modalize';

import api from '../../services/api';


export default function MyProfile({ navigation }) {
  const [dropdownDoctor, setDropdownDoctor] = useState(false);
  const [dropdownAddress, setDropdownAddress] = useState(false);
  const [dropdownClinic, setDropdownClinic] = useState(false);
  const [dropdownAvailableHours, setDropdownAvailableHours] = useState(false);

  const [doctorData, setDoctorData] = useState({});
  const [clinicData, setClinicData] = useState({});

  const [available_hours, setAvailableHours] = useState([]);
  const [total_hours, setTotalHours] = useState([
    { key: '07:00:00', available: false },
    { key: '08:00:00', available: false },
    { key: '09:00:00', available: false },
    { key: '10:00:00', available: false },
    { key: '11:00:00', available: false },
    { key: '12:00:00', available: false },
    { key: '13:00:00', available: false },
    { key: '14:00:00', available: false },
    { key: '15:00:00', available: false },
    { key: '16:00:00', available: false },
    { key: '17:00:00', available: false },
    { key: '18:00:00', available: false },
    { key: '19:00:00', available: false },
  ]);

  const modalUpdateHourAvailable = useRef(null);

  const onOpen = (modalRef) => {
    modalRef.current?.open();
  };

  useEffect(() => {
    getDoctorData();
  }, [])

  async function getDoctorData() {
    try {
      const id = await AsyncStorage.getItem('auth_id');
      const response = await api.get(`/clinicAuth/getClinic/${id}`);

      setDoctorData(response.data.doctor);
      setClinicData(response.data)

      const hours_array = response.data.doctor.available_hours.split(',');
      let array_pivot = [];

      for (var hour of hours_array) {
        array_pivot = [...array_pivot, { key: `${hour}`, available: true }]
      }

      setAvailableHours(array_pivot)

      let arrayHelp = total_hours;
      for (var check_hour of array_pivot) {
        total_hours.map((item, index) => {
          if (item.key === check_hour.key) {
            arrayHelp[index] = { key: `${check_hour.key}`, available: true }
          }
        });
      }

      setTotalHours(arrayHelp);

    } catch (err) {
      console.log('get Doc Data:' + err)
    }
  }

  async function changeAvailability(item, index) {
    let arrayHelp = total_hours;
    arrayHelp[index] = { key: item.key, available: !item.available };

    setTotalHours(arrayHelp);
  }

  return (
    <>
      <Container>
        <TouchableOpacity onPress={() => { setDropdownDoctor(!dropdownDoctor) }}>
          <Row>
            {dropdownDoctor ? (
              <Icon type='FontAwesome' name='chevron-right'
                style={{ marginTop: 6, marginRight: 10, fontSize: 16 }}
              />
            ) : (
                <Icon type='FontAwesome' name='chevron-down'
                  style={{ marginTop: 6, marginRight: 10, fontSize: 16 }}
                />
              )}
            <CategoryTitle>Sobre você</CategoryTitle>
          </Row>
        </TouchableOpacity>
        {dropdownDoctor ? (
          <>
            <Row>
              <Col>
                <Text>Nome: {doctorData.username} {doctorData.surname}</Text>
                <Text>CPF: {doctorData.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</Text>
                <Text>E-mail: {doctorData.email}</Text>
                <Text>Telefone: {doctorData.celphone.replace(/(\d{5})(\d{4})/, "$1 - $2")}</Text>
              </Col>
            </Row>

            <Row>
              <EditButton>
                <EditButtonText>Editar</EditButtonText>
              </EditButton>
            </Row>
          </>
        ) : null}

        <TouchableOpacity onPress={() => { setDropdownAddress(!dropdownAddress) }}>
          <Row>
            {dropdownAddress ? (
              <Icon type='FontAwesome' name='chevron-right'
                style={{ marginTop: 6, marginRight: 10, fontSize: 16 }}
              />
            ) : (
                <Icon type='FontAwesome' name='chevron-down'
                  style={{ marginTop: 6, marginRight: 10, fontSize: 16 }}
                />
              )}
            <CategoryTitle>Endereço Residencial</CategoryTitle>
          </Row>
        </TouchableOpacity>
        {dropdownAddress ? (
          <>
            <Row>
              <Col>
                <Text>Cidade: {doctorData.city}</Text>
                <Text>Estado: {doctorData.state}</Text>
                <Text>Bairro: {doctorData.neighborhood}</Text>
                <Text>Logradouro: {doctorData.street}, {doctorData.house_number}</Text>
              </Col>
            </Row>

            <Row>
              <EditButton>
                <EditButtonText>Editar</EditButtonText>
              </EditButton>
            </Row>
          </>
        ) : null}

        <TouchableOpacity onPress={() => { setDropdownClinic(!dropdownClinic) }}>
          <Row>
            {dropdownClinic ? (
              <Icon type='FontAwesome' name='chevron-right'
                style={{ marginTop: 6, marginRight: 10, fontSize: 16 }}
              />
            ) : (
                <Icon type='FontAwesome' name='chevron-down'
                  style={{ marginTop: 6, marginRight: 10, fontSize: 16 }}
                />
              )}
            <CategoryTitle>Sobre a clínica</CategoryTitle>
          </Row>
        </TouchableOpacity>
        {dropdownClinic ? (
          <>
            <Row>
              <Col>
                <Text>Cidade: {clinicData.city}</Text>
                <Text>Estado: {clinicData.state}</Text>
                <Text>Bairro: {clinicData.neighborhood}</Text>
                <Text>Logradouro: {clinicData.street}, {clinicData.house_number}</Text>
              </Col>
            </Row>

            <Row>
              <EditButton>
                <EditButtonText>Editar</EditButtonText>
              </EditButton>
            </Row>
          </>
        ) : null}

        <TouchableOpacity onPress={() => { setDropdownAvailableHours(!dropdownAvailableHours) }}>
          <Row>
            {dropdownAvailableHours ? (
              <Icon type='FontAwesome' name='chevron-right'
                style={{ marginTop: 6, marginRight: 10, fontSize: 16 }}
              />
            ) : (
                <Icon type='FontAwesome' name='chevron-down'
                  style={{ marginTop: 6, marginRight: 10, fontSize: 16 }}
                />
              )}
            <CategoryTitle>Horário de Atendimento</CategoryTitle>
          </Row>
        </TouchableOpacity>
        {dropdownAvailableHours ? (
          <>
            <View>
              <FlatList
                horizontal={true}
                data={available_hours}
                renderItem={({ item }) => (
                  <Text>{item.key} | </Text>
                )}
              />
            </View>
            <Row>
              <EditButton onPress={() => onOpen(modalUpdateHourAvailable)}>
                <EditButtonText>Editar</EditButtonText>
              </EditButton>
            </Row>
          </>) : null}
      </Container>

      {/* modal de alterar horarios de funcionamento*/}
      <Modalize ref={modalUpdateHourAvailable}
        modalTopOffset={100}
      >
        <ModalContainer>

          <FlatList
            numColumns={4}
            data={total_hours}
            extraData={available_hours}
            renderItem={({ item, index }) => (
              <Badge
                backgroundColor={item.available ? colors.success : colors.danger}
                borderColor={colors.light}
                onPress={() => changeAvailability(item, index)}
              >
                <BadgeLabel
                  color={colors.background}
                >
                  {item.key}
                </BadgeLabel>
              </Badge>
            )}
          />
        </ModalContainer>
      </Modalize>
    </>
  )
}