import React, { useEffect } from 'react';
import { StatusBar, AsyncStorage } from 'react-native';
import {
  Container,
  Logo,
} from './styles';

import logo from '../../assets/logo.png';

export default function Splash({ navigation }) {

  useEffect(() => {
    setTimeout(() => { navigation.navigate('Login') }, 3500)
    // async function verifyToken() {
    //   const token = await AsyncStorage.getItem('token');

    //   if (token) {
    //   } else {
    //     setTimeout(() => {navigation.replace('Login')}, 3500)
    //   }
    // }
    // verifyToken();  
  }, [])
  return (
    <>
      <StatusBar backgroundColor="#7915c1" />
      <Container>
        <Logo
          resizeMode="contain"
          source={logo}
        />
      </Container>
    </>
  )
}