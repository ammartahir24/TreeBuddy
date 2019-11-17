import React from 'react';
import { StyleSheet, Button,  View, SafeAreaView, Text, Alert, Image,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from "react-navigation";

let img = 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg'

export default class PlantDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      planter: null,
      SP_ID: null,
      SP_name: null,
      planted: null,
      watered: null,
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
        null
      );
    }
  }