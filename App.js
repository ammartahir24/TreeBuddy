import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Explore from './components/Explore'
import Profile from './components/Profile'
import Settings from './components/Settings'
import PlantDetails from './components/PlantDetails'
import RegisterPlant from "./components/RegisterPlant"
import {createDrawerNavigator} from "react-navigation-drawer";

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView, 
  Text,
  Alert,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';

const AuthenticationStack = createStackNavigator({
  LogIn : {
    screen: LogIn,
  },
  SignUp : {
    screen : SignUp,
  },
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Explore : {
    screen: Explore,
  },
  PlantDetails : {
    screen : PlantDetails,
  },
  Profile : {
    screen: Profile,
  },
  Settings : {
    screen : Settings,
  },
  RegisterPlant : {
    screen : RegisterPlant,
  }
});

// const AppContainer = createAppContainer(AppNavigator);

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppNavigator,
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


const switchnav = createSwitchNavigator({
  Auth : AuthenticationStack,
  App: MyDrawerNavigator,
})

// const MyApp = createAppContainer(MyDrawerNavigator);
const MyApp = createAppContainer(switchnav);

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}