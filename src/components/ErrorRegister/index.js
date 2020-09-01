import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import Lottie from 'lottie-react-native';

import error from '../../assets/error.json';

import { Container, Label, Button, ButtonText } from './styles';

export default function ErrorRegister({ navigation }) {
  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="light-content" />
      <Container>
        <Lottie 
          source={error}
          style={{width: '100%'}}
          autoSize
          autoPlay
          loop={false}
          resizeMode="contain"
        />
        <Label>
          Atenção! Erro ao cadastrar
        </Label>
        <Button onPress={() => navigation.navigate('Login')}>
          <ButtonText>
            Ok
          </ButtonText>
        </Button>
      </Container>
    </>
  )
}