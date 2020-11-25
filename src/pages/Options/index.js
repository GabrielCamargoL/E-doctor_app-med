import React, { useState, useEffect } from 'react';
import {BackHandler, AsyncStorage} from 'react-native';

import {
  Container,
  TouchableOptions,
  OptionsText,
} from './styles';

import {Icon} from 'native-base';

import api from '../../services/api';


export default function Options({ navigation }) {

  const [name, setName] = useState('');

  return(
    <>
      <Container>
        <TouchableOptions onPress={() => {navigation.navigate('MyProfile')}}>
          <OptionsText>Meu Perfil</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => navigation.navigate('Doubt')}>
          <OptionsText>Dúvidas</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => {}}>
          <OptionsText>Minha agenda</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => { 
          AsyncStorage.clear()
          BackHandler.exitApp() 
        }}>
          <Icon type='FontAwesome' name='power-off'
            style={{marginRight:5, fontSize:22, color:'#7915c1'}}
          />
          <OptionsText>Sair</OptionsText>
        </TouchableOptions>
      </Container>
    </>
  )
}