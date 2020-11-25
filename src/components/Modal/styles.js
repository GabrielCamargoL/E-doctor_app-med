import styled from 'styled-components/native';

import {fonts, colors} from '../../styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'rgba(0, 0, 0, 0.2)'};
`;

export const Content = styled.View`
  width: ${props => (props.width ? props.width : '90%')};
  height: ${props => (props.height ? props.height : '75%')};
  min-height: 600px;
  border-color: #ccc;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#fff'};
  padding: 10px;
  border-radius: 10px;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'space-between'};
`;

export const Close = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${colors.primary_80};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: Ubuntu-Bold;
  font-size: 16px;
  color: #fff;
`;