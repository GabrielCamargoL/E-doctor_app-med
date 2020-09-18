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

import { Text, View, Image, Alert } from 'react-native';
import { Icon } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

import SuccessRegister from '../../components/SuccessRegister';
import api from '../../services/api';


export default function RegisterStep4({ navigation }) {
  const [avatar, setAvatar] = useState([]);

  async function AccessCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(file => {
      setAvatar(file);
    });
  }

  async function AccessGallery() {
    ImagePicker.openPicker({
      cropping: false,
      mediaType: 'photo',
    }).then(file => {
      console.log(file)
      setAvatar(file);
    }
    );
  }

  async function sendPhoto() {
    if (avatar.length < 1) {
      return Alert.alert("Atenção",
        "Envie uma foto para completar seu perfil.",
        [{ text: "Camera", onPress: () => AccessCamera() },
         { text: "Galeria", onPress: () => AccessGallery() }],
        { cancelable: false }
      );
    }
  }

  return (
    <>
      <Container>
        <SubTitle style={{ alignSelf: 'center', marginTop: 50 }}>
          Tire uma foto de seu rosto
        </SubTitle>

        {
          avatar.length < 1 ?
            <Avatar source={require('../../assets/Avatar.png')} />
            :
            <>
              <Avatar
                source={{ uri: avatar.path }}
                style={{ width: 200, height: 200, marginLeft: 1 }}
                resizeMode="contain"
              />
            </>
        }

        <ButtonSendView>
          <ButtonSend onPress={sendPhoto}>
            <ButtonSendText>Enviar</ButtonSendText>
          </ButtonSend>
        </ButtonSendView>

      </Container>

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
    </>
  )
}
