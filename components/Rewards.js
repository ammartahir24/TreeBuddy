import React from 'react';
import { StyleSheet, Button,  View, SafeAreaView, Text, Alert, Image, ImageBackground,TouchableWithoutFeedback, TouchableHighlight, TextInput, ScrollView} from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
// import { TabNavigator } from "react-navigation";

// let img = 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg'

export default class Rewards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 201,
      rewards: {
        plant1:1,
        plant5:1,
        plant10:1,

        water1: 1,
        water5: 1,
        water10: 1,

        scan1: 6,
        scan5: 6,
        scan10: 6,
      }
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

  LocateSpecie = (e) =>{
    e.preventDefault();
    console.log("redirect2")
    this.props.navigation.navigate('Explore', {ID: this.state.SP_ID})
  }

  static navigationOptions = ({navigation}) => ({
    headerLeft: (
      <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
        <Icon name="md-arrow-round-back"  style={{ marginTop: 10, marginLeft: 10}} size={32} color="#eedede" />
      </TouchableWithoutFeedback>
    ),
    headerStyle: {
        backgroundColor: '#00695c',
    },
    title:"Rewards",
    headerTintColor:"#eedede",
  });


  render() {
    const {navigate} = this.props;
    return (
      <ImageBackground style = {{backgroundColor: '#e7f0eb',height: '100%', width: '100%'}}
            source = {require('../bgpink1.jpg')}
      >
          <Avatar.Image  theme={{colors: {primary: 'green'}}}  style = {{alignSelf: 'center',marginTop: 10}} size={150} source={require('../trophy_new.jpg')} />
          <Text style = {{alignSelf: 'center', color: '#00695c', fontSize: 25}} >{this.state.rating} Points</Text>

          <ScrollView style = {{width: '90%', height: '95%', alignSelf: 'center', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
            

            <View style={{width: '100%', alignSelf: 'center', height: 70, textVerticalAlign: 'center', backgroundColor: '#00695c', borderRadius: 30, marginTop: 10, }}>              
              <View style= {{height:'100%',width:'95%',flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}> 
                <Avatar.Image  theme={{colors: {primary: 'green'}}}  style = {{alignSelf: 'center',marginLeft: 10}} size={35} source={require('../trophy_new.jpg')} />
                <Text style={{fontSize:20, color: "#eedede",  fontWeight: "bold",marginRight:100}}>Plant 1 Tree</Text>
                {this.state.rewards.water1<1? 
                  <Text style={{fontSize:20, alignSelf: 'center', marginRight:10, color: "orange", fontWeight: "bold"}}>{this.state.rewards.water1}/1</Text>
                  :
                  <Icon name = "md-checkmark" size = {30} style={{ alignSelf: 'center', marginRight:10, color: "lightgreen"}}/>
                }
              </View>
            </View>

            <View style={{width: '100%', alignSelf: 'center', height: 70, textVerticalAlign: 'center', backgroundColor: '#00695c', borderRadius: 30, marginTop: 10, }}>              
              <View style= {{height:'100%',width:'95%',flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}> 
                <Avatar.Image  theme={{colors: {primary: 'green'}}}  style = {{alignSelf: 'center',marginLeft: 10}} size={35} source={require('../trophy_new.jpg')} />
                <Text style={{fontSize:20, color: "#eedede",  fontWeight: "bold",marginRight:80}}>Plant 5 Trees</Text>
                {this.state.rewards.plant5<5? 
                  <Text style={{fontSize:20, alignSelf: 'center', marginRight:10, color: "orange", fontWeight: "bold"}}>{this.state.rewards.plant5}/5</Text>
                  :
                  <Icon name = "md-checkmark" size = {30} style={{ alignSelf: 'center', marginRight:10, color: "lightgreen"}}/>
                }
              </View>
            </View>


            <View style={{width: '100%', alignSelf: 'center', height: 70, textVerticalAlign: 'center', backgroundColor: '#00695c', borderRadius: 30, marginTop: 10, }}>              
              <View style= {{height:'100%',width:'95%',flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}> 
                <Avatar.Image  theme={{colors: {primary: 'green'}}}  style = {{alignSelf: 'center',marginLeft: 10}} size={35} source={require('../trophy_new.jpg')} />
                <Text style={{fontSize:20, color: "#eedede",  fontWeight: "bold",marginRight:60}}>Plant 10 Trees</Text>
                {this.state.rewards.plant10<10? 
                  <Text style={{fontSize:20, alignSelf: 'center', marginRight:10, color: "orange", fontWeight: "bold"}}>{this.state.rewards.plant10}/10</Text>
                  :
                  <Icon name = "md-checkmark" size = {30} style={{ alignSelf: 'center', marginRight:10, color: "lightgreen"}}/>
                }
              </View>
            </View>





            <View style={{width: '100%', alignSelf: 'center', height: 70, textVerticalAlign: 'center', backgroundColor: '#00695c', borderRadius: 30, marginTop: 10, }}>              
              <View style= {{height:'100%',width:'95%',flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}> 
                <Avatar.Image  theme={{colors: {primary: 'green'}}}  style = {{alignSelf: 'center',marginLeft: 10}} size={35} source={require('../trophy_new.jpg')} />
                <Text style={{fontSize:20, color: "#eedede",  fontWeight: "bold",marginRight:95}}>Water 1 Tree</Text>
                {this.state.rewards.water1<1? 
                  <Text style={{fontSize:20, alignSelf: 'center', marginRight:10, color: "orange", fontWeight: "bold"}}>{this.state.rewards.water1}/1</Text>
                  :
                  <Icon name = "md-checkmark" size = {30} style={{ alignSelf: 'center', marginRight:10, color: "lightgreen"}}/>
                }
              </View>
            </View>

            <View style={{width: '100%', alignSelf: 'center', height: 70, textVerticalAlign: 'center', backgroundColor: '#00695c', borderRadius: 30, marginTop: 10, }}>              
              <View style= {{height:'100%',width:'95%',flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}> 
                <Avatar.Image  theme={{colors: {primary: 'green'}}}  style = {{alignSelf: 'center',marginLeft: 10}} size={35} source={require('../trophy_new.jpg')} />
                <Text style={{fontSize:20, color: "#eedede",  fontWeight: "bold",marginRight:75}}>Water 5 Trees</Text>
                {this.state.rewards.water5<5? 
                  <Text style={{fontSize:20, alignSelf: 'center', marginRight:10, color: "orange", fontWeight: "bold"}}>{this.state.rewards.water5}/5</Text>
                  :
                  <Icon name = "md-checkmark" size = {30} style={{ alignSelf: 'center', marginRight:10, color: "lightgreen"}}/>
                }
              </View>
            </View>


            <View style={{width: '100%', alignSelf: 'center', height: 70, textVerticalAlign: 'center', backgroundColor: '#00695c', borderRadius: 30, marginTop: 10, }}>              
              <View style= {{height:'100%',width:'95%',flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}> 
                <Avatar.Image  theme={{colors: {primary: 'green'}}}  style = {{alignSelf: 'center',marginLeft: 10}} size={35} source={require('../trophy_new.jpg')} />
                <Text style={{fontSize:20, color: "#eedede",  fontWeight: "bold",marginRight:50}}>Water 10 Trees</Text>
                {this.state.rewards.water10<10? 
                  <Text style={{fontSize:20, alignSelf: 'center', marginRight:10, color: "orange", fontWeight: "bold"}}>{this.state.rewards.water10}/10</Text>
                  :
                  <Icon name = "md-checkmark" size = {30} style={{ alignSelf: 'center', marginRight:10, color: "lightgreen"}}/>
                }
              </View>
            </View>


            <View style={{width: '100%', alignSelf: 'center', height: 70, textVerticalAlign: 'center', backgroundColor: '#00695c', borderRadius: 30, marginTop: 10, }}>              
              <View style= {{height:'100%',width:'95%',flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}> 
                <Avatar.Image  theme={{colors: {primary: 'green'}}}  style = {{alignSelf: 'center',marginLeft: 10}} size={35} source={require('../trophy_new.jpg')} />
                <Text style={{fontSize:20, color: "#eedede",  fontWeight: "bold",marginRight:90}}>Scan 1 Tree</Text>
                {this.state.rewards.scan1<1? 
                  <Text style={{fontSize:20, alignSelf: 'center', marginRight:10, color: "orange", fontWeight: "bold"}}>{this.state.rewards.scan1}/1</Text>
                  :
                  <Icon name = "md-checkmark" size = {30} style={{ alignSelf: 'center', marginRight:10, color: "lightgreen"}}/>
                }
              </View>
            </View>

            <View style={{width: '100%', alignSelf: 'center', height: 70, textVerticalAlign: 'center', backgroundColor: '#00695c', borderRadius: 30, marginTop: 10, }}>              
              <View style= {{height:'100%',width:'95%',flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}> 
                <Avatar.Image  theme={{colors: {primary: 'green'}}}  style = {{alignSelf: 'center',marginLeft: 10}} size={35} source={require('../trophy_new.jpg')} />
                <Text style={{fontSize:20, color: "#eedede",  fontWeight: "bold",marginRight:80}}>Scan 5 Trees</Text>
                {this.state.rewards.scan5<5? 
                  <Text style={{fontSize:20, alignSelf: 'center', marginRight:10, color: "orange", fontWeight: "bold"}}>{this.state.rewards.scan5}/5</Text>
                  :
                  <Icon name = "md-checkmark" size = {30} style={{ alignSelf: 'center', marginRight:10, color: "lightgreen"}}/>
                }
              </View>
            </View>


            <View style={{width: '100%', alignSelf: 'center', height: 70, textVerticalAlign: 'center', backgroundColor: '#00695c', borderRadius: 30, marginTop: 10, }}>              
              <View style= {{height:'100%',width:'95%',flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}> 
                <Avatar.Image  theme={{colors: {primary: 'green'}}}  style = {{alignSelf: 'center',marginLeft: 10}} size={35} source={require('../trophy_new.jpg')} />
                <Text style={{fontSize:20, color: "#eedede",  fontWeight: "bold",marginRight:50}}>Scan 10 Trees</Text>
                {this.state.rewards.scan10<10? 
                  <Text style={{fontSize:20, alignSelf: 'center', marginRight:10, color: "orange", fontWeight: "bold"}}>{this.state.rewards.scan10}/10</Text>
                  :
                  <Icon name = "md-checkmark" size = {30} style={{ alignSelf: 'center', marginRight:10, color: "lightgreen"}}/>
                }
              </View>
            </View>
           
          </ScrollView>
          <View style = {{width: "100%", height: "5%"}}/>
      </ImageBackground>
        
        
    );
  }
}
const styles = StyleSheet.create({
})