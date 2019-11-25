import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Explore from './components/Explore'
import Profile from './components/Profile'
import Settings from './components/Settings'
import SplashScreen from './components/SplashScreen.js'
// import Camera from './components/CameraComponent'
import PlantDetails from './components/PlantDetails'
import MyTrees from './components/MyTrees'
import Animation from './components/Animation'
import ScanList from './components/ScanList'
import WaterList from './components/WaterList'
import RegisterPlant from "./components/RegisterPlant"
import SpecieDetails from './components/SpecieDetails'
import {createDrawerNavigator} from "react-navigation-drawer";
import Rewards from './components/Rewards'

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


const AppNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
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
  Profile : {
    screen: Profile,
  },
  Settings : {
    screen : Settings,
  },
  MyTrees : {
    screen: MyTrees,
  },
  Animation : {
    screen: Animation,
  },
  ScanList : {
    screen: ScanList,
  },
  WaterList : {
    screen: WaterList,
  },
  RegisterPlant : {
    screen : RegisterPlant,
  },
  Rewards : {
    screen : Rewards,
  }
});


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
  Rewards : {
    screen : Rewards,
  },
});


// const MyApp = createAppContainer(MyDrawerNavigator);
const MyApp = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}