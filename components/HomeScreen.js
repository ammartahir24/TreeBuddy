import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  MenuButton,
  ImageBackground,
  ListView,
  TextInput,
  Dimensions,
  TouchableHighlight,
  FlatList,
  ScrollView
} from 'react-native';

import {NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Slideshow from 'react-native-image-slider-show';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Search Code
      // Fetch This array from DB
      searchlist : [
      {
        name : 'Mangifera indica',
        img : 'https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/A4/97/14c09c41-9c8d-49a1-a94e-65282729d808.jpeg.webp'
      },
      {
        name : 'Malus domestica',
        img : 'https://cdn.thetreecenter.com/c/uploads/pink-lady-apple-1.jpg'
      },
      {
        name : 'Musa basjoo',
        img : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjrj4jzu_7lAhUKyqQKHbU6C-UQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_99274110_banana-was-leaving-the-tip-of-a-banana-tree-typically-one-banana-a-banana-tree-leaves-only-once-.html&psig=AOvVaw2J5jHKcvb_ORsbbwU44oab&ust=1574534405194525'
      },  
      {
        name : 'Eucalyptus globulus',
        img : 'https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2009/06/eucalyptus-400x533.jpg'
      },  
      {
        name : 'Cactaceae',
        img : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjB1-ukvP7lAhWjsKQKHeuHCEkQjRx6BAgBEAQ&url=https%3A%2F%2Fthesucculentsource.com%2Fproducts%2Fsun-goddess-trichocereus-cactus&psig=AOvVaw1UaBKkWvQvufPXZlC-1AQt&ust=1574534512334411'
      },    
      ],
      dataSource: [
        {
          title: 'Tall tree',
          caption: 'Planted on Oct 20 2016',
          url: 'https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2009/06/eucalyptus-400x533.jpg',
        }, {
          title: 'Dem Apples',
          caption: 'Planted on May 16 2016',
          url: 'https://cdn.thetreecenter.com/c/uploads/pink-lady-apple-1.jpg',
        }, {
          title: 'Mangooo',
          caption: 'Planted on Oct 05 2018',
          url: 'https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/A4/97/14c09c41-9c8d-49a1-a94e-65282729d808.jpeg.webp',
        },
      ],
      position : 1,
      interval : null,
      //Fetch these from DB
      waterTime : "2:00 PM",
      numScans : 23,
      matches : [],
      search : '',
      // End Search Code
    }
  }
  // Search Code
  componentDidMount() {
    this.props.navigation.setParams({
        handleUpdateSearch: this.updateSearch
    });
  }
  updateSearch = search => {
    this.state.matches = this.state.searchlist.filter(match => (search.toLowerCase().includes(match.name.toLowerCase()) || match.name.toLowerCase().includes(search.toLowerCase())));
    this.setState({search});
  }
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      headerLeft: (<TouchableOpacity onPress={() => navigation.toggleDrawer()}> 
                      <Icon name="md-menu" size={32} color="white" style={{marginLeft: 20}}/>
                  </TouchableOpacity>),
      headerRight: (
        <View style={{height:40,width: Math.round(Dimensions.get('window').width)*0.85,alignSelf:'center',flex:1,flexDirection:'row'}}>

          <TextInput
          inlineImageLeft='search_icon'
          style={{color: 'white',fontSize:14, height: 40,width:Math.round(Dimensions.get('window').width)*0.7, borderColor: 'black', borderBottomWidth: 1, }}
          placeholder={" Search "}
          onChangeText={(search) => params.handleUpdateSearch(search)}
          />
          <View style={{height:40,width:Math.round(Dimensions.get('window').width)*0.15,alignItems: 'center'}}>
          <TouchableOpacity style={{justifyContent:'center',alignSelf:'center', alignItems:'center'}}onPress={() => navigation.toggleDrawer()}> 
            <Icon name='md-camera' size={32} color="white" style={{marginTop:5}}/>
          </TouchableOpacity>
          </View>
      </View>),
      headerStyle: {
        backgroundColor: '#00695c',
      }, 
    }
  };
  // End Search Code

  render() {
    const {navigate} = this.props.navigation;
      const {search} = this.state;
      numResults = 0
      searchresults = []
      if (this.state.search.length > 0){
        numResults = this.state.matches.length
      }
      if (numResults>4){
        numResults = 4
      }
      return (
        <ImageBackground style={{width: '100%', height: '100%',backgroundColor:'#e4e4e4'}}>
          <View style={{flex: 1, flexDirection: 'column', height: '100%',width: '100%'}}>
            <View style={{height:"50%",width: '100%',bottomBorderRadius:25}}>
              <Slideshow 
                dataSource={this.state.dataSource}
                position={this.state.position}
                height={height*0.5-40}
                titleStyle={{fontSize:18, color:"white", fontWeight:"bold"}}
                captionStyle={{fontSize:14, color:"white", fontStyle:"italic"}}
                onPositionChanged={position => this.setState({ position })} 
                />     
            </View>
            <View style={{flexDirection:'row',height:'10%',width:'100%',backgroundColor:'#00695c'}}>
              <TouchableOpacity onPress={(e) => {
                this.props.navigation.navigate("MyTrees")
              }} style={{width:"70%",justifyContent:"center"}}>
                  <Text style={{fontWeight:"bold",fontSize:28, color:"white", textAlignVertical: "center",marginLeft:15}}>Your trees</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(e) => {
                  this.props.navigation.navigate("MyTrees")
                }} style={{width:'15%', justifyContent:'center'}}>
                  <Icon name='md-list-box' size={32} color="white" style={{marginTop:5}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={(e) => {
                  this.props.navigation.navigate("MyTrees")
                }} style={{width:'15%', justifyContent:'center'}}>
                  <Icon name='md-add-circle' size={32} color="white" style={{marginTop:5}} />
                </TouchableOpacity>

            </View>
            <View style={{flexDirection:'row', height:'40%',width:'100%'}}> 
              <View style={{width:'50%',height:'100%',justifyContent:"center",alignItems: 'center'}}>
                  <TouchableOpacity onPress={(e) => {
                    this.props.navigation.navigate("ScanList")
                  }} style={{justifyContent:'center',alignItems:'center', height:150,width:150,backgroundColor:'#00695c',borderRadius:10,borderWidth:2,borderColor:"#00695c",elevation:10}}>
                  <Text style={{color:"white",fontSize:20, fontWeight:"bold",textAlign:"center"}}>{this.state.numScans} people scanned your trees this week</Text>
                  </TouchableOpacity>
              </View>
              <View style={{width:'50%',height:'100%',justifyContent:"center",alignItems: 'center'}}>
                  <TouchableOpacity onPress={(e) => {
                    this.props.navigation.navigate("WaterList")
                  }} style={{justifyContent:'center',alignItems:'center',height:150,width:150,backgroundColor:'#00695c',borderRadius:10,borderWidth:2,borderColor:"#00695c",elevation:10}}>
                  <Text style={{color:"white",fontSize:20, fontWeight:"bold",textAlign:"center"}}>Water your plants at {this.state.waterTime} today</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View> 

          {/* Search code */}
          <View style={{borderRadius:10,flexGrow:1,width:"100%", height:100*numResults, position:"absolute",top:0, backgroundColor:"transparent"}}>
              <ScrollView>
                {
                  this.state.matches.map((item,index) => {
                    return(
                    <View style={{borderColor:"#00695c",flex:1, flexDirection:'row',opacity:5,borderRadius:5,borderWidth:1,paddingTop:20, paddingBottom:20, paddingLeft:5, backgroundColor:"white"}}>
                      <Image source = {{uri:item.img}} style={{borderColor:"#00695c" ,width: 50, height: 50, borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3}}/>
                      <Text style={{color:"#00695c",fontSize:20,textAlignVertical: "center",marginLeft:15}}>{item.name}</Text>
                    </View>
                    )
                  })
                }
              
              </ScrollView>
          </View>
          {/* End Search Code */}
        </ImageBackground>
        
      );
    }
  }

  const styles = StyleSheet.create({
    inputsContainer: {
      flex: 1
    },
    fullWidthButton: {
      marginRight: "10%",
      marginLeft: "10%",
      backgroundColor: '#00695c',
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
    },
    fullWidthButtonText: {
      textAlign: "center",
      fontSize:24,
      color: 'white',
      padding: 15
    }
  })