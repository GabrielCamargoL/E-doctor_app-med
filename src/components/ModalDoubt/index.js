import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import api from '../../services/api';
import { getToken } from '../../services/auth';

import {
  Container,
  ViewLogo,
  HeaderLogo,
  Label,
  NameLabel,
  Col,
  ButtonSend,
  ButtonSendView,
  ButtonSendText,
  Input,
  InputContainer,
  InputLabel,
  LabelContainer,
}
  from './styles';

import Modal from '../Modal';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ModalDoubt = ({
  isActive = false,
  visible,
  onClose,
  navigation,
  onSuccess,
  data
})  =>  {
  const [answer, setAnswer] = useState('');
  const options = [{ key: true, value: 'Sim' }, { key: false, value: 'Não' }]

  const handleClose = () => {
    onClose();
  };

  const handleMedicalInfo = () => {
    onClose();
    navigation.navigate('MedicalInfo', { consult: true });
  };

  async function handleAnswer() {
    try {
      const response = await api.put(`/doctor/doubt/update/${data.id}`, {
        answer: answer
      })
      
      alert('Dúvida respondida com sucesso!')
      handleClose();

    } catch (err) {
      alert('answer: ' + err)
    }
  }

  return (
    <Modal
      visible={visible}
      height="88%"
    >
      <Container>
        <Col>
          <NameLabel>{data.user.username} {data.user.surname}</NameLabel>
          <Label>{data.doubt}</Label>
        </Col>
        <Col>
          <ViewLogo elevation={8}>
            <HeaderLogo source={{ uri: data.doctor.path_avatar }} />
          </ViewLogo>
          <NameLabel style={{ textAlign: 'center' }}>
            {data.user.username} {data.user.surname}
          </NameLabel>
        </Col>
        {!data.answer ?
          (<>
            <Col>
              <InputLabel
                placeholder="Resposta..."
                placeholderTextColor="#A8A8A8"
                keyboardType="default"
                multiline={true}
                value={answer}
                onChangeText={setAnswer}
              />
            </Col>

            <Col>
              <ButtonSendView>
                <ButtonSend onPress={() => handleAnswer()}>
                  <ButtonSendText>Enviar</ButtonSendText>
                </ButtonSend>
              </ButtonSendView>
            </Col>
          </>)
          :
          null}

          <Label>{data.doctor.username}: {data.answer ?? ''}</Label>
      </Container>

      <TouchableOpacity
        style={{ alignSelf: 'center', borderTopWidth: 0.5, width: '100%' }}
        onPress={() => { handleClose() }}
      >
        <Label style={{ margin: 20, textAlign: 'center' }}>Fechar</Label>
      </TouchableOpacity>
    </Modal>
  )
}

export default ModalDoubt;