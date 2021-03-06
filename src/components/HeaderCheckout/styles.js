import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';

export const HeaderLogo = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 200px;
`;

export const ViewLogo = styled.View`
  height: 70%;
  width: 40%;
  border-radius: 200px;
  background: #f1f1f1;
  justify-content: center;
  align-self: center;
`;

export const HeaderContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 276px;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const HeaderClosed = styled.Text`
  font-size: 14px;
  font-family: Roboto-Bold;
  color: #fff;
`;

export const Header = styled.ImageBackground.attrs({})`
  position: relative;
  width: 100%;
  height: ${props => (props.large ? '236px' : '133px')};
  background-color: #c8c8c8;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const GoBackIcon = styled(IconAnt).attrs({
  color: '#fff',
  size: 32,
  resizeMode: 'contain',
  type: 'AntDesign',
  name: 'arrowleft',
})`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const FavoriteIcon = styled(Icon).attrs({
  color: '#fff',
  size: 32,
  resizeMode: 'contain',
  type: 'FontAwesome',
})`
  position: absolute;
  top: 10px;
  right: 10px;
`;
