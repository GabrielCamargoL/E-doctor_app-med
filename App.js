import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'
import {colors} from './src/styles'

export default function navinext() {

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Routes/>
    </NavigationContainer>
  );
}