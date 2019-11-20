import React from "react";
import {
    StyleSheet,
    Text,
    Font,
    TouchableOpacity,
    Image,
    navigation
  
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Icon,
    Body,
    Left,
    Right,
    Input,
    Item,
    Form,
    Label,
    Button,
    // Text,
    // Font
} from "native-base";
import {signin} from "../firebase_integeration/databasefunctions"

const check = async() => {
  signin("20100108@lums.edu.pk","hamza1234")
}

interface State {
  email: string;
  password: string;
}

export default class LogIn extends React.Component
{

  static navigationOptions = {
      title: '  Log In', //keep log at tab space to align with the fields below,
      drawerLockMode: 'locked-closed',
    };


  render() 
  {
    
    const {navigate} = this.props.navigation;
    return (
    <Container style={styles.container}>
        

        <Content padder>
          <Form>

            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>

            <Item fixedLabel last>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>

            <Button block style={{ margin: 15, marginTop: 50}} onPress={()=>{this.props.navigation.navigate("App")}}>
            {/* <Button block style={{ margin: 15, marginTop: 50}} onPress={()=>{check()}}> */}
              <Text>Sign In</Text>
            </Button>
          

          </Form>

            
          <TouchableOpacity>
            <Text style={{textAlignVertical: "center",textAlign: "center"}}> Dont have an account </Text>
          </TouchableOpacity>

          <TouchableOpacity >
            <Text style={{textAlignVertical: "center",textAlign: "center"}}> Forget Password </Text>
          </TouchableOpacity>

        </Content>

    </Container>
    
    );
  }
}


const styles = StyleSheet.create
({
  container: 
  {
    backgroundColor: "#FFF"
  },
  text_below: {
    // textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 10,
    width: 150,
    // backgroundColor: 'green',
  }
});
