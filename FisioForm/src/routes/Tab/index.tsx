import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeatherIcon from 'react-native-vector-icons/Feather';

import Home from '../../pages/Home';
import MedicalAppointment from '../../pages/MedicalAppointment';
import User from '../../pages/User';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator 
    tabBarOptions={{ 
      keyboardHidesTabBar: true,
      labelStyle: {
        fontSize: 14,
        fontFamily: 'Nunito-Bold'
      },
      style: {
        backgroundColor: '#C4C4C4',
        borderTopColor: '#17AAB2'
      },
      activeTintColor: '#17AAB2',
      inactiveTintColor: '#70828A'
    }}>
    <Tab.Screen 
      name="Home" 
      component={Home}
      options={{
        title: 'Home',
        tabBarIcon: ({ size, color }) => (
          <FeatherIcon name="home" size={size} color={color}/>
        )
      }}
    />
    <Tab.Screen 
      name="MedicalAppointment" 
      component={MedicalAppointment}
      options={{
        title: 'Consultas',
        tabBarIcon: ({ size, color }) => (
          <FeatherIcon name="heart" size={size} color={color}/>
        )
      }}
    />
    <Tab.Screen 
      name="User" 
      component={User}
      options={{
        title: 'Usuário',
        tabBarIcon: ({ size, color }) => (
          <FeatherIcon name="user" size={size} color={color}/>
        )
      }}
    />
  </Tab.Navigator>
);