import styled from 'styled-components/native'; 
import {colors,fonts} from '../../styles';
export const Container = styled.ScrollView.attrs({
  paddingHorizontal: 10,
})`
  flex: 1;
  background-color: #fff;
`;

export const ViewLoad = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextLoad = styled.Text`
  color: ${colors.primary};
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: justify;
  margin-top: 20px;
`;

export const Logo = styled.Image`
  width: 70%;
  height:150px;
  align-self:center;
  margin-top:80px;
  margin-bottom:20px;
`;

export const Content = styled.View.attrs({
  paddingHorizontal: 30,
})`
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin-top:15px;
`;

  export const Label = styled.Text`
    color: #3b5998;
    font-size: 30px;
    font-family: Roboto-Bold;
    letter-spacing: 1px;
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
  width:20%;
`;

export const InputLabel = styled.TextInput`
  border-width: 1px;
  border-color: #000;
  height: 45px;
  border-radius: 4px;
  padding-left: 10px;
  width: 100%;
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


export const Register = styled.Text`
  margin-top: 20px;
  color: #000;
  font-family: Roboto-Bold;
  font-size: 18px;
  letter-spacing: 1px;
`;

export const Button = styled.TouchableOpacity`
  height: 51px;
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  margin-top: 10px;
  border-radius: 50px;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  font-family: Roboto-Bold;
  font-size: 18px;
  color: #fff;
  letter-spacing: 0.1px;
`;

export const TextRecover = styled.Text`
  margin-top: 10%;
  color: #000;
  font-family: Roboto-Bold;
  font-size: 18px;
  letter-spacing: 1px;
`;
export const Text = styled.Text`
  margin-top: 2%;
  color: #000;
  font-family: Roboto-Bold;
  font-size: 14px;
  letter-spacing: 2px;
  opacity: 0.5;
`;