import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#fff'};
  padding-top: ${props =>
    props.paddingTop ? `${props.paddingTop}px` : '30px'};
  padding-bottom: ${props =>
    props.paddingBottom ? `${props.paddingBottom}px` : '30px'};
`;

export const ViewInput = styled.View`
  flex-direction: row;
  padding-left: 20px;
  align-items: center;
  background-color: #f8f8f8;
  border-color: #111;
  border-width: 1px;
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
  height: 50px;
`;

export const InputSearch = styled.TextInput`
  color: #000;
  font-size: 12px;
  margin-left: 20px;
  font-family: Roboto-Regular;
`;
