import React from 'react';
import { StyleSheet, Button,  View, SafeAreaView, Text, Alert, Image,TouchableWithoutFeedback, TouchableHighlight, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from "react-navigation";

let img = 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg'

export default class SpecieDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // latitude: null,
      // longitude: null,
      // name: "Treevor",
      // planter: "Mubeen",
      SP_ID: null,
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
    console.log("redirect")
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
        <Icon name="md-arrow-round-back"  style={{ marginTop: -150, marginLeft: 10}} size={32} color="#FFFFFF" />
      </TouchableWithoutFeedback>
    ),
  });


  render() {
    const {navigate} = this.props;
    return (
      <View style = {{}}>
        <View style={{backgroundColor: "#017745", height: '25%'}}>
          <Text style = {{fontSize: 30, color: "#FFFFFF", marginTop: '1%'}}>&nbsp;{this.state.SP_name} </Text>
          <Text style = {{fontSize: 20, color: "gold", marginTop: '1%', marginLeft: '1%'}}>&nbsp;{this.state.SP_Bioname}</Text>
        </View> 

        <View style={{height: "5%"}}/>

        <View style= {{marginLeft: "7%", marginRight: "7%", flexDirection: 'row', justifyContent: 'space-between'}}> 
          <Text style={{fontSize: 20, marginTop: 10, paddingBottom: 0}} >Instances</Text>
          <TextInput style={{textAlign: "center", width: "50%", fontSize: 20, borderBottomWidth: 1, borderBottomColor: "#017745"}} value = {this.state.Occurences} editable = {false}/> 
        </View>

        <View style={{height: "7%"}}/>

        <View style= {{marginLeft: "7%", marginRight: "7%", flexDirection: 'row', justifyContent: 'space-between'}}> 
          <Text style={{fontSize: 20, marginTop: 10}} >Kingdom</Text>
          <TextInput style={{textAlign: "center", width: "50%", fontSize: 20, borderBottomWidth: 1, borderBottomColor: "#017745"}} value ={this.state.Kingdom} editable = {false}/> 
        </View>         

        <View style={{height: "7%"}}/>

        <View style= {{marginLeft: "7%", marginRight: "7%", flexDirection: 'row', justifyContent: 'space-between'}}> 
          <Text style={{fontSize: 20, marginTop: 10}} >Family</Text>
          <TextInput style={{textAlign: "center", width: "50%", fontSize: 20, borderBottomWidth: 1, borderBottomColor: "#017745"}} value ={this.state.Family} editable = {false}/> 
        </View>         

        <View style={{height: "7%"}}/>

        <View style= {{marginLeft: "7%", marginRight: "7%", flexDirection: 'row', justifyContent: 'space-between'}}> 
          <Text style={{fontSize: 20, marginTop: 10}} >Order</Text>
          <TextInput style={{textAlign: "center", width: "50%", fontSize: 20, borderBottomWidth: 1, borderBottomColor: "#017745"}} value ={this.state.Order} editable = {false}/> 
        </View>

        // <View style={styles.inputsContainer}>
        //   <TouchableHighlight underlayColor ="#069e5e" style={styles.fullWidthButton} onPress={(e) =>{this.LocateSpecie(e)}}>
        //     <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
        //       <Icon name="md-eye" style = {{marginTop: "10%"}} color = "gold" size = {20}/>
        //       <Text style={styles.fullWidthButtonText}>&nbsp;&nbsp;Locate Species</Text>
        //     </View>
        // </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputsContainer: {
    alignItems: "center",
    flex: 1,
  },
  fullWidthButton: {
    marginTop: "10%",
    marginRight: "5%",
    marginLeft: "5%",
    width: "55%",
    backgroundColor: '#017745',
    height: "140%",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  fullWidthButtonText: {
    textAlignVertical: "center",
    paddingBottom: "15%",
    fontSize:15,
    color: 'gold',
  }
})