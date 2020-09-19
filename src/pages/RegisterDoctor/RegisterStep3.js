import React, { useState, useEffect } from 'react';

import {
  Container,
  SubTitle,
  LabelContainer,
  InputLabel,
  HalfInputLabel,
  SmallInputLabel,
  InputContainer,
  Advance,
  Circle,
  CheckedCircle,
  ButtonContainer,
} from './styles';

import { Text, View, CheckBox } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';


export default function RegisterStep3({ navigation, route }) {

  let doctorInfo = route.params.doctorInfo;
  console.log(doctorInfo)

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
      doctorInfo,
      clinicInfo: {
        specialty,
        crm,
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

        <InputContainer>
          <View style={{
            backgroundColor: '#fff',
            paddingHorizontal: 10,
            top: 10,
            left: 25,
            zIndex: 50,
            width: '33%',
          }}>
            <Text style={{ fontSize: 16 }}>Especialidade</Text>
          </View>
          <InputLabel
            placeholder="Especialidade"
            placeholderTextColor="#A8A8A8"
            keyboardType="email-address"
            value={specialty}
            onChangeText={setSpecialty}
          />
        </InputContainer>

        <InputContainer>
          <LabelContainer>
            <Text style={{ fontSize: 16 }}> CRM </Text>
          </LabelContainer>
          <InputLabel
            placeholder="CRM"
            placeholderTextColor="#A8A8A8"
            keyboardType="default"
            value={crm}
            onChangeText={setCrm}
          />
        </InputContainer>

        <SubTitle style={{ marginTop: 25 }}>Consultorio</SubTitle>

        <Text style={{ fontSize: 16, marginLeft: 10 }}>Consultório Residencial?</Text>

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
            <InputContainer>
              <LabelContainer>
                <Text style={{ fontSize: 16 }}> CEP </Text>
              </LabelContainer>
              <InputLabel
                placeholder="00000 000"
                placeholderTextColor="#A8A8A8"
                keyboardType="default"
                value={clinic_cep}
                onChangeText={setClinicCep}
              />
            </InputContainer>

            <InputContainer>
              <View style={{
                backgroundColor: '#fff',
                paddingHorizontal: 10,
                top: 10,
                left: 25,
                zIndex: 50,
                width: '33%',
              }}>
                <Text style={{ fontSize: 16 }}>Logradouro</Text>
              </View>
              <InputLabel
                placeholder="Logradouro"
                placeholderTextColor="#A8A8A8"
                keyboardType="email-address"
                value={clinic_street}
                onChangeText={setClinicStreet}
              />
            </InputContainer>

            <InputContainer>
              <LabelContainer>
                <Text style={{ fontSize: 16 }}> Bairro </Text>
              </LabelContainer>
              <InputLabel
                placeholder="Bairro"
                placeholderTextColor="#A8A8A8"
                keyboardType="default"
                value={clinic_neighborhood}
                onChangeText={setClinicNeighborhood}
              />
            </InputContainer>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <InputContainer>
                <View style={{
                  backgroundColor: '#fff',
                  paddingHorizontal: 10,
                  top: 10,
                  left: 25,
                  zIndex: 50,
                  width: '50%',
                }}>
                  <Text style={{ fontSize: 16 }}>Número</Text>
                </View>
                <HalfInputLabel
                  placeholder="Especialidade"
                  placeholderTextColor="#A8A8A8"
                  keyboardType="number-pad"
                  value={clinic_number}
                  onChangeText={setClinicNumber}
                />
              </InputContainer>

              <CheckBox value={HouseWithoutNumber} onValueChange={setHouseWithoutNumber} />
              <Text> Endereço sem Número</Text>
            </View>

            <InputContainer>
              <View style={{
                backgroundColor: '#fff',
                paddingHorizontal: 10,
                top: 10,
                left: 25,
                zIndex: 50,
                width: '33%',
              }}>
                <Text style={{ fontSize: 16 }}>Complemento</Text>
              </View>
              <InputLabel
                placeholder="Especialidade"
                placeholderTextColor="#A8A8A8"
                keyboardType="email-address"
                value={clinic_complement}
                onChangeText={setClinicComplement}
              />
            </InputContainer>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <InputContainer>
                <View style={{
                  backgroundColor: '#fff',
                  paddingHorizontal: 10,
                  top: 10,
                  left: 25,
                  zIndex: 50,
                  width: '23%',
                }}>
                  <Text style={{ fontSize: 16 }}>UF</Text>
                </View>
                <SmallInputLabel
                  placeholder="SP"
                  placeholderTextColor="#A8A8A8"
                  keyboardType="number-pad"
                  value={clinic_uf}
                  onChangeText={setClinicUf}
                />
              </InputContainer>

              <InputContainer>
                <View style={{
                  backgroundColor: '#fff',
                  paddingHorizontal: 10,
                  top: 10,
                  left: 25,
                  zIndex: 50,
                  width: '50%',
                }}>
                  <Text style={{ fontSize: 16 }}>Cidade</Text>
                </View>
                <HalfInputLabel
                  placeholder="Cidade"
                  placeholderTextColor="#A8A8A8"
                  keyboardType="number-pad"
                  value={clinic_city}
                  onChangeText={setClinicCity}
                />
              </InputContainer>
            </View>
          </>
        }

        <TouchableOpacity onPress={handleAdvance}>
          <View style={{ alignItems: 'center' }}>
            <Advance>Avançar</Advance>
          </View>
        </TouchableOpacity>
      </Container>
    </>
  )
}