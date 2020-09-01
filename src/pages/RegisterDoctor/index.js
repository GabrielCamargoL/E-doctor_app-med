import React, { useState, useEffect } from 'react';

import {
  Container,
  SubTitle,
  LabelContainer,
  InputLabel,
  InputContainer,
  Advance,
} from './styles';

import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import api from '../../services/api';


export default function RegisterDoctor({ navigation }) {

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return(
    <>
      <Container>
        <SubTitle>
          Dados Pessoal
        </SubTitle>
        <InputContainer>
          <LabelContainer>
            <Text style={{fontSize:16}}>Nome</Text>
          </LabelContainer>
            <InputLabel 
              placeholder="Email ou Usuário"
              placeholderTextColor="#A8A8A8"
              keyboardType="email-address"
              value={name}
              onChangeText={setName}
              />
        </InputContainer>

        <InputContainer>
          <LabelContainer>
            <Text style={{fontSize:16}}> CPF </Text>
          </LabelContainer>
            <InputLabel 
              placeholder="Senha"
              placeholderTextColor="#A8A8A8"
              keyboardType="default"
              password={true}
              value={cpf}
              onChangeText={setCpf}
              secureTextEntry={true}
              />
        </InputContainer>

        <InputContainer>
          <LabelContainer>
            <Text style={{fontSize:16}}>E-mail</Text>
          </LabelContainer>
            <InputLabel 
              placeholder="Email ou Usuário"
              placeholderTextColor="#A8A8A8"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              />
        </InputContainer>

        <InputContainer>
          <LabelContainer>
            <Text style={{fontSize:16}}>
              CPF
            </Text>
          </LabelContainer>
            <InputLabel 
              placeholder="99999-9999"
              placeholderTextColor="#A8A8A8"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              />
        </InputContainer>

        <InputContainer>
          <LabelContainer>
          <Text style={{fontSize:16}}>Senha</Text>
          </LabelContainer>
            <InputLabel 
              placeholder="Email ou Usuário"
              placeholderTextColor="#A8A8A8"
              keyboardType="email-address"
              value={password}
              secureTextEntry={true}
              password={true}
              onChangeText={setPassword}
              />
        </InputContainer>

        <InputContainer>
          <View style={{
            backgroundColor: '#fff',
            paddingHorizontal: 10,
            top: 10,
            left: 25,
            zIndex: 50,
            width:'40%',
          }}>
            <Text style={{fontSize:16}}>Confirme a senha</Text>
          </View>
            <InputLabel
              placeholder="Email ou Usuário"
              placeholderTextColor="#A8A8A8"
              keyboardType="email-address"
              value={passwordConfirm}
              secureTextEntry={true}
              password={true}
              onChangeText={setPasswordConfirm}
              />
        </InputContainer>
        
        <TouchableOpacity>
          <View style={{alignItems:'center'}}>
            <Advance>
              Avançar
            </Advance>
          </View>
        </TouchableOpacity>
      </Container>
    </>
  )
}