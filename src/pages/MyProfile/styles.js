import styled from 'styled-components/native'; 
import {colors, general, fonts} from '../../styles';

export const Container = styled.ScrollView.attrs({
  paddingHorizontal: 20,
})`
  flex:1;
  background-color:${colors.background};
`;

export const Row = styled.View`
  margin:10px;
  flex-direction: row;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const CategoryTitle = styled.Text`
  font-size: ${fonts.title};
`;

export const CategoryInfo = styled.Text`
  font-size: ${fonts.regular};
`;

export const EditButton = styled.TouchableOpacity`
  justify-content:center;
  align-items:center;
  width: 45%;
  height: 35px;
  background-color:${colors.cyan};
  border-radius: 8px;
`;

export const EditButtonText = styled.Text`
  font-size:17px;
  font-weight:bold;
  text-align:center;
  color: #FFF;
`;

export const ModalContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  margin: 20px;
  min-height:100%;
`;

export const Badge = styled.TouchableOpacity`
  margin-bottom: 10px;
  text-align: center;
  align-items: center;
  align-self: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid;
  background-color: ${props =>
    props.backgroundColor };
  border-color: ${props =>
    props.borderColor };
  border-radius: 5;
  width: 25%;
  height: 30px;
`;

export const BadgeLabel = styled.Text`
  font-size: ${fonts.medium};
  color: ${props =>
    props.color};
`;