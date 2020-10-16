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
  ButtonSendText
} from './styles';

import { Text, View, CheckBox } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';


export default function RegisterStep2({ navigation, route }) {
  let doctorInfo = route.params.doctorInfo;

  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [house_number, setHouseNumber] = useState('');
  const [HouseWithoutNumber, setHouseWithoutNumber] = useState(false);
  const [complement_address, setComplementAddress] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  async function handleAdvance() {

    return navigation.navigate('RegisterStep3', {
      doctorInfo: {
        ...doctorInfo,
        cep,
        street,
        neighborhood,
        house_number,
        complement_address,
        uf,
        city
      }
    });
}

return (
  <>
    <Container>
      <SubTitle>Dados Residenciais</SubTitle>

      <Row>
        <InputContainer>
          <LabelInput> CEP </LabelInput>
          <InputLabel
            placeholder="00000 000"
            placeholderTextColor="#A8A8A8"
            keyboardType="default"
            value={cep}
            onChangeText={setCep}
          />
        </InputContainer>
      </Row>

      <Row>
        <InputContainer>
          <LabelInput >Logradouro</LabelInput>
          <InputLabel
            placeholder="Logradouro"
            placeholderTextColor="#A8A8A8"
            keyboardType="email-address"
            value={street}
            onChangeText={setStreet}
          />
        </InputContainer>
      </Row>

      <Row>
        <InputContainer>
          <LabelInput > Bairro </LabelInput>
          <InputLabel
            placeholder="Bairro"
            placeholderTextColor="#A8A8A8"
            keyboardType="default"
            value={neighborhood}
            onChangeText={setNeighborhood}
          />
        </InputContainer>
      </Row>

      <Row style={{ alignItems: 'center' }}>
        <Col style={{ width: '45%' }}>
          <InputContainer>
            <LabelInput >Número</LabelInput>
            <InputLabel
              placeholder="248"
              placeholderTextColor="#A8A8A8"
              keyboardType="number-pad"
              value={house_number}
              onChangeText={setHouseNumber}
            />
          </InputContainer>
        </Col>

        <CheckBox value={HouseWithoutNumber} onValueChange={setHouseWithoutNumber} />
        <LabelInput> Endereço sem Número</LabelInput>
      </Row>

      <Row>
        <InputContainer>
          <LabelInput >Complemento</LabelInput>
          <InputLabel
            placeholder="Complemento"
            placeholderTextColor="#A8A8A8"
            keyboardType="email-address"
            value={complement_address}
            onChangeText={setComplementAddress}
          />
        </InputContainer>
      </Row>

      <Row>
        <Col style={{ width: '20%' }}>
          <InputContainer>
            <LabelInput >UF</LabelInput>
            <InputLabel
              placeholder="SP"
              placeholderTextColor="#A8A8A8"
              keyboardType="number-pad"
              value={uf}
              onChangeText={setUf}
            />
          </InputContainer>
        </Col>

        <Col style={{ width: '80%' }}>
          <InputContainer>
            <LabelInput >Cidade</LabelInput>
            <InputLabel
              placeholder="Cidade"
              placeholderTextColor="#A8A8A8"
              keyboardType="number-pad"
              value={city}
              onChangeText={setCity}
            />
          </InputContainer>
        </Col>
      </Row>

      <Row style={{alignItems:'center', justifyContent:'center', marginBottom:50}}>
          <ButtonSend onPress={() => handleAdvance()}>
            <ButtonSendText>Avançar</ButtonSendText>
          </ButtonSend>
        </Row>

    </Container>
  </>
)
}