import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Explore from './components/Explore'
import Profile from './components/Profile'
import Settings from './components/Settings'
import AddTree from './components/AddTree'
import PlantDetails from './components/PlantDetails'
import SpecieDetails from './components/SpecieDetails'
import {createDrawerNavigator} from "react-navigation-drawer";

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView, 
  Text,
  Alert,
} from 'react-native';

const AuthenticationStack = createStackNavigator({
  LogIn : {
    screen: PlantDetails,
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
  SpecieDetails : {
    screen: SpecieDetails,
  },
  AddTree : {
    screen : AddTree,
  },
  Profile : {
    screen: Profile,
  },
  Settings : {
    screen : Settings,
  },
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