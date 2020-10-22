import styled from 'styled-components/native';
import {colors, general, fonts} from '../../styles'

export const Container = styled.SafeAreaView.attrs({
  paddingVertical: 30,
})`
  flex: 1;
  position: relative;
  background-color: #f8f8f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Card = styled.TouchableOpacity`
  width: 85%;
  height: 145px;
  margin: 10px 0;
  background-color: #fff;
  padding: 10px 15px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  border-radius: 10px
`;

export const IconCard = styled.View`
  width: 40%;
`;

export const Data = styled.View`
  align-items: center;
  width: 70%;
  padding: 0 10px;
`;

export const NameLabel = styled.Text`
  font-size: ${fonts.input};
  color: ${colors.primary}
`;

export const SpecialtyLabel = styled.Text`
  font-family: Roboto-Regular;
  font-size: 14px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
