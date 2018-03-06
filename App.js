import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';

import FirstScreen from './src/FirstScreen';
import SecondScreen from './src/SecondScreen';

const DrawerExample = DrawerNavigator(
  {
    About: {
      path: '/',
      screen: FirstScreen,
    },
    Logout: {
      path: '/sent',
      screen: SecondScreen,
    },
  },
  {
    initialRouteName: 'About',
    drawerPosition: 'left'
  }
);

export default DrawerExample;