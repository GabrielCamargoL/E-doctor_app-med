import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';
import {colors, fonts} from '../../styles';

export const Container = styled.View`
  flex: 1;
  margin-top:10px;
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
  margin-top: 20;
`;

export const ViewTitle = styled.View`
  margin-top: 30;
  margin-left: 20;
  background-color: #fff;
`;

export const Title = styled.Text`
  margin-top: 20;
  margin-left: 20;
  margin-bottom: 20;
  font-family: Roboto-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 18;
  color: #767272;
`;

export const Content = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
})`
  margin-left: 10px;
`;

export const CardSearch = styled.TouchableOpacity`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 4px;
  height: 50px;
  max-height: 50px;
  width: 100px;
  max-width: 100px;
  background-color: #1b4263;
`;

export const Card = styled.TouchableOpacity`
  margin-top: 10px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 4px;
  height: 120px;
  max-height: 120px;
  width: 150px;
  max-width: 150px;
  background-color: #f8f8f8;
`;

export const TextCard = styled.Text`
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
`;

export const IconCard = styled.View`
  width: 40%;
`;

export const PlansView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const BidView = styled.View.attrs({
  paddingHorizontal: 10,
})`
  margin-top: 60px;
  margin-bottom: 60px;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #1b4263;
`;

export const BidTitle = styled.Text`
  margin-top: 35px;
  text-align: center;
  font-family: Roboto-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  color: #fff;
`;

export const BidDescription = styled.Text`
  margin-top: 20px;
  text-align: center;
  font-family: Roboto-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;

export const BidButton = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: #fdbd5c;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50%;
  border-radius: 5px;
  margin-bottom: 35px;
`;

export const ImagePlans = styled.Image`
  width: 160px;
  height: 146px;
`;

export const PlansText = styled.Text`
  color: #767272;
  font-family: Roboto-Medium;
  letter-spacing: 1px;
  margin-left: 10px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: #fdbd5c;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 50%;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-family: Roboto-Medium;
  font-size: 18px;
`;

export const TabMenu = styled.Text`
  color: #FFF;
  text-transform: capitalize;
  font-family: Roboto-Bold;
  font-size: 15px;
  font-weight: bold;
`;

export const ButtonView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ButtonFilter = styled.TouchableOpacity`
  background-color: #7915c1;
  width: 80%;
  height: 45px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonFilterText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: Roboto-Bold;
`;

export const Logo = styled.Image`
  width: 90%;
  height:250px;
  align-self:center;
  margin-top:50px;
  margin-bottom:20px;
`;

export const PacientName = styled.Text`
  font-size: ${fonts.title};
  padding: 10px;
`;

export const HeaderText = styled.Text`
  font-size: ${fonts.title};
  padding: 10px;
  text-align: center;
  color:#9586A8;
`;

export const IconAppointment = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color:${colors.cyan};
  justify-content: center;
  align-items: center;
`;

export const IconAppointmentText = styled.Text`
  font-size:14px;
  font-weight:bold;
  color:#fff;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Col = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button2 = styled.TouchableOpacity`
  height: 56px;
  width: 322px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: ${fonts.medium};
  font-weight: bold;
  font-family: Roboto-Bold;
  text-transform: uppercase;
`;


export const Data = styled.View`
  align-items: center;
  width: 65%;
  padding: 0 10px;
`;

export const NameLabel = styled.Text`
  font-size: ${fonts.input};
  color: ${colors.primary};
`;

export const SpecialtyLabel = styled.Text`
  font-family: Roboto-Regular;
  font-size: 14px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const PendingCard = styled.TouchableOpacity`
  width: 92%;
  height: 145px;
  margin: 10px 0;
  background-color: #fff;
  padding: 10px 15px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  border-radius: 10px;
`;

export const ButtonsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export const RefuseButton = styled.TouchableOpacity`
  justify-content:center;
  align-items:center;
  width: 45%;
  height: 35px;
  background-color:${colors.danger};
  border-radius: 8px;
`;

export const AcceptButton = styled.TouchableOpacity`
  justify-content:center;
  align-items:center;
  width: 45%;
  height: 35px;
  background-color:${colors.success};
  border-radius: 8px;
`;

export const RefuseButtonText = styled.Text`
  font-size:17px;
  font-weight:bold;
  text-align:center;
  color: #FFF;
`;

export const AcceptButtonText = styled.Text`
  font-size:17px;
  font-weight:bold;
  text-align:center;
  color: #FFF;
`;

export const ViewIcon = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ViewGoBackIcon = styled(ViewIcon)`
  position: absolute;
  left: 10px;
  top: 30px;
`;

export const GoBackIcon = styled(Icon).attrs({
  color: '#fff',
  size: 24,
  resizeMode: 'contain',
  type: 'AntDesign',
  name: 'bars',
})``;
