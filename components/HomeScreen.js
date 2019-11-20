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
  ImageBackground,
} from 'react-native';

import {NavigationActions} from 'react-navigation';
import {Toolbar} from "react-native-material-ui";

export default class HomeScreen extends React.Component {
  state = {
    search : '',
  };

  updateSearch = search => {
    this.setState({search});
  }
  static navigationOptions = ({navigation}) => ({
    title: 'Welcome',
    headerLeft: <TouchableOpacity onPress={() => navigation.toggleDrawer()}> 
                    <Image source={require('../hamburger.png')} style={{width:20, height:17, marginLeft: 20}} />
                </TouchableOpacity>,
    header : null
  });
    render() {
      const {navigate} = this.props.navigation;
      const {search} = this.state;
      return (
        <ImageBackground source={require('../background.png')} style={{width: '100%', height: '100%'}}>
          <Toolbar
            leftElement = "menu"
            centerElement = "Home"
            searchable = {{
              autoFocus: true, 
              placeholder: "Search"
            }}
            rightElement = "camera-alt"
            onLeftElementPress = { ()=> {this.props.navigation.toggleDrawer()}}
            onRightElementPress = { ()=>console.log("camera")}
            style={{container:{backgroundColor: "#017745"}}}
          />
        </ImageBackground>
        
      );
    }
  }