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
          lastwatered : "Nov 22 2019",
          spname : 'Mangifera indica',
          img : 'https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/A4/97/14c09c41-9c8d-49a1-a94e-65282729d808.jpeg.webp'
        },
        {
          name: 'Dem Apples',
          lastwatered : "Nov 22 2019",
          spname : 'Malus domestica',
          img : 'https://cdn.thetreecenter.com/c/uploads/pink-lady-apple-1.jpg'
        },
        {
          name: 'Kelay ka poda',
          lastwatered : "Nov 22 2019",
          spname : 'Musa basjoo',
          img : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjrj4jzu_7lAhUKyqQKHbU6C-UQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_99274110_banana-was-leaving-the-tip-of-a-banana-tree-typically-one-banana-a-banana-tree-leaves-only-once-.html&psig=AOvVaw2J5jHKcvb_ORsbbwU44oab&ust=1574534405194525'
        },  
        {
          name: 'White Long Tree',
          lastwatered : "Nov 22 2019",
          spname : 'Eucalyptus globulus',
          img : 'https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2009/06/eucalyptus-400x533.jpg'
        },  
        {
          name: 'Cactoo',
          lastwatered : "Nov 22 2019",
          spname : 'Cactaceae',
          img : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjB1-ukvP7lAhWjsKQKHeuHCEkQjRx6BAgBEAQ&url=https%3A%2F%2Fthesucculentsource.com%2Fproducts%2Fsun-goddess-trichocereus-cactus&psig=AOvVaw1UaBKkWvQvufPXZlC-1AQt&ust=1574534512334411'
        },    
        ],
        st : ''
      }
    }  
    
    static navigationOptions = ({navigation}) => ({
          headerLeft: (
            <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
              <Icon name="md-arrow-round-back"  style={{ marginTop: 10, marginLeft: 10}} size={32} color="#FFFFFF" />
            </TouchableWithoutFeedback>
          ),
          headerStyle: {
              backgroundColor: '#00695c',
          },
          title:"Water your trees",
          headerTintColor:"white",
        });
      render() {
        const {navigate} = this.props.navigation;
        return (
          <View style={{ flex:1,width:"100%", height:"100%",marginTop:0, backgroundColor:"#eedede"}}>
            <ScrollView persistentScrollbar = {true} style = {{flex: 1, width: '97%', height: '55%', alignSelf: 'center',marginTop: 15}}>
              {
                this.state.mytreelist.map((item,index) => {
                  return(
                  <TouchableOpacity underlayColor="#439889" key = {index} onPress={(e) =>{this.props.navigation.navigate("Animation", {path: "MyTrees", name: item.name, spname: item.spname, lastwatered: item.lastwatered})}} 
                                    style={{alignSelf: 'center',width: "100%", backgroundColor:"#00695c",flex:1, flexDirection:'row',opacity:75,paddingTop:5, paddingBottom:5, paddingLeft:5, borderRadius: 70, marginBottom: 15}}
                  >
                    <Image source = {{uri:item.img}} style={{borderColor:"#eedede",borderRadius:70 ,width: 70, height: 70, overflow: "hidden", borderWidth: 1}}/>
                    <View style={{flex:5, flexDirection:'column', paddingTop:5}}>
                      <Text style={{color:"#eedede",height:"37%",fontSize:19,textAlignVertical: "center",marginLeft:15}}>{item.name}</Text>
                      <Text style={{color:"#eedede",height:"30%",fontSize:15,textAlignVertical: "center",marginLeft:15}}>{item.spname}</Text>
                      <View style={{height:"12%", backgroundColor: "transparent"}}></View>
                      <Text style={{color:"#eedede",height:"25%",fontSize:12,textAlignVertical: "center",marginLeft:15, }}>Last Watered: {item.lastwatered}</Text>
                    </View>
                    <View style={{flex: 3, justifyContent:"center",alignItems:"center"}}>
                          <TouchableHighlight onPress={
                            () => {
                              this.state.mytreelist[index].lastwatered = new Date().toString().substring(4,15)
                              console.log(this.state.mytreelist[index].lastwatered)
                              this.setState({st:''})
                            }
                          } style={{width:70, height:40, backgroundColor:"#e1eff7", borderRadius:2}}>
                            <Text style={{color:"#00695c",fontSize:13,textAlign:"center",marginTop:10}}>Water Now</Text>
                          </TouchableHighlight>
                        </View>
                  </TouchableOpacity>
                  )
                })
              }



              {
                this.state.mytreelist.map((item,index) => {
                  return(
                  <TouchableOpacity underlayColor="#439889" key = {index} onPress={(e) =>{this.props.navigation.navigate("Animation", {path: "MyTrees", name: item.name, spname: item.spname, lastwatered: item.lastwatered})}} 
                                    style={{alignSelf: 'center',width: "100%", backgroundColor:"#00695c",flex:1, flexDirection:'row',opacity:75,paddingTop:5, paddingBottom:5, paddingLeft:5, borderRadius: 70, marginBottom: 15}}
                  >
                    <Image source = {{uri:item.img}} style={{borderColor:"#eedede",borderRadius:70 ,width: 70, height: 70, overflow: "hidden", borderWidth: 1}}/>
                    <View style={{flex:5, flexDirection:'column', paddingTop:5}}>
                      <Text style={{color:"#eedede",height:"37%",fontSize:19,textAlignVertical: "center",marginLeft:15}}>{item.name}</Text>
                      <Text style={{color:"#eedede",height:"30%",fontSize:15,textAlignVertical: "center",marginLeft:15}}>{item.spname}</Text>
                      <View style={{height:"12%", backgroundColor: "transparent"}}></View>
                      <Text style={{color:"#eedede",height:"25%",fontSize:12,textAlignVertical: "center",marginLeft:15, }}>Last Watered: {item.lastwatered}</Text>
                    </View>
                    <View style={{flex: 3, justifyContent:"center",alignItems:"center"}}>
                          <TouchableHighlight onPress={
                            () => {
                              this.state.mytreelist[index].lastwatered = new Date().toString().substring(4,15)
                              console.log(this.state.mytreelist[index].lastwatered)
                              this.setState({st:''})
                            }
                          } style={{width:70, height:40, backgroundColor:"#e1eff7", borderRadius:2}}>
                            <Text style={{color:"#00695c",fontSize:13,textAlign:"center",marginTop:10}}>Water Now</Text>
                          </TouchableHighlight>
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
          // <ImageBackground source={require('../backdrop1jpg.jpg')} style={{width: '100%', height: '100%'}}>
          //   <View style={{flexGrow:1,width:"100%", height:"100%",marginTop:0, backgroundColor:"transparent"}}>
          //       <ScrollView>
          //         {
          //           this.state.mytreelist.map((item,index) => {
          //             return(
          //             <View style={{backgroundColor:"#b0bec5",borderColor:"#00695c",flex:1, flexDirection:'row',opacity:5,borderRadius:5,borderWidth:1,paddingTop:5, paddingBottom:5, paddingLeft:5}}>
          //               <Image source = {{uri:item.img}} style={{borderColor:"#00695c" ,width: 80, height: 80, overflow: "hidden", borderWidth: 3}}/>
          //               <View style={{flex:1, flexDirection:'column', paddingTop:5, width:100}}>
          //               <Text style={{color:"#00695c",height:"40%",fontSize:16,textAlignVertical: "center",marginLeft:15}}>Nickname: {item.name}</Text>
          //               <Text style={{color:"black",height:"30%",fontSize:12,textAlignVertical: "center",marginLeft:15}}>Last Watered: {item.lastwatered}</Text>
          //               </View>
          //               <View style={{justifyContent:"center",alignItems:"center"}}>
          //                 <TouchableHighlight onPress={
          //                   () => {
          //                     this.state.mytreelist[index].lastwatered = new Date().toString().substring(4,15)
          //                     console.log(this.state.mytreelist[index].lastwatered)
          //                     this.setState({st:''})
          //                   }
          //                 } style={{width:100, height:40, backgroundColor:"#00695c",marginRight:10, borderRadius:2}}>
          //                   <Text style={{color:"white",fontSize:14,textAlign:"center",marginTop:10}}>Water Now</Text>
          //                 </TouchableHighlight>
          //               </View>
          //             </View>
          //             )
          //           })
          //         }
                
          //       </ScrollView>
          //   </View>
          // </ImageBackground>