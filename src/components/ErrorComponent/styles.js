import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
`;

export const Label = styled.Text`
  color: #F00;
  font-family: Roboto-Medium;
  font-size: 18;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 45;
  justify-content: center;
  align-items: center;
  background-color: #F00;
  margin-top: 20;
  border-radius: 5;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 18;
  font-family: Roboto-Medium;
`;
