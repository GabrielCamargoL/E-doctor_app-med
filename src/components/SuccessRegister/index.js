import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Container, Label, ButtonText, Button } from './styles';

import Lottie from 'lottie-react-native';

import success from '../../assets/success.json';

export default function ErrorRegister({ navigation }) {
  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="light-content" />
      <Container>
        <Lottie
          source={success}
          style={{width: '100%'}}
          autoSize
          autoPlay
          loop={false}
          resizeMode="contain"
        />
        <Label>Sucesso!</Label>
        <Label>
          Seu registro foi computado com sucesso
        </Label>

        <Button onPress={() => navigation.navigate('Home')}>
          <ButtonText>
            Ok
          </ButtonText>
        </Button>
      </Container>
    </>
  )
}
