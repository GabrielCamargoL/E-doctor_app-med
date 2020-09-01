import React from 'react';
import { Text, Button, SafeAreaView } from 'react-native';

import { Container, ButtonFilter, ButtonFilterText, ButtonView } from './styles';

export default function Home({ navigation }) {
  function navigateToLogin() {
    navigation.navigate('Login')
  }


  return (
    <>
      <Container>
        <ButtonView>
          <ButtonFilter>
            <ButtonFilterText>
              Botão que nao faz nada
          </ButtonFilterText>
          </ButtonFilter>

        </ButtonView>
      </Container>

    </>
  );
}