import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Login from './pages/Login';
import RegisterDoctor from './pages/RegisterDoctor';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Buscar" component={Home} />
      <Tab.Screen name="Consultas" component={Home} />
      <Tab.Screen name="Opções" component={Home} />
      <Tab.Screen name="Medicamentos" component={Home} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ title: 'Cadastro de Profissional' }} name="RegisterDoctor" component={RegisterDoctor} />
      <Stack.Screen name="Home" component={BottomTab} />
    </Stack.Navigator>
  );
};
