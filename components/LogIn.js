import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Button,
    TouchableWithoutFeedback,
    TouchableHighlight, 
    // TextInput,
    Text,
    TouchableOpacity,
    Alert,
    Keyboard
    // TouchableHighlight
  
} from 'react-native';

import { TextInput } from 'react-native-paper';
import t from 'tcomb-form-native';
import {signin} from "../firebase_integeration/databasefunctions"

const check = async(userID, passWord) => {
  // Keyboard.dismiss();
  console.log("email enterd: ", userID)
  console.log("password entered (dw, we aint storing your password): ", passWord)
  // signin("20100108@lums.edu.pk","hamza1234")
  // let isValid;
  let isValid = await signin(userID,passWord)
  
  console.log("Ek min: ", isValid)

  if(isValid == "false")
  {
    ans = "false";
    Alert.alert(
      'Login Failed',
      '',
      [
        {text: 'Try again', onPress: () => console.log('trying again')},
        
        // {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},

  );
      return ans;
    
  }
  else if(isValid == "true")
  {
    // this.props.navigation.navigate("App");
    return "true";
  }

  return;

}


const Form = t.form.Form;
const User = t.struct({
  email: t.String,
  password: t.String,
});

const options = {
  fields: {
    email: {
      lable: 'Email',
      error: 'Email missing'
    },
    password: {
      error: 'Password missing'
    },
  },
};

export default class LogIn extends Component {

  state = {
    email_text: '',
    password_text: ''
  };

 handleSubmit = async () => {
    const value = this._form.getValue(); // use that ref to get the form value
    // console.log('username: ', value.username);
    // console.log('password: ', value.password);
    console.log(this.state.email_text);
    console.log(this.state.password_text);

    let ans = await check(this.state.email_text, this.state.password_text)
    if(ans == 'true')
    {
      this.props.navigation.navigate("App");
    }
    else if(ans == "false")
    {
      Keyboard.dismiss();

        // this.state.email = '';
        this.state.email_text = '';

        this.state.password_text =  '';
    }


  }




  static navigationOptions = {
      title: '  Log In', //keep log at tab space to align with the fields below,
 };

  render() {
    const {navigate} = this.props.navigation;
    return (

      <View style={styles.container}>
      <View style={{paddingBottom: 10}}>
        <TextInput style = {{color: 'red'}}
        label='Email'
        placeholder='email'
        selectionColor = "red"
        value={this.state.email_text}
        onChangeText={email_text => this.setState({ email_text })}
      />
      </View>

      <View >
      <TextInput
        label='passWord'
        placeholder='email'
        value={this.state.password_text}
        onChangeText={password_text => this.setState({ password_text })}
      />
      </View>

      <View>
        <Button
          title="Login"
          onPress={this.handleSubmit}
          // onPress={()=>{this.props.navigation.navigate("App")}}
        />
      </View>

      <View>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("SignUp")}}>
          <Text style={{textAlignVertical: "center",textAlign: "center", marginTop: 10}}>Don't have an account?</Text>
        </TouchableOpacity>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 0,
    padding: 20,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    width: "100%",
    height: "100%"
  },
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
});

