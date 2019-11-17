import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen'
import Explore from './components/Explore'
import {createDrawerNavigator} from "react-navigation-drawer";


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
  Explore : {
    screen: Explore,
  },
});

const AppContainer = createAppContainer(AppNavigator);


const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppContainer,
  },
  Explore : {
    screen: Explore,
  },
  // Notifications: {
  //   screen: MyNotificationsScreen,
  // },
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}