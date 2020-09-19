import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export const Container = styled.View`
  width: ${props => (props.width ? props.width : '100%')};
  margin: ${props => (props.width ? '5px' : '5px 0')};
`;

export const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f8f8f8;
  border-color: ${props =>
    props.error || props.placeholderError
      ? '#d72200'
      : props.borderColor
      ? props.borderColor
      : '#a8a8a8'};
  border-width: 1px;
  border-radius: 10px;
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  font-size: 12px;
  font-family: Roboto-Regular;
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  padding-left: ${props => (props.iconLeft ? 0 : '10px')};
  padding-right: ${props => (props.iconRight ? 0 : '10px')};
`;

export const Label = styled.Text`
  font-family: Roboto-Regular;
  font-size: 14px;
  margin-left: 5px;
  color: #817981;
`;

export const ErrorLabel = styled.Text`
  font-family: Roboto-Regular;
  font-size: 14px;
  margin-left: 5px;
  color: #d72200;
`;

export const IconLeft = styled(Icon)`
  padding-left: 10px;
  padding-right: 10px;
`;

export const IconRight = styled(Icon)`
  padding-left: 10px;
  padding-right: 10px;
`;
