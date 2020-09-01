/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  AsyncStorage,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
  Text
} from 'react-native';


import {
  Container,
  ViewLoad,
  TextLoad,
  Logo,
  Content,
  Input,
  Button,
  Register,
  TextRecover,
  LabelContainer,
  InputLabel,
  InputContainer,
} from './styles';

import api from '../../services/api';

import Lottie from 'lottie-react-native';
import loading from '../../assets/loading.json';

import logo from '../../assets/logo.png';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);

  useEffect(() => {
    
  }, [email]);

  async function handleLogin() {
    // setLoad(true);
    setInterval(() => 3000);
    return navigation.navigate('Home')
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });
      console.log(response.data);
      if (response.data) {
        await AsyncStorage.setItem('token', response.data.token.token);
        await AsyncStorage.setItem('auth_id', response.data.user.id.toString());
        await AsyncStorage.setItem('username', response.data.user.username);
        await AsyncStorage.setItem('surname', response.data.user.surname);
        await AsyncStorage.setItem('email', response.data.user.email);
        navigation.replace('Home');
      } else {
        setLoad(false);
        navigation.navigate('ErrorLogin');
      }
    } catch (err) {
      console.log(err);
      setLoad(false);
      navigation.navigate('ErrorLogin');
    }
  }

  return (
    <>
      <StatusBar backgroundColor="#7915c1" />

      {load ? (
        <>
          <ViewLoad>
            <Lottie
              source={loading}
              style={{ width: '100%' }}
              autoSize
              autoPlay
              loop={true}
              resizeMode="contain"
            />
            <TextLoad>Carregando informações, aguarde...</TextLoad>
          </ViewLoad>
        </>
      ) : (
          <>
            <Container>

                <Logo source={logo} resizeMode="contain" />


                <InputContainer>
                  <LabelContainer>
                  <Text style={{fontSize:16}}>Email</Text>
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
                      Senha
                    </Text>
                  </LabelContainer>
                    <InputLabel 
                      placeholder="Senha"
                      placeholderTextColor="#A8A8A8"
                      keyboardType="default"
                      password={true}
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={true}
                      />
                </InputContainer>

              <KeyboardAvoidingView behavior='height'>
                <Content>
                  <Button onPress={handleLogin}>
                    <Image
                      source={require('../../assets/setadireita.png')}
                      style={{ width: 19, height: 20 }}
                    />
                  </Button>
                  <Text> Entrar </Text>

                  <Register onPress={() => navigation.navigate('RegisterDoctor')}>
                    Criar uma conta
                  </Register>
                </Content>
              </KeyboardAvoidingView>
            </Container>
          </>
        )}
    </>
  );
}
