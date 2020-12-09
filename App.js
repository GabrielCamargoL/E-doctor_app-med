import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import NotificationProvider from './src/contexts/notifications';
import PushNotification from 'react-native-push-notification';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'
import { colors } from './src/styles'

export default function navinext() {
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },

    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);

      // process the notification

      // (required) Called when a remote is received or opened, or local notification is opened
    },
    onRegistrationError: function(err) {
      console.error(err.message, err);
    },
  });

  PushNotification.getChannels ( function ( channels )  { 
    console.log ( 'getchannels nos dá' ,  channels ) ; 
  } ) ;

  return (
    <NavigationContainer>
      <NotificationProvider>
        <StatusBar translucent backgroundColor={colors.primary} />
        <Routes />
      </NotificationProvider>
    </NavigationContainer>
  );
}