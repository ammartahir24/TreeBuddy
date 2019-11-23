import React from 'react';
import { StyleSheet, Button,  View, SafeAreaView, Text, Alert, Image, ImageBackground,TouchableWithoutFeedback, TouchableHighlight, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from "react-navigation";
import { Divider} from 'react-native-paper';

let img = 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg'

export default class PlantDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SP_ID: 23,
      SP_name: "Rosewood",
      SP_Bioname: "Dalbergia Stevensonii ",
      Occurences: '2',
      Kingdom: 'Plantae',
      Family: 'Fabacaea',
      Order: 'Fabales',
      images: [],
    };

  }

  componentDidMount(){
    // console.log("Details ", this.props.location, this.props, this.props.navigation.state.params)
    // this.setState({location:  {
    //                             latitude: this.props.navigation.state.params.location.latitude, 
    //                             longitude: this.props.navigation.state.params.location.longitude,
    //                           } })

    //get rest of information from DB and set state.

  }

  LocateSpecie = (e) =>{
    e.preventDefault();
    console.log("redirect2")
    this.props.navigation.navigate('Explore', {ID: this.state.SP_ID})
  }

  static navigationOptions = ({navigation}) => ({
    // title: this.state.latitude.toString() + " " + this.state.longitude.to_String(),
    headerStyle: {
      height: 200
    },
    headerBackground: (
    <Image
      style={StyleSheet.absoluteFill}
      source={{ uri: img }}
    />
    ),
    headerLeft: (
      <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
        <Icon name="md-arrow-round-back"  style={{ marginTop: -150, marginLeft: 10}} size={32} color="#eedede" />
      </TouchableWithoutFeedback>
    ),
  });


  render() {
    const {navigate} = this.props;
    return (
      <View style = {{backgroundColor: '#e7f0eb',height: '100%', width: '100%'}}>
        <View style={{backgroundColor: "#00695c", height: '20%'}}>
          <Text style = {{fontSize: 30, color: "#eedede", marginTop: '1%', marginLeft: 10}}>{this.state.SP_name} </Text>
          <Text style = {{fontSize: 20, color: "white", marginTop: '1%', marginLeft: 10}}>{this.state.SP_Bioname}</Text>
        </View> 
        <View style={{height:'80%', width:'100%',}}>
          
          <ImageBackground
            style={{ height: "100%", width:"100%"}}
            source = {require('../bgpink1.jpg')}
          >

            <View style= {{height:'20%',width:'100%',flexDirection: 'row', justifyContent: 'space-around'}}> 
              <Text style={{fontSize:20, alignSelf: 'center', width:'60%',marginLeft:30,color: "#00695c", fontWeight: "bold"}}>Instances</Text>
              <TextInput style={{textAlign: "left", width: "40%", fontSize: 20,alignSelf:'center', color:'#439889'}} value = {this.state.Occurences} editable = {false}/> 
            </View>
            <Divider style = {{width: "90%", alignSelf: "center"}}/>

            <View style= {{height:'20%',width:'100%',flexDirection: 'row', justifyContent: 'space-around'}}> 
              <Text style={{fontSize:20, alignSelf: 'center', width:'60%',marginLeft:30,color: "#00695c", fontWeight: "bold"}}>Kingdom</Text>
              <TextInput style={{textAlign: "left", width: "40%", fontSize: 20,alignSelf:'center',color: "#439889"}} value = {this.state.Kingdom} editable = {false}/> 
            </View>
            <Divider style = {{width: "90%", alignSelf: "center"}}/>

            <View style= {{height:'20%',width:'100%',flexDirection: 'row', justifyContent: 'space-around'}}> 
              <Text style={{fontSize:20, alignSelf: 'center', width:'60%',marginLeft:30,color: "#00695c", fontWeight: "bold"}}>Family</Text>
              <TextInput style={{textAlign: "left", width: "40%", fontSize: 20,alignSelf:'center',color: "#439889"}} value = {this.state.Family} editable = {false}/> 
            </View>
            <Divider style = {{width: "90%", alignSelf: "center"}}/>

            <View style= {{height:'20%',width:'100%', flexDirection: 'row', justifyContent: 'space-around'}}> 
              <Text style={{fontSize:20, alignSelf: 'center', width:'60%',marginLeft:30,color: "#00695c", fontWeight: "bold"}}>Order</Text>
              <TextInput style={{textAlign: "left", width: "40%", fontSize: 20,alignSelf:'center',color: "#439889"}} value = {this.state.Order} editable = {false}/> 
            </View>
            <Divider style = {{width: "90%", alignSelf: "center"}}/>

            <View style = {{height: '20%', width: '100%', marginTop: 10}}>
              <TouchableHighlight underlayColor="#439889" onPress ={(e) =>{this.LocateSpecie(e)}}  style = {{backgroundColor: '#00695c', width: '55%',height: '70%', alignSelf: 'center', borderRadius: 30}}>
                <View onPress = {(e)=> {this.viewSpecie(e)}} style = {{width: '100%', flexDirection: 'row', alignSelf: 'center', marginLeft: '20%', paddingTop:10}}>
                  <Icon name="md-eye" style = {{alignSelf: 'center'}} color = "#eedede" size = {30}/>
                  <Text style={styles.fullWidthButtonText}>  Locate Specie</Text>
                </View>
              </TouchableHighlight>
            </View>

          </ImageBackground>


        </View>
       
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  fullWidthButtonText: {
    alignSelf: 'center',
    fontSize:20,
    color: '#eedede',
  }
})