import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'

export default function navinext() {

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor='#7915c1' />
      <Routes />
    </NavigationContainer>
  );
}