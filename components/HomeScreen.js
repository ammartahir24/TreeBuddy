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
  MenuButton,
} from 'react-native';
import {NavigationActions} from 'react-navigation';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
      title: 'Welcome',
      headerLeft: <TouchableOpacity onPress={() => navigation.toggleDrawer()}> 
                      <Image source={require('../hamburger.png')} style={{width:20, height:17, marginLeft: 20}} />
                  </TouchableOpacity>,
    });
    render() {
      const {navigate} = this.props.navigation;
      return (
        null
      );
    }
  }