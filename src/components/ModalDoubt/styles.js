import styled from 'styled-components';

import {fonts, colors} from '../../styles'

export const Container = styled.View.attrs({
  paddingHorizontal: 40,
})`
  flex: 1;
  justify-content: space-evenly;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const HeaderLogo = styled.Image`
  height: 95px;
  width: 95px;
  border-radius: 10px;
`;

export const ViewLogo = styled.View`
  height: 95px;
  width: 95px;
  border-radius: 10px;
  background: #f1f1f1;
  align-self: center;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  font-family: Roboto-Regular;
  font-size: ${fonts.input};
  color: ${colors.black};
`;

export const NameLabel = styled.Text`
  font-family: Roboto-Regular;
  font-size: ${fonts.medium};
  color: ${colors.light};
`;

export const ButtonSendView = styled.View`
  align-self: center;
`;

export const ButtonSend = styled.TouchableOpacity`
  justify-content:center;
  align-items:center;
  width: 250px;
  height: 40px;
  background-color:${colors.primary_40};
  border-radius: 8px;
`;

export const ButtonSendText = styled.Text`
  font-size:19px;
  text-align:center;
  color: #FFF;
`;

export const InputContainer = styled.View.attrs({
  paddingHorizontal: 10,
})`
  flex: 1;
  height: 65px;
`;


export const LabelContainer = styled.View.attrs({
  paddingHorizontal: 10,
})`
  background-color: #fff;
  top: 10px;
  left: 25px;
  z-Index: 50;
  width:35%;
`;

export const InputLabel = styled.TextInput`
  border-width: 1px;
  border-color: #000;
  height: auto;
  border-radius: 4px;
  padding-left: 10px;
  width: 100%;
  text-align:left;
`;

export const Input = styled.TextInput`
  height: 45px;
  width: 100%;
  border-width: 1px;
  border-color: #000;
  border-radius: 4px;
  margin-top: 10px;
  padding-left: 10px;
  color: #000;
`;