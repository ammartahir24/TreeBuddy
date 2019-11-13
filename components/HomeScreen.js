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
      headerLeft: <TouchableOpacity onPress={() => navigation.openDrawer()}> 

      <Image source={require('../hamburger.png')} style={{width:20, height:17, marginLeft: 20}} />

  </TouchableOpacity>,
    };
    // static navigationOptions = {
    //   headerTitle: () => <LogoTitle />,
    //   headerRight: () => (
    //     <Button
    //       onPress={() => alert('This is a button!')}
    //       title="Info"
    //       color="#fff"
    //     />
    //   ),
    // };
    render() {
      const {navigate} = this.props.navigation;
      return (
        null
      );
    }
  }