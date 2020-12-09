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

import messaging from '@react-native-firebase/messaging';

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
import loadingHeart from '../../assets/loadingHeart.json';

import logo from '../../assets/logo.png';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);

  useEffect(() => {
    verifyToken();
  }, []);

  async function verifyToken() {
    const token = await AsyncStorage.getItem('token');
    
    if (token) {
      navigation.replace('Home');
    }
  }

  async function handleLogin() {
    setLoad(true);
    try {
      const response = await api.post('/doctorAuth/signIn', {
        email,
        password,
      });
      console.log(response.data.doctor.fcmToken);
      if (response.data) {
        await AsyncStorage.setItem('token', response.data.token.token);
        await AsyncStorage.setItem('auth_id', response.data.doctor.id.toString());
        await AsyncStorage.setItem('username', response.data.doctor.username);
        await AsyncStorage.setItem('surname', response.data.doctor.surname);
        await AsyncStorage.setItem('email', response.data.doctor.email);
        getTokenFirebase(response.data.doctor.fcmToken, response.data.doctor.id);
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

  const getTokenFirebase = async (fcmToken, auth_id) => {
    let fcmTokenStorage = await messaging().getToken();
    console.log(auth_id)
    if (fcmTokenStorage == fcmToken)
      return setTimeout(() => navigation.replace('Home'), 3000);

    try {
      await api.put(`/doctorAuth/fcmToken/${auth_id}`, { fcmToken: fcmTokenStorage });
      await AsyncStorage.setItem('fcmToken', fcmTokenStorage);
      return setTimeout(() => navigation.replace('Home'), 3000);
    } catch (error) {
      console.log("PUT fcmToken: " + error);
      setLoad(false);
      navigation.navigate('ErrorLogin');
    }
  };

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
