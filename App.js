import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Explore from './components/Explore'
import Profile from './components/Profile'
import Settings from './components/Settings'
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
  LogIn: {
    screen: LogIn,
  },
  Home: {
    screen: HomeScreen,
  },
  Explore : {
    screen: Explore,
  },
  Profile : {
    screen: Profile,
  },
  Settings : {
    screen : Settings,
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
  Profile : {
    screen: Profile,
  },
  Settings : {
    screen : Settings,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}