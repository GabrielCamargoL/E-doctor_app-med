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

import { Alert } from 'react-native';
import { Icon } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

import SuccessComponent from '../../components/SuccessComponent'
import api from '../../services/api';


export default function RegisterStep4({ navigation, route }) {
  let doctorInfo = route.params.doctorInfo;
  let clinicInfo = route.params.clinicInfo;

  const [photo, setPhoto] = useState({});
  const [success, setSuccess] = useState(false);

  async function AccessCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
    }).then(file => {
      setPhoto(file);
    });
  }

  async function AccessGallery() {
    ImagePicker.openPicker({
      cropping: false,
      mediaType: 'photo',
    }).then(file => {
      setPhoto(file);
    });
  }


  async function sendPhoto() {
    if (Object.keys(photo).length === 0) {
      return Alert.alert("Atenção",
        "Envie uma foto para completar seu perfil.",
        [{ text: "Camera", onPress: () => AccessCamera() },
        { text: "Galeria", onPress: () => AccessGallery() }],
        { cancelable: false }
      );
    }

    try {
      const responseDoctor = await api.post('/doctorAuth/signUp', {
        "username": doctorInfo.username,
        "surname": doctorInfo.surname,
        "email": doctorInfo.email,
        "password": doctorInfo.password,
        "cpf": doctorInfo.cpf,
        "crm": doctorInfo.crm,
        "genre": doctorInfo.genre,
        "birthday": doctorInfo.birthday,
        "celphone": doctorInfo.celphone,
        "zip_code": doctorInfo.zip_code,
        "house_number": doctorInfo.house_number,
        "complement_address": doctorInfo.complement_address,
        "state": doctorInfo.uf,
        "city": doctorInfo.city,
        "neighborhood": doctorInfo.neighborhood,
        "street": doctorInfo.street,
        "specialty": doctorInfo.specialty,
      },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        })

      if (registerClinic(responseDoctor.data.id) && uploadPhoto(responseDoctor.data.id)) {
        return setSuccess(true)
      }

    } catch (err) {
      alert('sendPhoto: ' + err)
      console.log('sendPhoto: ' + err)
    }
  }


  async function registerClinic(id) {
    try {
      const responseClinic = await api.post(`/clinicAuth/create/${id}`, {
        'name': clinicInfo.name,
        'zip_code': clinicInfo.clinic_cep,
        'house_number': clinicInfo.clinic_number,
        'complement_address': clinicInfo.clinic_complement,
        'state': clinicInfo.clinic_uf,
        'city': clinicInfo.clinic_city,
        'neighborhood': clinicInfo.clinic_neighborhood,
        'street': clinicInfo.clinic_street,
      })
      console.log('responseClinic: ' + responseClinic)

      return true

    } catch (err) {
      console.log(`clinic: ${err}`);
      alert('foto: ' + err.message);
    }
  }

  async function uploadPhoto(id) {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: photo.path,
        type: photo.mime,
        name: `${Date.now()}`,
      });

      const response = await api.post(`/doctorAuth/uploadPhoto/${id}`, formData)

      console.log(response)

      return true

    } catch (err) {
      alert('foto: ' + err.message);
      return false;
    }
  }

  return (
    <>
      { success ?
        <>
          <SuccessComponent navigation={navigation}
            message="O Cadastro foi feito com sucesso!"
          />
        </>
        :
        <>
          <Container>
            <SubTitle style={{ alignSelf: 'center', marginTop: 100 }}>
              Tire uma foto de seu rosto
            </SubTitle>

            {
              Object.keys(photo).length === 0 ?
                <Avatar source={require('../../assets/Avatar.png')} />
                :
                <>
                  <Avatar
                    source={{ uri: photo.path }}
                    style={{ width: 200, height: 200, marginLeft: 1 }}
                    resizeMode="contain"
                  />
                </>
            }

            <ButtonSendView>
              <ButtonSend onPress={() => sendPhoto()}>
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
      }
    </>
  )
}
