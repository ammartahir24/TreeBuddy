import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen'
import Explore from './components/Explore'
<<<<<<< HEAD
import {createDrawerNavigator} from "react-navigation-drawer";

=======
>>>>>>> 19583c2f8c1bee8f2b54810acf56443aec8153f7

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
<<<<<<< HEAD
  },
  Explore : {
    screen: Explore,
  },
=======
  }, 
>>>>>>> 19583c2f8c1bee8f2b54810acf56443aec8153f7
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