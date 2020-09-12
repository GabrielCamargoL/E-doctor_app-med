/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {colors, general, fonts} from '../../styles';
// import LottieView from 'lottie-react-native';

import {
  Container,
  SectionCompanyData,
  HeaderText,
  DetailsText,
  Row,
  Col,
  FlatButton,
  Button,
  ButtonText,
  FlatButtonText,
  CompanyRate,
} from './styles';

import HeaderCheckout from '../../components/HeaderCheckout';

import api from '../../services/api';

export default function DetailsDoctor({navigation}) {

  const [value, setValue] = useState([]);

  const allowedState = [
    { id: 1, name: "Alabama", cargo: 'Doctor' },
    { id: 2, name: "Georgia", cargo: 'Doctor' },
    { id: 3, name: "Tennessee", cargo: 'Doctor'}
  ];

  useEffect(() => {
    setValue(allowedState)
  }, [])

  return (
    <>
      <Container>
        <ScrollView>
            <HeaderCheckout
              butchery={value}
              //showcase={showcase.url}
              //logo={logo.url}
              // onGoBack={
              //   prevRouterName
              //     ? () => navigation.navigate(prevRouterName, {total})
              //     : () => navigation.navigate('Main', {total})
              // }
              large
            />
            <SectionCompanyData>
              <HeaderText>Dr. Thiago Henrique</HeaderText>
              <CompanyRate>
                {Array(5).fill().map(icon => (<>
                  <Icon name="star" size={14} color={colors.primary} />{' '}
                </>))}
                </CompanyRate>
            </SectionCompanyData>
            <SectionCompanyData>
              <HeaderText>Nome do consultório</HeaderText>
              <FlatButton>
                <FlatButtonText>Avaliações</FlatButtonText>
              </FlatButton>
            </SectionCompanyData>
            <Row>
              <DetailsText>
                Lettuce is an annual plant of the daisy family,
                Asteraceae. It is most often grown as a leaf vegetable,
                but sometimes for its stem and seeds
              </DetailsText>
            </Row>
            <Row>
              <Col>
                <Button onPress={() => {}}>
                  <ButtonText>solicitar agendamento</ButtonText>
                </Button>
              </Col>
            </Row>
        </ScrollView>
      </Container>
    </>
  );
}
