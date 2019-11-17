import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen'
<<<<<<< HEAD
// import Explore from './components/Explore'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'

=======
import Explore from './components/Explore'
import Profile from './components/Profile'
import Settings from './components/Settings'
>>>>>>> b05faeb03979392e0aac346f86a81d46d4238c49
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
    screen: SignUp,
  },
<<<<<<< HEAD
  // Explore : {
  //   screen: Explore,
  // },
=======
  Profile : {
    screen: Profile,
  },
  Settings : {
    screen : Settings,
  },
>>>>>>> b05faeb03979392e0aac346f86a81d46d4238c49
});

const AppContainer = createAppContainer(AppNavigator);


<<<<<<< HEAD
// const MyDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: AppContainer,
//   },
//   Explore : {
//     screen: Explore,
//   },
// });
=======
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
>>>>>>> b05faeb03979392e0aac346f86a81d46d4238c49

// const MyApp = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  render() {
    // return <MyApp />;
    return <AppContainer />;

  }
}