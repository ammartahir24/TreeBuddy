import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
      headerLeft: <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}> 

      <Image source={require('../hamburger.png')} style={{width:20, height:17, marginLeft: 20}} />
  </TouchableOpacity>,
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        null
      );
    }
  }