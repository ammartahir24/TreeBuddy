import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen'
import Explore from './components/Explore'

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView, 
  Text,
  Alert,
} from 'react-native';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  }, 
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}