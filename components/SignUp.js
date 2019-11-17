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

interface State {
  email: string;
  password: string;
  username: string;
  age: string
}

export default class SignUp extends React.Component <{}, State>
{


  static navigationOptions = {
      title: '  New Account', //keep log at tab space to align with the fields below
      
    };


  render() 
  {
    
    const {navigate} = this.props.navigation;
    return (
    <Container style={styles.container}>
        

        <Content padder>
          <Form>

            <Item>
              <Label>Username</Label>
              <Input placeholder="Muhammad Hassan"/>
            </Item>

            <Item>
              <Label>Email</Label>
              <Input placeholder="JBund007@gmail.com" />
            </Item>
            <Item>
              <Label>Age</Label>
              <Input placeholder="22" />
            </Item>

            <Item last>
              <Label>Password</Label>
              <Input secureTextEntry placeholder="****" />
            </Item>

            <Button block style={{ margin: 15, marginTop: 50}}>
              <Text>Create Account</Text>
            </Button>
          

          </Form>
            

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
  }
});
