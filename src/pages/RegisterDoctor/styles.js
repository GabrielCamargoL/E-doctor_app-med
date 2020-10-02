import styled from 'styled-components/native';
import {colors,fonts} from './../../styles'

export const Container = styled.ScrollView.attrs({
  paddingHorizontal: 10,
})`
  flex:1;
  background-color: #fff;
`;

export const Row = styled.View`
    flex-direction: row;
    width:100%;
    margin-top:10px;
`;

export const Col = styled.View`
    flex-direction: column;
`;

export const SubTitle = styled.Text`
  font-size:${fonts.title};
  margin:10px;
`;

export const InputContainer = styled.View.attrs({
  paddingHorizontal: 10,
})`
  flex: 1;
  height: 70px;
`;


export const LabelContainer = styled.View.attrs({
  paddingHorizontal: 10,
})`
  background-color: #fff;
  top: 10px;
  left: 25px;
  z-Index: 50;
  width:23%;
`;

export const LabelInput = styled.Text`
  font-size:${fonts.input};
  font-weight:600;
  font-family:Roboto;
  margin-left:5px;
`;

export const InputLabel = styled.TextInput`
  border-width: 1px;
  border-color: #000;
  height: 40px;
  border-radius: 10px;
  padding-left: 10px;
  width: 100%;
  margin-bottom:20px;
  margin-top:5px;
`;

export const Advance = styled.Text`
  font-size:21px;
  color: royalblue;
  text-decoration-line: underline;
`;

export const Circle = styled.TouchableOpacity`
    height: 20px;
    width: 20px;
    border-radius: 10;
    border-width: 1px;
    border-color: #ACACAC;
    align-items: center;
    justify-content: center;
    margin-right:7px;
`;

export const CheckedCircle = styled.TouchableOpacity`
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background-color: #4B7299;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-right:15px;
`;

export const Avatar = styled.Image`
    align-self: center;
    margin-top:15%;
`;

export const ButtonSendView = styled.View`
  align-self: center;
  margin-top:15%;
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

export const AccessPhotosView = styled.View`
  flex-direction:row;
  align-self: center;
  justify-content:center;
  align-items:center;
`;

export const AccessPhotosButton = styled.TouchableOpacity`
  flex:1;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  background-color:${colors.primary};
  width:48%;
  height: 55px;
  border:solid;
  border-color:#fff;
`;

export const AccessPhotosText = styled.Text`
  font-size:19px;
  text-align:center;
  color: #FFF;
`;