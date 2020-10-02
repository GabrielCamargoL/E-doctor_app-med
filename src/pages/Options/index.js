import React, { useState, useEffect } from 'react';

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
        <TouchableOptions onPress={() => {}}>
          <OptionsText>Perfil</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => {}}>
          <OptionsText>Prescrição</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => {}}>
          <OptionsText>Dependentes</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => {}}>
          <OptionsText>Minha Agenda</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => {}}>
          <OptionsText>Ficha médica</OptionsText>
        </TouchableOptions>

        <TouchableOptions onPress={() => {}}>
          <Icon type='FontAwesome' name='power-off'
            style={{marginRight:5, fontSize:22}}
          />
          <OptionsText>Sair</OptionsText>
        </TouchableOptions>
      </Container>
    </>
  )
}