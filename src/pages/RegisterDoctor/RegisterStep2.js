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


export default function RegisterStep2({ navigation }) {

  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
  const [HouseWithoutNumber, setHouseWithoutNumber] = useState(false);
  const [complement, setComplement] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  async function handleAdvance() {
    return navigation.navigate('RegisterStep3');
  }

  return (
    <>
      <Container>
        <SubTitle>Endereço Residencial</SubTitle>


        <InputContainer>
          <LabelContainer>
            <Text style={{ fontSize: 16 }}> CEP </Text>
          </LabelContainer>
          <InputLabel
            placeholder="CRM"
            placeholderTextColor="#A8A8A8"
            keyboardType="default"
            value={cep}
            onChangeText={setCep}
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
            value={street}
            onChangeText={setStreet}
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
            value={neighborhood}
            onChangeText={setNeighborhood}
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
              value={number}
              onChangeText={setNumber}
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
            value={complement}
            onChangeText={setComplement}
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
              value={uf}
              onChangeText={setUf}
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
              value={city}
              onChangeText={setCity}
            />
          </InputContainer>
        </View>

        <TouchableOpacity onPress={handleAdvance}>
          <View style={{ alignItems: 'center' }}>
            <Advance>Avançar</Advance>
          </View>
        </TouchableOpacity>
      </Container>
    </>
  )
}