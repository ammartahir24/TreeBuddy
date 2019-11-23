import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, View,  Container, Text, Image, TouchableWithoutFeedback } from "react-native";
import { TabNavigator } from "react-navigation";
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons';


export default class Explore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 31.5204,
      longitude: 74.3587,
      error:null,
      markers:[
                {T_ID: 1, location: {latitude: 31.471728, longitude: 74.410013}},
                {T_ID: 2, location: {latitude: 31.471817, longitude: 74.410567}},
              ]

    };
  }

  // markers:[{T_ID: 1, planter: "hamzaahmad86@gmail.com", SP_ID: 11, planted: "17/11/19", watered: "17/11/19", location: {latitude: 31.471728, longitude: 74.410013}, images: []},
  //             {T_ID: 2, planter: "hamzaahmad86@gmail.com", SP_ID: 22, planted: "16/11/19", watered: "16/11/19", location: {latitude: 31.471817, longitude: 74.410567}, images: []},
  //             {T_ID: 3, planter: "hamzaahmad86@gmail.com", SP_ID: 33, planted: "15/11/19", watered: "17/11/19", location: {latitude: 31.471675, longitude: 74.410688}, images: []},
  //             {T_ID: 4, planter: "hamzaahmad86@gmail.com", SP_ID: 44, planted: "14/11/19", watered: "17/11/19", location: {latitude: 31.471881, longitude: 74.410431}, images: []},
  //             ]

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         // console.log(position);
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: true, timeout: 200000 },
    );

    if(this.props.navigation.state.ID == undefined){
      this.getMarkers(-1);
    }
    else{
      this.getMarkers(this.props.navigation.state.ID);
    }

  }

  getMarkers = (treesToShow) => { //get all markers needed from the DB and update state. 
      console.log(treesToShow)
  }

  onMarkerPress = (e, loc) => { 
    this.props.navigation.navigate('PlantDetails', {location: loc})
  }


  static navigationOptions = ({navigation}) => ({
    headerLeft: (
      <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
        <Icon name="md-arrow-round-back"  style={{ marginTop: 10, marginLeft: 10}} size={32} color="#eedede" />
      </TouchableWithoutFeedback>
    ),
    headerStyle: {
        backgroundColor: '#00695c',
    },
    title:"Explore",
    headerTintColor:"#eedede",
  });

  render() {
    const {navigate} = this.props.navigation;
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
      >
        {this.state.markers.map((marker,i) => (
          <MapView.Marker coordinate={marker.location} key = {i} onPress = {(e) => {this.onMarkerPress(e,marker.location)}}>
            <Image source={require('../tree_marker.png')} style={{width:20, height:17}} />
            
          </MapView.Marker>
        ))} 
      </MapView>

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

