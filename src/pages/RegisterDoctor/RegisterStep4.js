import React, { useState, useEffect } from 'react';

import {
  Container,
  SubTitle,
  Avatar,
  ButtonSend,
  ButtonSendView,
  AccessCamera,
} from './styles';

import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';
import SuccessRegister from '../../components/SuccessRegister';
import { set } from 'react-native-reanimated';

export default function RegisterStep4({ navigation }) {
  const [teste, setTeste] = useState(false);
  async function sendPhoto() {
    return setTeste(true);
  }

  return (
    <>
      <Container>
        <SubTitle style={{ alignSelf: 'center' }}>
          Tire uma foto de seu rosto
        </SubTitle>

        <Avatar source={require('../../assets/Avatar.png')} />

        <ButtonSendView>
          <ButtonSend onPress={sendPhoto} title={"Enviar"} />
        </ButtonSendView>

        <AccessCamera>

        </AccessCamera>
        {
          teste ?
            <>
              <SuccessRegister />
            </>
            :
            <>
            </>
        }
      </Container>

    </>
  )
}
