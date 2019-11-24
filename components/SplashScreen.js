import React from "react";
import {
    StyleSheet,
    Text,
    Font,
    TouchableOpacity,
    Image,
    navigation,
    View,
  
} from 'react-native';
import bg from '../bg.png'

export default class SplashScreen extends React.Component
{
  componentDidMount() {
    setTimeout(()=>{
      this.props.navigation.navigate('Home')
    },2000)
  }
  render() 
  {
    return (
      <View style={{flex:1, height:'100%',width:'100%',backgroundColor:'#00695c',justifyContent:'center',aligntItems:'center'}}>
      <Image source={bg} style={{height:300,width:300,alignSelf:'center'}}/>
      </View>
      )
  }
}


