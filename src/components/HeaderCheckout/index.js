/* eslint-disable eqeqeq */
import React, {useState, useEffect} from 'react';

import api from '../../services/api';
import {
  HeaderContainer,
  ViewLogo,
  HeaderLogo,
  HeaderClosed,
  Header,
  GoBackIcon,
  FavoriteIcon,
} from './styles';

import logo from '../../assets/logo.png';

const HeaderCheckout = ({
  children,
  butchery,
  showcase,
  logo,
  onGoBack,
  large,
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
        <HeaderLogo source={logo} />
      </ViewLogo>
    </>
  );


    // return (
    //   <Header source={logo} large={large}>
    //     <Content />
    //   </Header>
    // );

    return (
      <Header large={large}>
        <Content />
      </Header>
    );

};

export default HeaderCheckout;
