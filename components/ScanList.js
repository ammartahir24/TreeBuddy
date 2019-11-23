import React from 'react';
import { TouchableOpacity,ImageBackground,ScrollView,StyleSheet, Button,  View, SafeAreaView, Text, Alert, Image,TouchableWithoutFeedback, TouchableHighlight, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class HomeScreen extends React.Component {
    constructor(props) {
      super(props);
        
      this.state = {
          scanlist : [
              {
                  name:"Suleman",
                  img: "https://lums.edu.pk/sites/default/files/styles/200x240/public/faculty_images/00004407.jpg?itok=LygTQVbF"
              },
              {
                name:"Suleman Shahid",
                img: "http://www.thewebandbeyond.nl/2010/website/wp-content/uploads/2010/04/sulemanshahid.jpg"
              },
              {
                name:"Suleman Shahid LUMS",
                img: "http://datajlab.nl/wp-content/uploads/2013/10/Screen-Shot-2013-10-08-at-16.39.39-.png"
              },
              {
                name:"Suleman Shahid HCI",
                img:"https://pbs.twimg.com/profile_images/1039950305578889216/36MjcihH_400x400.jpg"
              },
              {
                name:"Dr Suleman Shahid",
                img: "https://ignite.org.pk/wp-content/uploads/2019/07/design.jpg"
              },
              {
                name:"Dr Suleman Shahid LUMS",
                img: "https://i.ytimg.com/vi/UQ6v5uilx1E/hqdefault.jpg"
              },
              {
                name:"Suleman Shahid Netherlands",
                img:"https://pbs.twimg.com/profile_images/1039950305578889216/36MjcihH_400x400.jpg"
              },
              {
                name:"Dr Suleman Shahid Dutch",
                img: "https://ignite.org.pk/wp-content/uploads/2019/07/design.jpg"
              },
          ],
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
        title:"People who scanned your plants",
        headerTintColor:"white",
    });
    render() {
        const {navigate} = this.props.navigation;
        return (
          <ImageBackground source={require('../backdrop1jpg.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{flexGrow:1,width:"100%", height:"100%",marginTop:0, backgroundColor:"transparent"}}>
                <ScrollView>
                  {
                    this.state.scanlist.map((item,index) => {
                      return(
                      <View style={{backgroundColor:"white",borderColor:"#00695c",flex:1, flexDirection:'row',opacity:5,borderRadius:5,borderWidth:1,paddingTop:5, paddingBottom:5, paddingLeft:5}}>
                        <Image source = {{uri:item.img}} style={{borderRadius:150/4,borderColor:"#00695c" ,width: 80, height: 80, overflow: "hidden", borderWidth: 3}}/>
                          <Text style={{color:"#00695c",fontSize:20,textAlignVertical: "center",marginLeft:15}}>{item.name}</Text>
                      </View>
                      )
                    })
                  }
                
                </ScrollView>
            </View>
          </ImageBackground>
        );
      }
  
}  