import React, { useState, useEffect } from 'react';

import {
  Container,
  Row,
  SubTitle,
  LabelInput,
  InputLabel,
  InputContainer,
  ButtonSend,
  ButtonSendText
} from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';


export default function RegisterDoctor({ navigation }) {

  const [username, setUsername] = useState('');
  const [surname, setSurname] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [celphone, setCelphone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');


  async function handleAdvance() {
    navigation.navigate('RegisterStep2', {
      doctorInfo: {
        username,
        surname,
        cpf,
        email,
        celphone,
        password
      }
    });
  }

  return (
    <>
      <Container>
        <SubTitle> Dados Pessoal </SubTitle>

        <Row>
          <InputContainer>
            <LabelInput>Nome</LabelInput>
            <InputLabel
              placeholder="José"
              placeholderTextColor="#A8A8A8"
              keyboardType="email-address"
              value={username}
              onChangeText={setUsername}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Sobrenome</LabelInput>
            <InputLabel
              placeholder="Silva"
              placeholderTextColor="#A8A8A8"
              keyboardType="email-address"
              value={surname}
              onChangeText={setSurname}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput> CPF </LabelInput>
            <InputLabel
              placeholder="999999999-99"
              placeholderTextColor="#A8A8A8"
              keyboardType="default"
              value={cpf}
              onChangeText={setCpf}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>E-mail</LabelInput>
            <InputLabel
              placeholder="josé@email.com"
              placeholderTextColor="#A8A8A8"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Telefone</LabelInput>
            <InputLabel
              placeholder="99999-9999"
              placeholderTextColor="#A8A8A8"
              keyboardType="phone-pad"
              value={celphone}
              onChangeText={setCelphone}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput style={{ fontSize: 16 }}>Senha</LabelInput>
            <InputLabel
              placeholder="********"
              placeholderTextColor="#A8A8A8"
              secureTextEntry={true}
              password={true}
              value={password}
              onChangeText={setPassword}
            />
          </InputContainer>
        </Row>

        <Row>
          <InputContainer>
            <LabelInput>Confirme a senha</LabelInput>
            <InputLabel
              placeholder="********"
              placeholderTextColor="#A8A8A8"
              secureTextEntry={true}
              password={true}
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
            />
          </InputContainer>
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