import React from 'react';
import {Modal} from 'react-native';

import {Container, ScrollView, Content, Close, Text} from './styles';


const ModalComponent = ({
  children,
  backgroundColor,
  backgroundColorContent,
  width,
  height,
  justifyContent,
  visible,
  onClose,
  showClose = true,
}) => {
  return (
    <Modal animated animationType="fade" visible={visible} transparent={true}>
      <Container backgroundColor={backgroundColor} onPress={onClose}>
        <Content
          width={width}
          height={height}
          justifyContent={justifyContent}
          backgroundColor={backgroundColorContent}>
          {children}
          {onClose && showClose && (
            <Close onPress={onClose}>
              <Text>X</Text>
            </Close>
          )}
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalComponent;