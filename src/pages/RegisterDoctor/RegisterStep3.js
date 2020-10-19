import React, { useState, useEffect } from 'react';

import {
  Container,
  Row,
  Col,
  SubTitle,
  LabelInput,
  InputLabel,
  InputContainer,
  ButtonSend,
  ButtonSendText,
  Circle,
  CheckedCircle,
  ButtonContainer,
} from './styles';

import { Text, View, CheckBox } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';


export default function RegisterStep3({ navigation, route }) {

  let doctorInfo = route.params.doctorInfo;

  const [specialty, setSpecialty] = useState('');
  const [crm, setCrm] = useState('');
  const [home_clinic, setHomeClinic] = useState(false);
  const [clinic_cep, setClinicCep] = useState('');
  const [clinic_street, setClinicStreet] = useState('');
  const [clinic_neighborhood, setClinicNeighborhood] = useState('');
  const [clinic_number, setClinicNumber] = useState('');
  const [HouseWithoutNumber, setHouseWithoutNumber] = useState(false);
  const [clinic_complement, setClinicComplement] = useState('');
  const [clinic_uf, setClinicUf] = useState('');
  const [clinic_city, setClinicCity] = useState('');

  const options = [{ key: false, value: 'Não' }, { key: true, value: 'Sim' }]

  async function handleAdvance() {
    return navigation.navigate('RegisterStep4', {
      doctorInfo: {
        ...doctorInfo,
        specialty,
        crm,
      },
      clinicInfo: {
        home_clinic,
        clinic_cep,
        clinic_street,
        clinic_neighborhood,
        clinic_number,
        clinic_complement,
        clinic_uf,
        clinic_city
      }
    });
  }

  return (
    <>
      <Container>
        <SubTitle>Dados Profissionais</SubTitle>

        <Row>
          <InputContainer>
            <LabelInput style={{ fontSize: 16 }}>Especialidade</LabelInput>
            <InputLabel
              placeholder="Especialidade"
              placeholderTextColor="#A8A8A8"
              keyboardType="email-address"
              value={specialty}
              onChangeText={setSpecialty}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput style={{ fontSize: 16 }}> CRM </LabelInput>
            <InputLabel
              placeholder="CRM"
              placeholderTextColor="#A8A8A8"
              keyboardType="default"
              value={crm}
              onChangeText={setCrm}
            />
          </InputContainer>
        </Row>

        <SubTitle style={{ marginTop: 25 }}>Consultorio</SubTitle>

        <LabelInput style={{ fontSize: 16, marginLeft: 10 }}>Consultório Residencial?</LabelInput>


        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', margin: 10 }}>
          {options.map(item => {
            return (
              <>
                <ButtonContainer>
                  <Circle onPress={() => setHomeClinic(item.key)}>
                    {home_clinic === item.key && (<CheckedCircle />)}
                  </Circle>
                  <Text>{item.value}</Text>
                </ButtonContainer>
              </>
            )
          })}
        </View>

        {home_clinic ?
          <>
          </>
          :
          <>
            <Row>
              <InputContainer>
                <LabelInput style={{ fontSize: 16 }}> CEP </LabelInput>
                <InputLabel
                  placeholder="00000 000"
                  placeholderTextColor="#A8A8A8"
                  keyboardType="default"
                  value={clinic_cep}
                  onChangeText={setClinicCep}
                />
              </InputContainer>
            </Row>

            <Row>
              <InputContainer>
                <LabelInput style={{ fontSize: 16 }}>Logradouro</LabelInput>
                <InputLabel
                  placeholder="Logradouro"
                  placeholderTextColor="#A8A8A8"
                  keyboardType="email-address"
                  value={clinic_street}
                  onChangeText={setClinicStreet}
                />
              </InputContainer>
            </Row>

            <Row>
              <InputContainer>
                <LabelInput style={{ fontSize: 16 }}> Bairro </LabelInput>
                <InputLabel
                  placeholder="Bairro"
                  placeholderTextColor="#A8A8A8"
                  keyboardType="default"
                  value={clinic_neighborhood}
                  onChangeText={setClinicNeighborhood}
                />
              </InputContainer>
            </Row>


            <Row style={{ alignItems: 'center' }}>
              <Col style={{ width: '48%' }}>
                <InputContainer>
                  <LabelInput style={{ fontSize: 16 }}>Número</LabelInput>
                  <InputLabel
                    placeholder="298"
                    placeholderTextColor="#A8A8A8"
                    keyboardType="number-pad"
                    value={clinic_number}
                    onChangeText={setClinicNumber}
                  />
                </InputContainer>
              </Col>

              <Col style={{ flexDirection: 'row' }}>
                <CheckBox value={HouseWithoutNumber} onValueChange={setHouseWithoutNumber} />
                <Text> Endereço sem Número</Text>
              </Col>
            </Row>


            <Row>
              <InputContainer>
                <LabelInput style={{ fontSize: 16 }}>Complemento</LabelInput>
                <InputLabel
                  placeholder="Complemento"
                  placeholderTextColor="#A8A8A8"
                  keyboardType="email-address"
                  value={clinic_complement}
                  onChangeText={setClinicComplement}
                />
              </InputContainer>
            </Row>

            <Row>
              <Col style={{ width: '20%' }}>
                <InputContainer>
                  <LabelInput style={{ fontSize: 16 }}>UF</LabelInput>
                  <InputLabel
                    placeholder="SP"
                    placeholderTextColor="#A8A8A8"
                    keyboardType="number-pad"
                    value={clinic_uf}
                    onChangeText={setClinicUf}
                  />
                </InputContainer>
              </Col>

              <InputContainer>
                <LabelInput style={{ fontSize: 16 }}>Cidade</LabelInput>
                <InputLabel
                  placeholder="Cidade"
                  placeholderTextColor="#A8A8A8"
                  keyboardType="number-pad"
                  value={clinic_city}
                  onChangeText={setClinicCity}
                />
              </InputContainer>
            </Row>
          </>
        }

        <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 50 }}>
          <ButtonSend onPress={() => handleAdvance()}>
            <ButtonSendText>Avançar</ButtonSendText>
          </ButtonSend>
        </Row>
      </Container>
    </>
  )
}