import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Alert,
  TouchableHighlight,
  Image,
  ImageBackground,
} from 'react-native';
import { TextInput } from 'react-native-paper';

export default class RegisterPlant extends React.Component {
  constructor(props) {
      super(props);
      this.state = {text: '',date: new Date()};
    }
  static navigationOptions = {
    title: 'Add a Tree',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style={{width : "100%", height : "100%"}}>
      <ImageBackground
            style={{ opacity: 0.8, height: "100%", width:"100%"}}
            source = {require('../backdrop1jpg.jpg')}
      >
      <View style={{paddingRight:"15%", paddingLeft:"15%", paddingTop:"15%"}}>
        {/* <View style={{height: "5%"}}/> */}
          <TextInput
            placeholder="Nick Name"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <View style={{height: "5%"}}/>
          <TextInput
            placeholder="Type of tree"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <View style={{height: "5%"}}/>
          <TextInput
            placeholder="Planted date"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
      </View>
        
      </ImageBackground>
        
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
