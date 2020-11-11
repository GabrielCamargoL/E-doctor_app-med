import styled from 'styled-components/native';
import {colors, general, fonts} from '../../styles'

export const Container = styled.SafeAreaView.attrs({
})`
  flex: 1;
  position: relative;
  background-color: #f1f1f1;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 145px;
  padding: 10px 15px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  border-radius: 10px
`;

export const IconCard = styled.View`
  width: 20%;
`;

export const Data = styled.View`
  align-items: flex-start;
  width: 70%;
  padding: 0 10px;
`;

export const NameLabel = styled.Text`
  font-size: ${fonts.input};
  color: ${colors.primary};
  margin-left: 20px
`;

export const DoubtLabel = styled.Text`
  font-family: Roboto-Regular;
  font-size: 14px;
  margin-left: 35px;
  color: ${colors.light}
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;