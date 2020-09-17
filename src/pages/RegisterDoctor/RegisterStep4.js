import React, { useState, useEffect } from 'react';

import {
  Container,
  SubTitle,
  Avatar,
  ButtonSend,
  ButtonSendView,
  ButtonSendText,
  AccessPhotosView,
  AccessPhotosButton,
  AccessPhotosText,
} from './styles';

import { Text, View, Image } from 'react-native';
import { Icon } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

import SuccessRegister from '../../components/SuccessRegister';
import api from '../../services/api';


export default function RegisterStep4({ navigation }) {
  const [avatar, setAvatar] = useState([]);
  async function sendPhoto() {
    return setTeste(true);
  }

  async function AccessCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
    }).then(file => {
      setAvatar(file);
    });
  }

  async function AccessGallery() {
    ImagePicker.openPicker({
      multiple: false,
      maxFiles: 1,
      mediaType: 'photo',
    }).then(file => {
        setAvatar(file);
      }
    );
  }

  return (
    <>
      <Container>
        <SubTitle style={{ alignSelf: 'center' }}>
          Tire uma foto de seu rosto
        </SubTitle>

        {
          avatar.length < 1 ? 
          <Avatar source={require('../../assets/Avatar.png')} />
        :
          <>
            <Avatar source={uri=''} />
          </>
        }

        <ButtonSendView>
          <ButtonSend onPress={sendPhoto}>
            <ButtonSendText>Enviar</ButtonSendText>
          </ButtonSend>
        </ButtonSendView>


        <AccessPhotosView>
          <AccessPhotosButton onPress={() => AccessCamera()}>
            <Icon
              onPress={() => { }}
              type="FontAwesome"
              resizeMode="contain"
              name="camera"
              style={{
                color: '#fff',
                marginRight: 5,
              }}
            />
            <AccessPhotosText>
              Camera
            </AccessPhotosText>
          </AccessPhotosButton>

          <AccessPhotosButton onPress={() => AccessGallery()}>
            <Icon
              type="FontAwesome"
              resizeMode="contain"
              name="photo"
              style={{
                color: '#fff',
                marginRight: 5,
              }}
            />
            <AccessPhotosText>
              Galeria
            </AccessPhotosText>
          </AccessPhotosButton>
        </AccessPhotosView>

      </Container>
    </>
  )
}
