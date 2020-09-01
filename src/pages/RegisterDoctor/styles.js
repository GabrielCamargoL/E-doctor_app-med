import styled from 'styled-components/native'; 

export const Container = styled.ScrollView.attrs({
  paddingHorizontal: 10,
})`
  flex:1;
  background-color: #fff;
`;

export const SubTitle = styled.Text`
  font-size:21;
  margin:10px;
`;

export const InputContainer = styled.View.attrs({
  paddingHorizontal: 10,
})`
  flex: 1;
  height: 70;
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
  height: 50;
  border-radius: 10;
  padding-left: 10;
  width: 100%;
  margin-bottom:20;
`;

export const Advance = styled.Text`
  font-size:21;
  color: royalblue;
  margin:30px;
  flex:1;
  text-decoration-line: underline;
`;
