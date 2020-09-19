import styled from 'styled-components/native';

export const Container = styled.ScrollView`
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
  margin-left: 10;
`;

export const CardSearch = styled.TouchableOpacity`
  margin-top: 10;
  justify-content: center;
  align-items: center;
  border-width: 1;
  border-color: #ccc;
  border-radius: 4;
  height: 50;
  max-height: 50;
  width: 100;
  max-width: 100;
  background-color: #1b4263;
`;

export const Card = styled.TouchableOpacity`
  margin-top: 10;
  margin-left: 10;
  justify-content: center;
  align-items: center;
  border-width: 1;
  border-color: #ccc;
  border-radius: 4;
  height: 120;
  max-height: 120;
  width: 150;
  max-width: 150;
  background-color: #f8f8f8;
`;

export const TextCard = styled.Text`
  color: #fff;
  font-family: Roboto;
  font-size: 18;
`;

export const IconCard = styled.Image`
  width: 65;
  height: 65;
`;

export const PlansView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const BidView = styled.View.attrs({
  paddingHorizontal: 10,
})`
  margin-top: 60;
  margin-bottom: 60;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #1b4263;
`;

export const BidTitle = styled.Text`
  margin-top: 35;
  text-align: center;
  font-family: Roboto-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 28;
  color: #fff;
`;

export const BidDescription = styled.Text`
  margin-top: 20;
  text-align: center;
  font-family: Roboto-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 20;
  color: #fff;
`;

export const BidButton = styled.TouchableOpacity`
  margin-top: 20;
  background-color: #fdbd5c;
  justify-content: center;
  align-items: center;
  height: 50;
  width: 50%;
  border-radius: 5;
  margin-bottom: 35;
`;

export const ImagePlans = styled.Image`
  width: 160;
  height: 146;
`;

export const PlansText = styled.Text`
  color: #767272;
  font-family: Roboto-Medium;
  letter-spacing: 1;
  margin-left: 10;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 10;
  background-color: #fdbd5c;
  justify-content: center;
  align-items: center;
  height: 40;
  width: 50%;
  border-radius: 5;
  margin-bottom: 20;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-family: Roboto-Medium;
  font-size: 18;
`;

export const TabMenu = styled.Text`
  color: #000;
  text-transform: capitalize;
  font-family: Roboto-Bold;
  font-size: 12
`;

export const ButtonView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ButtonFilter = styled.TouchableOpacity`
  background-color: #7915c1;
  width: 80%;
  height: 45;
  border-radius: 8;
  justify-content: center;
  align-items: center;
  margin-top: 20;
`;

export const ButtonFilterText = styled.Text`
  color: #fff;
  font-size: 14;
  font-family: Roboto-Bold;
`;

export const Logo = styled.Image`
  width: 90%;
  height:250;
  align-self:center;
  margin-top:50;
  margin-bottom:20;
`;
