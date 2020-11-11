import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
//import Lottie from 'lottie-react-native';
import {colors, fonts} from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  position: relative;
  background-color: #f8f8f8;
  margin-bottom: 20px;
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
  font-size: 20px;
  line-height: 21px;
  text-align: justify;
  margin-top: 20px;
`;

export const ViewLogo = styled.View`
  height: 65px;
  width: 65px;
  border-radius: 10px;
  background: #c8c8c8;
  position: absolute;
  left: 30;
  right: 0;
  bottom: -30;
`;

export const SectionCompanyData = styled.View`
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

export const CompanyRate = styled.Text`
  font-size: 12px;
  color: ${colors.primary};
  font-family: Roboto-Bold;
`;

export const DateAppointmentText = styled.Text`
  color: ${colors.light};
  font-size: 16px;
  font-family: Roboto;
`;

export const UnscheduleText = styled.Text`
  color: ${colors.danger};
  font-size: 16px;
  font-weight: 700;
`;

export const FinalizeText = styled.Text`
  color: ${colors.cyan};
  font-size: 16px;
  font-weight: 700;
`;

export const HeaderText = styled.Text`
  align-self: flex-start;
  color: #000;
  font-size: 22px;
  font-family: Roboto-Bold;
`;

export const SubtitleText = styled.Text`
  color: #000;
  font-size: 18px;
  font-family: Roboto-Bold;
`;

export const DetailsText = styled.Text`
  color: ${colors.light};
  font-size: 16px;
  font-family: Roboto;
  margin: 10px;
`;

export const Row = styled.View`
  width: 93%;
  margin:10px;
  flex-direction: row;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const Button = styled.TouchableOpacity`
  height: 56px;
  width: 322px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 30px;
`;

export const FlatButton = styled.TouchableOpacity`
  color: #111;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 5px;
`;


export const ButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  font-family: Roboto-Bold;
  text-transform: uppercase;
`;

export const FlatButtonText = styled.Text`
  color: ${colors.primary};
  font-size: ${fonts.input};
  font-weight: bold;
  font-family: Roboto-Bold;
  text-transform: capitalize;
`;


export const ModalContainer = styled.SafeAreaView`
  flex: 1;
  position: relative;
  background-color: #fff;
  margin-bottom: 20px;
  min-height:100%;
`;

export const CancelingButton = styled.TouchableOpacity`
  width:60%;
  height:50px;
  background-color: ${colors.danger};
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 10px;
  margin-top: 30px;
`;

export const FinalizeButton = styled.TouchableOpacity`
  width:60%;
  height:50px;
  background-color: ${colors.success};
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 10px;
  margin-top: 30px;
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
    justify-content: flex-start;
    margin-bottom:5px;
    margin-left:8px;
`;

export const LabelMedicine = styled.Text`
  font-size: 16px;
  color: ${colors.light};
`;