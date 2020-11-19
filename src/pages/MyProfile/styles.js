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
