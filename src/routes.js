import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Home from './pages/Home';
import Options from './pages/Options';

import RegisterDoctor from './pages/RegisterDoctor';
import RegisterStep2 from './pages/RegisterDoctor/RegisterStep2';
import RegisterStep3 from './pages/RegisterDoctor/RegisterStep3';
import RegisterStep4 from './pages/RegisterDoctor/RegisterStep4';

import DetailsDoctor from './pages/DetailsDoctor';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Buscar" component={Home} />
      <Tab.Screen name="Opções" component={Options} />
    </Tab.Navigator>
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
        name="DetailsDoctor" 
        component={DetailsDoctor} 
      />
      <Stack.Screen 
        name="Home" 
        component={BottomTab} 
      />
    </Stack.Navigator>
  );
};
