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
    Alert,
    Keyboard
    // TouchableHighlight
  
} from 'react-native';

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
      error: 'Its only fair if we know each other'
    },
    password: {
      error: 'Sorry, wont let you go without the password :)'
    },
  },
};

export default class LogIn extends Component {

 handleSubmit = async () => {
    const value = this._form.getValue(); // use that ref to get the form value
    // console.log('username: ', value.username);
    // console.log('password: ', value.password);
    let ans = await check(value.email, value.password)
    if(ans == 'true')
    {
      this.props.navigation.navigate("App");
    }
    else if(ans == "false")
    {
      Keyboard.dismiss();

        this.state.email = '';
        this.state.password =  '';
    }


  }




  static navigationOptions = {
      title: '  Log In', //keep log at tab space to align with the fields below,
 };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c} // assign a ref
          type={User}
          options={options} 
        />
        <Button
          title="Login to your accounr"
          onPress={this.handleSubmit}
          // onPress={()=>{this.props.navigation.navigate("App")}}
        />


        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("SignUp")}}>
          <Text style={{textAlignVertical: "center",textAlign: "center", marginTop: 10}}> Dont have an account </Text>
        </TouchableOpacity>


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

