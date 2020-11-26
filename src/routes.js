import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation, DrawerActions, NavigationHelpersContext } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Icon } from 'native-base';

import CustomDrawer from './components/CustomDrawer'

import Login from './pages/Login';
import ErrorLogin from './components/ErrorLogin';
import Home from './pages/Home';

import RegisterDoctor from './pages/RegisterDoctor';
import RegisterStep2 from './pages/RegisterDoctor/RegisterStep2';
import RegisterStep3 from './pages/RegisterDoctor/RegisterStep3';
import RegisterStep4 from './pages/RegisterDoctor/RegisterStep4';

import AppointmentDetails from './pages/AppointmentDetails';

import Options from './pages/Options';

import MyProfile from './pages/MyProfile';
import Doubt from './pages/Doubt';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      drawerContent={props =>
        <CustomDrawer {...props} />
      }>
      <Drawer.Screen
        options={{ title: 'Home' }}
        name="Home"
        component={Home} />
      <Drawer.Screen
        options={{ title: 'Meu Perfil' }}
        name="MyProfile"
        component={MyProfile}
      />
      <Drawer.Screen
        options={{ title: 'Dúvidas' }}
        name="Doubt"
        component={Doubt}
      />
    </Drawer.Navigator>
  );
}


export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ErrorLogin"
        component={ErrorLogin}
      />
      <Stack.Screen
        options={{ title: 'Cadastro' }}
        name="RegisterDoctor"
        component={RegisterDoctor}
      />
      <Stack.Screen
        options={{ title: 'Cadastro' }}
        name="RegisterStep2"
        component={RegisterStep2}
      />
      <Stack.Screen
        options={{ title: 'Cadastro' }}
        name="RegisterStep3"
        component={RegisterStep3}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="RegisterStep4"
        component={RegisterStep4}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={DrawerNavigator}
      />
    </Stack.Navigator>
  );
};
