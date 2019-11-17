import React from 'react';
import { StyleSheet, Button,  View, SafeAreaView, Text, Alert, Image,TouchableWithoutFeedback, TouchableHighlight, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from "react-navigation";

let img = 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg'

export default class PlantDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      name: "Treevor",
      planter: "Mubeen",
      SP_ID: null,
      SP_name: "Rosewood",
      SP_Bioname: "Dalbergia Stevensonii ",
      planted: "15/11/2014",
      watered: "17/11/2019",
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
        <View>
          <View style={{backgroundColor: "#017745", height: '25%'}}>
            <Text style = {{fontSize: 30, color: "#FFFFFF", marginTop: '1%'}}>&nbsp;{this.state.SP_name} </Text>
            <Text style = {{fontSize: 20, color: "gold", marginTop: '1%', marginLeft: '1%'}}>&nbsp;{this.state.SP_Bioname}</Text>
          </View> 

          <View style={{height: "5%"}}/>

          <View style= {{marginLeft: "3%", marginRight: "3%", flexDirection: 'row', justifyContent: 'space-between'}}> 
            <Text style={{fontSize: 20, marginTop: 10}} >Nickname</Text>
            <TextInput style={{textAlign: "center", width: "50%", fontSize: 20, borderBottomWidth: 1, borderBottomColor: "#017745"}} placeholder = {this.state.name} editable = {false}/> 
          </View>

          <View style={{height: "7%"}}/>

          <View style= {{marginLeft: "3%", marginRight: "3%", flexDirection: 'row', justifyContent: 'space-between'}}> 
            <Text style={{fontSize: 20, marginTop: 10}} >Planted By</Text>
            <TextInput style={{textAlign: "center", width: "50%", fontSize: 20, borderBottomWidth: 1, borderBottomColor: "#017745"}} placeholder = {this.state.planter} editable = {false}/> 
          </View>         

          <View style={{height: "7%"}}/>

          <View style= {{marginLeft: "3%", marginRight: "3%", flexDirection: 'row', justifyContent: 'space-between'}}> 
            <Text style={{fontSize: 20, marginTop: 10}} >Planted On</Text>
            <TextInput style={{textAlign: "center", width: "50%", fontSize: 20, borderBottomWidth: 1, borderBottomColor: "#017745"}} placeholder = {this.state.planted} editable = {false}/> 
          </View>         

          <View style={{height: "7%"}}/>

          <View style= {{marginLeft: "3%", marginRight: "3%", flexDirection: 'row', justifyContent: 'space-between'}}> 
            <Text style={{fontSize: 20, marginTop: 10}} >Last Watered</Text>
            <TextInput style={{textAlign: "center", width: "50%", fontSize: 20, borderBottomWidth: 1, borderBottomColor: "#017745"}} placeholder = {this.state.watered} editable = {false}/> 
          </View>

          <View style={styles.inputsContainer}>
            <TouchableHighlight style={styles.fullWidthButton} >
                <Text style={styles.fullWidthButtonText}>View Species</Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  inputsContainer: {
    flex: 1
  },
  fullWidthButton: {
    marginTop: "10%",
    marginRight: "5%",
    marginLeft: "5%",
    backgroundColor: '#017745',
    height: "140%",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  fullWidthButtonText: {
    textAlignVertical: "center",
    paddingBottom: "10%",
    fontSize:24,
    color: 'gold'
  }
})