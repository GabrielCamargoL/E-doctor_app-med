import React, { useState, useEffect } from 'react';
import { AsyncStorage, TouchableOpacity, View, Text } from 'react-native';

import {
  Container,
  Row,
  Col,
  CategoryTitle,
  CategoryInfo
} from './styles';

import { Icon } from 'native-base';

import api from '../../services/api';


export default function MyProfile({ navigation }) {
  const [dropdownDoctor, setDropdownDoctor] = useState(false);
  const [dropdownAddress, setDropdownAddress] = useState(false);
  const [dropdownClinic, setDropdownClinic] = useState(false);
  const [dropdownAvailableHours, setDropdownAvailableHours] = useState(false);

  const [doctorData, setDoctorData] = useState({});
  const [clinicData, setClinicData] = useState({});
  const [available_hours, setAvailableHours] = useState(["10:00"]);

  useEffect(() => {
    async function getDoctorData() {
      try {
        const id = await AsyncStorage.getItem('auth_id');
        const response = await api.get(`/clinicAuth/getClinic/${id}`);

        setDoctorData(response.data.doctor);
        setClinicData(response.data)

        const hours_array = response.data.doctor.available_hours.split(',');

      } catch (err) {
        console.log('get Doc Data:' + err)
      }
    }
    getDoctorData();
  }, [])

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
          <>{available_hours.map((item, index) => {
            <>
              <View>
                <Text>{item}</Text>
              </View>
            </>
          })
          }</>) : null}
      </Container>
    </>
  )
}