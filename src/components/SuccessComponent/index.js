import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Container, Label, ButtonText, Button } from './styles';

import Lottie from 'lottie-react-native';

import success from '../../assets/success.json';

export default function SuccessComponent({ navigation, message }) {
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
          {message}
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
