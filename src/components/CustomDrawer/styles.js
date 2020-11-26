import styled from 'styled-components/native';
import {colors, general, fonts} from '../../styles'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';

export const Container = styled.SafeAreaView.attrs({
})`
  flex: 1;
  background-color: #F1f1f1;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Col = styled.View`
  flex-direction: column;
  margin-bottom:20px;
  justify-content: space-evenly;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 145px;
  background-color: #FFF;
  align-items: center;
  align-self: center;
  justify-content: space-around;
  margin-bottom: 10%;
`;

export const IconCard = styled.View`
  width: 30%;
  /* background-color: #F1f; */
`;

export const Data = styled.View`
  align-items: center;
  width: 70%;
  padding: 0 10px;
  border-radius: 50%;
`;

export const NameLabel = styled.Text`
  font-size: ${fonts.medium};
  color: ${colors.black};
`;

export const Label = styled.Text`
  font-size: ${fonts.small};
  color: ${colors.light};
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius:50px;
  margin-bottom:10px;
`;

export const ViewIcon = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const ViewGoBackIcon = styled(ViewIcon)`
  align-self: flex-start;
`;

export const GoBackIcon = styled(Icon).attrs({
  color: `${colors.light}`,
  size: 24,
  resizeMode: 'contain',
  type: 'FontAwesome',
  name: 'arrow-left',
})``;

export const SignOutIcon = styled(Icon).attrs({
  color: `${colors.light}`,
  size: 18,
  resizeMode: 'contain',
  type: 'FontAwesome',
  name: 'power-off',
})``;

export const OptionsText = styled.Text`
  font-family:Roboto;
  font-size: ${fonts.regular};
  color: ${colors.light};
  margin-left: 10px;
`;

export const TouchableOptions = styled.TouchableOpacity`
  flex-direction:row;
  margin-top:10%;
  margin-left: 20px;
`;