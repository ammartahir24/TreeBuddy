import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, View,  Container, Text } from "react-native";
import { TabNavigator } from "react-navigation";
import MapView from 'react-native-maps'

export default class Explore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 31.5204,
      longitude: 74.3587,
      error:null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log("wokeeey");
         console.log(position);
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: true, timeout: 200000 },
     );
   }


  render() {
    return (
      <MapView 
        style={styles.map} 
        region={{
         latitude: this.state.latitude,
         longitude: this.state.longitude,
         latitudeDelta: 0.0019,
         longitudeDelta: 0.0019
        }} 
        showsUserLocation = {true}
        showsMyLocationButton = {true}
        loadingEnabled = {true}
      />

    );
  }
}

const styles = StyleSheet.create({
  
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

