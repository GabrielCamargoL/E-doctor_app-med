/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';

import api from '../../services/api';

import {colors, fonts} from '../../styles';
import {
  HeaderContainer,
  ViewLogo,
  HeaderLogo,
  HeaderClosed,
  Header,
  GoBackIcon,
  FavoriteIcon,
} from './styles';

import Avatar from '../../assets/Avatar.png';

const HeaderCheckout = ({
  image
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [listFavorites, setListFavorites] = useState([]);
  const [clientId, setClientId] = useState(0);




  const Content = () => (
    <>
      {/* {butchery.operation === 'Closed' && (
        <HeaderContainer>
          <HeaderClosed>Fechado</HeaderClosed>
        </HeaderContainer>
      )} */}
      

      <ViewLogo elevation={8}>
        <HeaderLogo source={image ? ({uri: image}) : (Avatar)} />
      </ViewLogo>
    </>
  );

  return (
    <LinearGradient
      colors={['purple', colors.primary_40]}
      style={styles.container}
      start={{ x: 0.5, y: 0.7 }}
      end={{ x: 0.5, y: 0 }}
    >
        <Content />
    </LinearGradient>
  );

};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 236,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    marginBottom: 20,
    marginTop: 20,
  },
})

export default HeaderCheckout;
