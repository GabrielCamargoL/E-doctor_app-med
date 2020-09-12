import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
//import Lottie from 'lottie-react-native';
import {colors, fonts} from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  position: relative;
  background-color: #f8f8f8;
  margin-bottom: 20px;
`;

export const ViewLogo = styled.View`
  height: 65px;
  width: 65px;
  border-radius: 10px;
  background: #c8c8c8;
  position: absolute;
  left: 30;
  right: 0;
  bottom: -30;
`;

export const SectionCompanyData = styled.View`
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 20px
`;

export const CompanyRate = styled.Text`
  font-size: 12;
  color: ${colors.primary};
  font-family: Roboto-Bold;
`;

export const HeaderText = styled.Text`
  color: #000;
  font-size: 22px;
  font-family: Roboto-Bold;
`;

export const DetailsText = styled.Text`
  color: #000;
  font-size: 16px;
  font-family: Roboto;
  margin-left: 20
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Col = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  height: 56px;
  width: 322px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 30px
`;

export const FlatButton = styled.TouchableOpacity`
  color: #111;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 5px;
`;


export const ButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  font-family: Roboto-Bold;
  text-transform: uppercase;
`;

export const FlatButtonText = styled.Text`
  color: ${colors.primary};
  font-size: ${fonts.input};
  font-weight: bold;
  font-family: Roboto-Bold;
  text-transform: capitalize;
`;
