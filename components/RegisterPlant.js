import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

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

export default class RegisterPlant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: '',date: new Date()};
      }
    static navigationOptions = {
      title: 'RegisterPlant',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{paddingLeft: 40, paddingRight: 40, paddingTop:50, paddingBottom:40}}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Nick Name"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <View style={{height: "15%"}}/>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Type of tree"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <View style={{height: "15%"}}/>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Planted date"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <DatePicker
            date={this.state.date}
            onDateChange={date => this.setState({ date })}
            />
          {/* <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text> */}

          {/* <TouchableHighlight style={styles.fullWidthButton} >
            <Text style={styles.fullWidthButtonText}>View Species</Text>
          </TouchableHighlight> */}
        </View>
        // <View style={styles.inputsContainer}>
        
    //   </View>
      );
    }
  }