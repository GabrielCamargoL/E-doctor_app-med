import React from 'react';

import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Login from './pages/Login';
import RegisterDoctor from './pages/RegisterDoctor';
import RegisterStepTwo from './pages/RegisterDoctor/RegisterStepTwo';

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
      <Stack.Screen options={{ title: 'Cadastro' }} name="RegisterDoctor" component={RegisterDoctor} />
      <Stack.Screen options={{ title: 'Cadastro' }} name="RegisterStepTwo" component={RegisterStepTwo} />
      <Stack.Screen name="Home" component={BottomTab} />
    </Stack.Navigator>
  );
};