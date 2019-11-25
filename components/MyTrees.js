import React from 'react';
import { TouchableOpacity,ImageBackground,ScrollView,StyleSheet, Button,  View, SafeAreaView, Text, Alert, Image,TouchableWithoutFeedback, TouchableHighlight, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class PlantDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Search Code
      // Fetch This array from DB
      mytreelist : [
      {
        name: 'Go Man',
        lastwatered : "22-11-2019",
        // spname : 'Mangifera indica',
        spname : 'Mango Tree',
        img : 'https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/A4/97/14c09c41-9c8d-49a1-a94e-65282729d808.jpeg.webp'
      },
      {
        name: 'Dem Apples',
        lastwatered : "22-11-2019",
        // spname : 'Malus domestica',
        spname : 'Apple Tree',
        img : 'https://cdn.thetreecenter.com/c/uploads/pink-lady-apple-1.jpg'
      },
      {
        name: 'Kelay ka poda',
        lastwatered : "22-11-2019",
        // spname : 'Musa basjoo',
        spname : 'Banana Tree',
        img : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjrj4jzu_7lAhUKyqQKHbU6C-UQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_99274110_banana-was-leaving-the-tip-of-a-banana-tree-typically-one-banana-a-banana-tree-leaves-only-once-.html&psig=AOvVaw2J5jHKcvb_ORsbbwU44oab&ust=1574534405194525'
      },  
      {
        name: 'White Long Tree',
        lastwatered : "22-11-2019",
        // spname : 'Eucalyptus globulus',
        spname : 'Eucalyptus',
        img : 'https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2009/06/eucalyptus-400x533.jpg'
      },  
      {
        name: 'Cactoo',
        lastwatered : "20-11-2019",
        // spname : 'Cactaceae',
        spname : 'Cactus',
        img : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjB1-ukvP7lAhWjsKQKHeuHCEkQjRx6BAgBEAQ&url=https%3A%2F%2Fthesucculentsource.com%2Fproducts%2Fsun-goddess-trichocereus-cactus&psig=AOvVaw1UaBKkWvQvufPXZlC-1AQt&ust=1574534512334411'
      },    
      ],
    }
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
        title:"My Trees",
        headerTintColor:"#eedede",
      });
    render() {
      const {navigate} = this.props.navigation;
      return (
          
          <View style={{ flex:1,width:"100%", height:"100%",marginTop:0, backgroundColor:"#eedede"}}>
            <ScrollView persistentScrollbar = {true} style = {{flex: 1, width: '99%', height: '55%', alignSelf: 'center',marginTop: 15}}>
              {
                this.state.mytreelist.map((item,index) => {
                  return(
                  <TouchableOpacity underlayColor="#439889" key = {index} onPress={(e) =>{this.props.navigation.navigate("Animation", {path: "MyTrees", name: item.name, spname: item.spname, lastwatered: item.lastwatered, datePlanted: '22-11-2019'})}} 
                                    style={{elevation:5, alignSelf: 'center',width: "100%", backgroundColor:"#00695c",flex:1, flexDirection:'row',opacity:75,paddingTop:5, paddingBottom:5, paddingLeft:5, borderRadius: 35, marginBottom: 5}}
                  >
                    <Image source = {{uri:item.img}} style={{borderColor:"#eedede",borderRadius:70 ,width: 70, height: 70, overflow: "hidden", borderWidth: 1}}/>
                    <View style={{flex:1, flexDirection:'column', paddingTop:5}}>
                      <Text style={{color:"#eedede",height:"37%",fontSize:19,textAlignVertical: "center",marginLeft:15, }}>{item.name}</Text>
                      <Text style={{color:"#eedede",height:"30%",fontSize:15,textAlignVertical: "center",marginLeft:15}}>{item.spname}</Text>
                      <View style={{height:"12%", backgroundColor: "transparent"}}></View>
                      <Text style={{color:"#eedede",height:"25%",fontSize:12,textAlignVertical: "center",marginLeft:15, }}>Last Watered: {item.lastwatered}</Text>
                    </View>
                  </TouchableOpacity>
                  )
                })
              }

            {/*Duplicate to check scrollview*/}
              {
                this.state.mytreelist.map((item,index) => {
                  return(
                  <TouchableOpacity underlayColor="#439889" key = {index} onPress={(e) =>{this.props.navigation.navigate("Animation", {path: "MyTrees", name: item.name, spname: item.spname, lastwatered: item.lastwatered})}} 
                                    style={{elevation:5,alignSelf: 'center',width: "100%", backgroundColor:"#00695c",flex:1, flexDirection:'row',opacity:75,paddingTop:5, paddingBottom:5, paddingLeft:5, borderRadius: 35, marginBottom: 5}}
                  >
                    <Image source = {{uri:item.img}} style={{borderColor:"#eedede",borderRadius:70 ,width: 70, height: 70, overflow: "hidden", borderWidth: 1}}/>
                    <View style={{flex:1, flexDirection:'column', paddingTop:5}}>
                      <Text style={{color:"#eedede",height:"37%",fontSize:19,textAlignVertical: "center",marginLeft:15, }}>{item.name}</Text>
                      <Text style={{color:"#eedede",height:"30%",fontSize:15,textAlignVertical: "center",marginLeft:15}}>{item.spname}</Text>
                      <View style={{height:"12%", backgroundColor: "transparent"}}></View>
                      <Text style={{color:"#eedede",height:"25%",fontSize:12,textAlignVertical: "center",marginLeft:15, }}>Last Watered: {item.lastwatered}</Text>
                    </View>
                  </TouchableOpacity>
                  )
                })
              }
              
            </ScrollView>
          </View>
      );
    }
}