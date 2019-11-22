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
import {create_user} from "../firebase_integeration/databasefunctions"

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  email: t.String,
  password: t.String,
  confirmpassword: t.String
  
});

const options = {
  fields: {
    email: {
      error: 'Email missing'
    },
    name: {
      error: 'Name missing'
    },
    password: {
      error: 'Password missing',
      password: true,
      secureTextEntry: true
    },

    confirmpassword: {
      error: 'Password error',
      password: true,
      secureTextEntry: true
    },
  },
};

const check = async(username, email, passWord, age) => {

  const data = {
            Name : username,
            Email : email,
            Password : passWord,
            Trees: 0,
            Rating: 0,
        }

  let isValid = await create_user(data);
  // console.log("Ek min: ", isValid)

  // if(isValid == "false")
  // {
  //   ans = "false";
  //   Alert.alert(
  //     'Login Failed',
  //     '',
  //     [
  //       {text: 'Try again', onPress: () => console.log('trying again')},
        
  //       // {text: 'OK', onPress: () => console.log('OK Pressed')},
  //     ],
  //     {cancelable: false},

  // );
  //     return ans;
    
  // }
  // else if(isValid == "true")
  // {
  //   // this.props.navigation.navigate("App");
  //   return "true";
  // }

  // return;

}


export default class SignUp extends Component {

  static navigationOptions = {
      title: 'Create Account', //keep log at tab space to align with the fields below,
      drawerLockMode: 'locked-closed',
    };
  
   handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
    // if(value.password != value.confirmpassword)
    // {

    // }
    check(value.name, value.email, value.password)
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
          title="Create Account"
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
    alignSelf: 'center',
    width: "100%",
    height: "100%"

  },

});

AppRegistry.registerComponent('SignUp', () => SignUp);