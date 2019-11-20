import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Button,
    TouchableWithoutFeedback,
    TouchableHighlight, 
    TextInput,
    Text,
    TouchableOpacity,
    AppRegistry,
    ImageBackground
  
} from 'react-native';

import t from 'tcomb-form-native';
import {signin} from "../firebase_integeration/databasefunctions"

const Form = t.form.Form;
const User = t.struct({
  username: t.String,
  email: t.String,
  password: t.String,
  age: t.Number
});
const options = {
  fields: {
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    username: {
      error: 'Its only fair if we know each other\'s name. Isnt it.'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
    age: {
      error: 'If this takes off, we will send you a birthday card.',
    },
  },
};
export default class SignUp extends Component {

  static navigationOptions = {
      title: 'Create Account', //keep log at tab space to align with the fields below,
      drawerLockMode: 'locked-closed',
    };
  
   handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }

  render() {
    return (

      <View style={styles.container}>
        <Form 
          ref={c => this._form = c} 
          type={User}
          options={options}
        />
          
        <Button
          title="That's right Dawg, create it"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 0,
    padding: 50,
    // backgroundColor: '#ffffff',
    // flex: 1,
    // alignItems: 'center',

    //hex color below
    // backgroundColor: '#144314',

  },

});

AppRegistry.registerComponent('SignUp', () => SignUp);