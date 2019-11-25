import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, View,  Container, Text, Image, TouchableWithoutFeedback } from "react-native";
import { TabNavigator } from "react-navigation";
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons';
import {getSinglePlant, getAllPlants, getPlantFromSPID} from "../firebase_integeration/databasefunctions"


export default class Explore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 31.5204,
      longitude: 74.3587,
      error:null,
      markers:[
  {"Date_Planted":"22-02-18", "Image": "http://www.bothranursery.com/wp-content/uploads/2015/12/8.jpg",                  "Location":  {"latitude": 31.472219, "longitude": 74.410782,}, "Name": "Neembaaz ", "Plant_ID": 5326, "Planter_ID": 2, "Planter":"Hamza", "Specie_Bioname": "Azadirachta Indica", "Specie_ID": 8, "Specie_Name": "Neem", "Watered":"22-11-19",},
  {"Date_Planted":"22-03-19", "Image": "https://c-6rtwjumjzx7877x24nrlncx2ewfspjwx2ehtr.g00.ranker.com/g00/3_c-6bbb.wfspjw.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fnrlnc.wfspjw.htrx2fzx78jw_stij_nrlx2f05558x2f6555599785x2ftwnlnsfqx2fymj-gfsfsf-ywjj-nx78-sty-f-ywjj-kttix78-umtyt-z7x3fbx3d105x26vx3d05x26krx3duoulx26knyx3dhwtux26hwtux3dkfhjx78x26n65h.rfwpx3dnrflj_$/$/$/$/$/$", "Location":  {"latitude": 31.469847, "longitude": 74.409374,}, "Name": "Banana Boy", "Plant_ID": 389, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Musa Basjoo", "Specie_ID": 2, "Specie_Name": "Banana Tree", "Watered":"22-11-19"},        
  {"Date_Planted":"02-05-18", "Image": "https://i.pinimg.com/originals/83/00/bc/8300bc51e01e77b7f526ec96540d8d66.jpg",   "Location":  {"latitude": 31.471507, "longitude": 74.409701,}, "Name": "Neem Darakhat", "Plant_ID": 5756, "Planter_ID": 2, "Planter":"Hamza", "Specie_Bioname": "Azadirachta Indica", "Specie_ID": 8, "Specie_Name": "Neem", "Watered":"22-11-19",},
  {"Date_Planted":"03-12-18", "Image": "https://cdn.pixabay.com/photo/2017/10/20/17/18/babul-2872022_960_720.jpg",       "Location":  {"latitude": 31.470734, "longitude": 74.408703,}, "Name": "Kiker K Darakhat", "Plant_ID": 3985, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Acacia Nilotica", "Specie_ID": 5, "Specie_Name": "Kiker", "Watered":"22-11-19",},
  {"Date_Planted":"20-02-10", "Image": "http://i.dawn.com/2012/08/6-gul-e-nishter-trees-qamar-mehdi-670.jpg",            "Location":  {"latitude": 31.471036, "longitude": 74.408698,}, "Name": "Sumbal Darakhat 2", "Plant_ID": 9357, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Bombax Ceiba", "Specie_ID": 6, "Specie_Name": "Sumbal", "Watered":"22-11-19",},
  {"Date_Planted":"12-02-15", "Image": "http://i.dawn.com/2012/08/7-sukh-chane-trees-qamar-mehdi-670.jpg",               "Location":  {"latitude": 31.471557, "longitude": 74.409615,}, "Name": "Sucky Sucky", "Plant_ID": 6046, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Pongamia Pinata", "Specie_ID": 7, "Specie_Name": "Sukh Chain", "Watered":"22-11-19",},
  {"Date_Planted":"05-07-13", "Image": "http://i.dawn.com/2012/08/4-sumbul-trees-qamar-mehdi-450.jpg",                   "Location":  {"latitude": 31.470734, "longitude": 74.408703,}, "Name": "Sumbal Tree", "Plant_ID": 7384, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Bombax Ceiba", "Specie_ID": 6, "Specie_Name": "Sumbal", "Watered":"22-11-19",},
  {"Date_Planted":"06-07-14", "Image": "https://images-na.ssl-images-amazon.com/images/I/61unKaYGOsL.jpg",               "Location":  {"latitude": 31.471399, "longitude": 74.411191,}, "Name": "Treever", "Plant_ID": 2808, "Planter_ID": 2, "Planter":"Hamza", "Specie_Bioname": "Dalbergia", "Specie_ID": 11, "Specie_Name": "Rosewood", "Watered":"22-11-19",},
  {"Date_Planted":"11-11-11", "Image": "https://i.pinimg.com/originals/ee/ee/41/eeee41f43035f6e3e36840ea482a5f14.jpg",   "Location":  {"latitude": 31.472196, "longitude": 74.410494,}, "Name": "Arjun Rampal", "Plant_ID": 3352, "Planter_ID": 2, "Planter":"Hamza", "Specie_Bioname": "Terminalia Arjuna", "Specie_ID": 9, "Specie_Name": "Arjun", "Watered":"22-11-19",},
  {"Date_Planted":"06-08-17", "Image": "https://d6p0gevo8s9lm.cloudfront.net/media/catalog/product/cache/1/image/353x353/9df78eab33525d08d6e5fb8d27136e95/m/u/musa-basjoo750x750.jpg",   "Location":  {"latitude": 31.469861, "longitude": 74.409519,}, "Name": "Banana Man", "Plant_ID": 5369, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Musa Basjoo", "Specie_ID": 2, "Specie_Name": "Banana Tree", "Watered":"22-11-19",},
  {"Date_Planted":"11-03-03", "Image": "https://live.staticflickr.com/2524/3954496959_e7fb57a43f_b.jpg",                                                                                 "Location":  {"latitude": 31.47024, "longitude": 74.409213,}, "Name": "Thorny Kiker", "Plant_ID": 292, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Acacia Nilotica", "Specie_ID": 5, "Specie_Name": "Kiker", "Watered":"22-11-19"},
  {"Date_Planted":"14-02-16", "Image": "https://media.npr.org/assets/img/2012/10/05/apple-tree-056fb57ed927bf3668ef04e5b9850e99363b87fe-s1100-c15.jpg",                                  "Location":  {"latitude": 31.469349, "longitude": 74.409841,}, "Name": "Asaaib", "Plant_ID": 797, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Malus Domestica", "Specie_ID": 1, "Specie_Name": "Apple Tree", "Watered":"22-11-19",},
  {"Date_Planted":"21-11-09", "Image": "https://i.pinimg.com/originals/5f/fc/c1/5ffcc15874a99035e053bbc5ff8148f5.jpg",   "Location":  {"latitude": 31.469139, "longitude": 74.409465,}, "Name": "Aam Khao", "Plant_ID": 452, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Mangifera indica", "Specie_ID": 4, "Specie_Name": "Mango", "Watered":"22-11-19",},
  {"Date_Planted":"19-01-07", "Image": "https://cdn.britannica.com/68/128168-004-BB84F2D2/Eucalyptus-tree.jpg",          "Location":  {"latitude": 31.470057, "longitude": 74.409336,}, "Name": "Angraiz", "Plant_ID": 9079, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Eucalytpus Globulus", "Specie_ID": 3, "Specie_Name": "Eucalytpus", "Watered":"22-11-19",},
  {"Date_Planted":"12-02-15", "Image": "https://smedia2.intoday.in/indiatoday/images/stories/2017November/peepal-mos_110917010639.jpg",                                                  "Location":  {"latitude": 31.47204, "longitude": 74.41059,}, "Name": "Peepal Sheepal", "Plant_ID": 5519, "Planter_ID": 2, "Specie_Bioname": "Ficus Religiosa", "Specie_ID": 10, "Specie_Name": "Peepal", "Watered":"22-11-19",},
  {"Date_Planted":"13-04-04", "Image": "https://images-na.ssl-images-amazon.com/images/I/71aGedkWLDL.jpg",               "Location":  {"latitude": 31.469486, "longitude": 74.409803,}, "Name": "Saib K Darakahat", "Plant_ID": 2816, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Malus Domestica", "Specie_ID": 1, "Specie_Name": "Apple Tree", "Watered":"22-11-19",},
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

    if (this.props.navigation.state.params != undefined){
        console.log(this.props.navigation.state.params["ID"])
        p2 = new Promise((resolve, reject)=>{
          let para = this.props.navigation.state.params["ID"]
          resolve(para)
        })
        p2.then(para=>{
          console.log("para", para)
          if(this.props.navigation.state.params != undefined){
            let p1= new Promise((resolve, reject)=>{
              
              let filt = this.state.markers.filter(function (el) {
                return el["Specie_ID"] == para;
              })
              resolve(filt)
            })
            p1.then(filt=>{
              console.log(filt)
              this.setState({markers: filt})})

          }


        })

    }

    // else{
    //   console.log("Get Species" , this.props.navigation.state.params.ID)
    //   let Plants = await getPlantFromSPID(this.props.navigation.state.params.ID)
    //   console.log(Plants)
    // }

  }

  // getMarkers = (treesToShow) => { //get all markers needed from the DB and update state. 
  //     console.log(treesToShow)
  // }


  onMarkerPress = (e, loc) => { 
    this.props.navigation.navigate('PlantDetails', {ID: loc})
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
          <MapView.Marker coordinate={marker.Location} key = {i} onPress = {(e) => {this.onMarkerPress(e,marker.Plant_ID)}}>
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

