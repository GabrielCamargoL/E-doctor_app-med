import styled from 'styled-components/native'; 

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
  color: #ff910f;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: justify;
  margin-top: 20;
`;

export const Logo = styled.Image`
  width: 70%;
  height:150;
  align-self:center;
  margin-top:80;
  margin-bottom:20;
`;

export const Content = styled.View.attrs({
  paddingHorizontal: 30,
})`
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin-top:15;
`;

  export const Label = styled.Text`
    color: #3b5998;
    font-size: 30;
    font-family: Roboto-Bold;
    letter-spacing: 1;
  `;

export const InputContainer = styled.View.attrs({
  paddingHorizontal: 10,
})`
  flex: 1;
  height: 65;
`;


export const LabelContainer = styled.View.attrs({
  paddingHorizontal: 10,
})`
  background-color: #fff;
  top: 10;
  left: 25;
  z-Index: 50;
  width:20%;
`;

export const InputLabel = styled.TextInput`
  border-width: 1;
  border-color: #000;
  height: 45;
  border-radius: 4;
  padding-left: 10;
  width: 100%;
`;

export const Input = styled.TextInput`
  height: 45;
  width: 100%;
  border-width: 1;
  border-color: #000;
  border-radius: 4;
  margin-top: 10;
  padding-left: 10;
  color: #000;
`;


export const Register = styled.Text`
  margin-top: 20;
  color: #000;
  font-family: Roboto-Bold;
  font-size: 18;
  letter-spacing: 1;
`;

export const Button = styled.TouchableOpacity`
  height: 51;
  width: 50;
  justify-content: center;
  align-items: center;
  background-color: #7915c1;
  margin-top: 10;
  border-radius: 50;
  margin-top: 20;
`;

export const TextButton = styled.Text`
  font-family: Roboto-Bold;
  font-size: 18;
  color: #fff;
  letter-spacing: 0.1;
`;

export const TextRecover = styled.Text`
  margin-top: 10%;
  color: #000;
  font-family: Roboto-Bold;
  font-size: 18;
  letter-spacing: 1;
`;
export const Text = styled.Text`
  margin-top: 2%;
  color: #000;
  font-family: Roboto-Bold;
  font-size: 14;
  letter-spacing: 2;
  opacity: 0.5;
`;