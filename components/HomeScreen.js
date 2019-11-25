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
import { RNCamera } from 'react-native-camera';
import {NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Slideshow from 'react-native-image-slider-show';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { Drawer } from 'react-native-paper';


const GetPlantDetails = [
  {"Date_Planted":"22-03-19", "Image": "https://c-6rtwjumjzx7877x24nrlncx2ewfspjwx2ehtr.g00.ranker.com/g00/3_c-6bbb.wfspjw.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fnrlnc.wfspjw.htrx2fzx78jw_stij_nrlx2f05558x2f6555599785x2ftwnlnsfqx2fymj-gfsfsf-ywjj-nx78-sty-f-ywjj-kttix78-umtyt-z7x3fbx3d105x26vx3d05x26krx3duoulx26knyx3dhwtux26hwtux3dkfhjx78x26n65h.rfwpx3dnrflj_$/$/$/$/$/$", "Location":  {"latitude": 31.469847, "longitude": 74.409374,}, "Name": "Banana Boy", "Plant_ID": 389, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Musa Basjoo", "Specie_ID": 2, "Specie_Name": "Banana Tree", "Watered":"Nov 25 2019"},        
  {"Date_Planted":"03-12-18", "Image": "https://cdn.pixabay.com/photo/2017/10/20/17/18/babul-2872022_960_720.jpg",       "Location":  {"latitude": 31.470734, "longitude": 74.408703,}, "Name": "Kiker K Darakhat", "Plant_ID": 3985, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Acacia Nilotica", "Specie_ID": 5, "Specie_Name": "Kiker", "Watered":"Nov 25 2019",},
  {"Date_Planted":"20-02-10", "Image": "http://i.dawn.com/2012/08/6-gul-e-nishter-trees-qamar-mehdi-670.jpg",            "Location":  {"latitude": 31.471036, "longitude": 74.408698,}, "Name": "Sumbal Darakhat 2", "Plant_ID": 9357, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Bombax Ceiba", "Specie_ID": 6, "Specie_Name": "Sumbal", "Watered":"Nov 25 2019",},
  {"Date_Planted":"12-02-15", "Image": "http://i.dawn.com/2012/08/7-sukh-chane-trees-qamar-mehdi-670.jpg",               "Location":  {"latitude": 31.471557, "longitude": 74.409615,}, "Name": "Sucky Sucky", "Plant_ID": 6046, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Pongamia Pinata", "Specie_ID": 7, "Specie_Name": "Sukh Chain", "Watered":"Nov 25 2019",},
  {"Date_Planted":"05-07-13", "Image": "http://i.dawn.com/2012/08/4-sumbul-trees-qamar-mehdi-450.jpg",                   "Location":  {"latitude": 31.470734, "longitude": 74.408703,}, "Name": "Sumbal Tree", "Plant_ID": 7384, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Bombax Ceiba", "Specie_ID": 6, "Specie_Name": "Sumbal", "Watered":"Nov 25 2019",},
  {"Date_Planted":"06-08-17", "Image": "https://d6p0gevo8s9lm.cloudfront.net/media/catalog/product/cache/1/image/353x353/9df78eab33525d08d6e5fb8d27136e95/m/u/musa-basjoo750x750.jpg",   "Location":  {"latitude": 31.469861, "longitude": 74.409519,}, "Name": "Banana Man", "Plant_ID": 5369, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Musa Basjoo", "Specie_ID": 2, "Specie_Name": "Banana Tree", "Watered":"Nov 25 2019",},
  {"Date_Planted":"11-03-03", "Image": "https://live.staticflickr.com/2524/3954496959_e7fb57a43f_b.jpg",                                                                                 "Location":  {"latitude": 31.47024, "longitude": 74.409213,}, "Name": "Thorny Kiker", "Plant_ID": 292, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Acacia Nilotica", "Specie_ID": 5, "Specie_Name": "Kiker", "Watered":"Nov 25 2019"},
  {"Date_Planted":"14-02-16", "Image": "https://media.npr.org/assets/img/2012/10/05/apple-tree-056fb57ed927bf3668ef04e5b9850e99363b87fe-s1100-c15.jpg",                                  "Location":  {"latitude": 31.469349, "longitude": 74.409841,}, "Name": "Asaaib", "Plant_ID": 797, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Malus Domestica", "Specie_ID": 1, "Specie_Name": "Apple Tree", "Watered":"Nov 25 2019",},
  {"Date_Planted":"21-11-09", "Image": "https://i.pinimg.com/originals/5f/fc/c1/5ffcc15874a99035e053bbc5ff8148f5.jpg",   "Location":  {"latitude": 31.469139, "longitude": 74.409465,}, "Name": "Aam Khao", "Plant_ID": 452, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Mangifera indica", "Specie_ID": 4, "Specie_Name": "Mango", "Watered":"Nov 25 2019",},
  {"Date_Planted":"19-01-07", "Image": "https://cdn.britannica.com/68/128168-004-BB84F2D2/Eucalyptus-tree.jpg",          "Location":  {"latitude": 31.470057, "longitude": 74.409336,}, "Name": "Angraiz", "Plant_ID": 9079, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Eucalytpus Globulus", "Specie_ID": 3, "Specie_Name": "Eucalytpus", "Watered":"Nov 25 2019",},
  {"Date_Planted":"13-04-04", "Image": "https://images-na.ssl-images-amazon.com/images/I/71aGedkWLDL.jpg",               "Location":  {"latitude": 31.469486, "longitude": 74.409803,}, "Name": "Saib K Darakahat", "Plant_ID": 2816, "Planter_ID": 1, "Planter":"Hassan", "Specie_Bioname": "Malus Domestica", "Specie_ID": 1, "Specie_Name": "Apple Tree", "Watered":"Nov 25 2019",},
]


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    // this.cameraFunc = this.cameraFunc.bind(this);
    this.state = {
      // Search Code
      // Fetch This array from DB
      searchlist : [
        { "Family": 'Banana', "Image": 'https://previews.123rf.com/images/saengdao/saengdao1804/saengdao180400030/99274110-banana-was-leaving-the-tip-of-a-banana-tree-typically-one-banana-a-banana-tree-leaves-only-once-.jpg', "Kingdome": 'Plants',   "Occurences": 4,   "Order": 'Zingiberales',   "Specie_ID": 2,   "Specie_Name": 'Banana Tree',   "Specie_Bioname": 'Musa Basjoo' },
        { "Family": 'Myrtle',  "Image": 'https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2009/06/eucalyptus-400x533.jpg',   "Kingdome": 'Plants',   "Occurences": 2,   "Order": 'Mayrtales',   "Specie_ID": 3,   "Specie_Name": 'Eucalytpus',   "Specie_Bioname": 'Eucalytpus Globulus' },
        { "Family": 'Malvaceae', "Image": 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Bombax_ceiba_tree%27.jpg/330px-Bombax_ceiba_tree%27.jpg', "Kingdome": 'Plants',   "Occurences": 2,   "Order": 'Malvales',   "Specie_ID": 6,   "Specie_Name": 'Sumbal',   "Specie_Bioname": 'Bombax Ceiba' },
        { "Family": 'Combretaceae', "Image": 'https://5.imimg.com/data5/LD/MD/EM/SELLER-22662015/arjun-tree-plant-500x500.JPG',   "Kingdome": 'Plants',   "Occurences": 1,   "Order": 'Myrtales',   "Specie_ID": 9,   "Specie_Name": 'Arjun',   "Specie_Bioname": 'Terminalia Arjuna' },
        { "Family": 'Mulberry', "Image": 'https://media.gettyimages.com/photos/peepal-tree-picture-id1076653258?s=612x612',   "Kingdome": 'Plants',   "Occurences": 1,   "Order": 'Rosales',   "Specie_ID": 10,   "Specie_Name": 'Peepal',   "Specie_Bioname": 'Ficus Religiosa' },
        { "Family": 'Legumes',  "Image": 'http://i.dawn.com/2012/08/1-kiker-trees-qamar-mehdi-670.jpg',   "Kingdome": 'Plants',   "Occurences": 5,   "Order": 'Fabales',   "Specie_ID": 5,   "Specie_Name": 'Kiker',   "Specie_Bioname": 'Acacia Nilotica' },
        { "Family": 'Mahogany',  "Image": 'https://cdn.shopify.com/s/files/1/1908/8561/products/Neem_trees1_cropped_grande.png?v=1498132161',   "Kingdome": 'Plants',   "Occurences": 19,   "Order": 'Sapindales',   "Specie_ID": 8,   "Specie_Name": 'Neem',   "Specie_Bioname": 'Azadirachta Indica' },
        { "Family": 'Fabaceae',  "Image": 'https://img.hunkercdn.com/600x/clsd/getty/4382ec3c76db4e0bac2f537fb123795f.jpg',   "Kingdome": 'Plantae',   "Occurences": 1,   "Order": 'Fabales',   "Specie_ID": 11,   "Specie_Name": 'Rosewood',   "Specie_Bioname": 'Dalbergia' },
        { "Family" : 'Anacardiaceae',  "Image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRybpZbfJjv2hrpfqsIT02V6fGxJ71LWHC6nS8ehIaax2TtHScq',   "Kingdome": 'Plantae',   "Occurences": 6,   "Order": 'Sapindales',   "Specie_ID": 4,   "Specie_Name": 'Mango',   "Specie_Bioname": 'Mangifera indica' },
        { "Family": 'Papilionaceae',   "Image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYsZ-4KN4SeAcltulvv-S4mJe84pfx808CxVA8CY9Pzj9b3N2&s',   "Kingdome": 'Plants',   "Occurences": 1,   "Order": 'Fabaceae',   "Specie_ID": 7,   "Specie_Name": 'Sukh Chain',   "Specie_Bioname": 'Pongamia Pinata' },
       {"Family": 'Rose', "Image": 'https://cdn.thetreecenter.com/c/uploads/pink-lady-apple-1.jpg',  "Kingdome": 'Plants',  "Occurences": 4,  "Order": 'Rosales',  "Specie_ID": 1,  "Specie_Name": 'Apple Tree',  "Specie_Bioname": 'Malus Domestica' }
      ],
      dataSource: [
        {
          title: GetPlantDetails[0].Name,
          caption: 'Planted on '+GetPlantDetails[0].Date_Planted,
          url: GetPlantDetails[0].Image,
        }, 
        {
          title: GetPlantDetails[1].Name,
          caption: 'Planted on '+GetPlantDetails[1].Date_Planted,
          url: GetPlantDetails[1].Image,
        }, 
        {
          title: GetPlantDetails[2].Name,
          caption: 'Planted on '+GetPlantDetails[2].Date_Planted,
          url: GetPlantDetails[2].Image,
        }, 
        {
          title: GetPlantDetails[3].Name,
          caption: 'Planted on '+GetPlantDetails[3].Date_Planted,
          url: GetPlantDetails[3].Image,
        }, 
        {
          title: GetPlantDetails[4].Name,
          caption: 'Planted on '+GetPlantDetails[4].Date_Planted,
          url: GetPlantDetails[4].Image,
        }, 
        {
          title: GetPlantDetails[5].Name,
          caption: 'Planted on '+GetPlantDetails[5].Date_Planted,
          url: GetPlantDetails[5].Image,
        }, 
        {
          title: GetPlantDetails[6].Name,
          caption: 'Planted on '+GetPlantDetails[6].Date_Planted,
          url: GetPlantDetails[6].Image,
        }, 
        {
          title: GetPlantDetails[7].Name,
          caption: 'Planted on '+GetPlantDetails[7].Date_Planted,
          url: GetPlantDetails[7].Image,
        }, 
        {
          title: GetPlantDetails[8].Name,
          caption: 'Planted on '+GetPlantDetails[8].Date_Planted,
          url: GetPlantDetails[8].Image,
        }, 
        {
          title: GetPlantDetails[9].Name,
          caption: 'Planted on '+GetPlantDetails[9].Date_Planted,
          url: GetPlantDetails[9].Image,
        }, 
        {
          title: GetPlantDetails[10].Name,
          caption: 'Planted on '+GetPlantDetails[10].Date_Planted,
          url: GetPlantDetails[10].Image,
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
    this.state.matches = this.state.searchlist.filter(match => (search.toLowerCase().includes(match.Specie_Name.toLowerCase()) || match.Specie_Name.toLowerCase().includes(search.toLowerCase())));
    this.setState({search});
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 5000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  // checkFunc = async () => {
  //   console.log("Hello")
  //   // return (null)
  //   // return(
  //   //   <RNCamera
  //   //   ref={ref => {this.camera = ref;}}style={{flex: 1,width: '100%',}}>
  //   //   </RNCamera>  
  //   // )
  // }

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    // console.log("Hello")
    return {
      headerLeft: (<TouchableOpacity onPress={() => navigation.toggleDrawer()}> 
                      <Icon name="md-menu" size={32} color="#eedede" style={{marginLeft: 20}}/>
                  </TouchableOpacity>),
      headerRight: (
        <View style={{height:40,width: Math.round(Dimensions.get('window').width)*0.85,alignSelf:'center',flex:1,flexDirection:'row'}}>

          <TextInput
          inlineImageLeft='search_icon'
          style={{color: '#eedede',fontSize:14, height: 40,width:Math.round(Dimensions.get('window').width)*0.7, borderColor: '#eedede', borderBottomWidth: 1, }}
          underlineColorAndroid="transparent"
          placeholder={" Search "}
          onChangeText={(search) => params.handleUpdateSearch(search)}
          />
          <View style={{height:40,width:Math.round(Dimensions.get('window').width)*0.15,alignItems: 'center'}}>
          <TouchableOpacity style={{justifyContent:'center',alignSelf:'center', alignItems:'center'}} onPress={() => {navigation.navigate('test')}} > 
            <Icon name='md-camera' size={32} color="#eedede" style={{marginTop:5}}/>
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
        <View source = {require('../bgpink1.jpg')} style={{width: "100%", height: "100%"}}>
          <View style={{flex: 1, flexDirection: 'column', height: '100%',width: '100%'}}>
            <View style={{height:"50%",width: '100%',bottomBorderRadius:25}}>
              <Slideshow 
                dataSource={this.state.dataSource}
                position={this.state.position}
                height={height*0.5-40}
                titleStyle={{fontSize:25, color:"white", fontWeight:"bold"}}
                captionStyle={{fontSize:14, color:"white", fontStyle:"italic"}}
                onPositionChanged={position => this.setState({ position })} 
                />     
            </View>
            <View style={{flexDirection:'row',height:'10%',width:'100%',backgroundColor:'#00695c'}}>
              <TouchableOpacity onPress={(e) => {
                this.props.navigation.navigate("MyTrees")
              }} style={{width:"70%",justifyContent:"center"}}>
                  <Text style={{fontWeight:"bold",fontSize:28, color:"#eedede", textAlignVertical: "center",marginLeft:15}}>Your trees</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(e) => {
                  this.props.navigation.navigate("MyTrees")
                }} style={{width:'15%', justifyContent:'center'}}>
                  <Icon name='md-list-box' size={32} color="#eedede" style={{marginTop:5}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={(e) => {
                  this.props.navigation.navigate("RegisterPlant")
                }} style={{width:'15%', justifyContent:'center'}}>
                  <Icon name='md-add-circle' size={32} color="#eedede" style={{marginTop:5}} />
                </TouchableOpacity>

            </View>
            <View style={{flexDirection:'row', height:'40%',width:'100%', backgroundColor: '#eedede'}}> 
              <View style={{width:'50%',height:'100%',justifyContent:"center",alignItems: 'center'}}>
                  <TouchableOpacity onPress={(e) => {
                    this.props.navigation.navigate("ScanList")
                  }} style={{justifyContent:'center',alignItems:'center', height:150,width:150,backgroundColor:'#00695c',borderRadius:10,borderWidth:2,borderColor:"#00695c",elevation:10}}>
                  <Text style={{color:"#eedede",fontSize:20, fontWeight:"bold",textAlign:"center"}}>{this.state.numScans} people scanned your trees this week</Text>
                  </TouchableOpacity>
              </View>
              <View style={{width:'50%',height:'100%',justifyContent:"center",alignItems: 'center'}}>
                  <TouchableOpacity onPress={(e) => {
                    this.props.navigation.navigate("WaterList")
                  }} style={{justifyContent:'center',alignItems:'center',height:150,width:150,backgroundColor:'#00695c',borderRadius:10,borderWidth:2,borderColor:"#00695c",elevation:10}}>
                  <Text style={{color:"#eedede",fontSize:20, fontWeight:"bold",textAlign:"center"}}>Water your plants at {this.state.waterTime} today</Text>
                  </TouchableOpacity>
              </View>
            </View>
            <View style = {[this.state.matches.length>0 && this.state.search.length>0? styles.overlay: null]}/>
          </View> 

          {/* Search code */}
          <View style={{borderRadius:10,flexGrow:1,width:"100%", height:91*numResults, position:"absolute",top:0, backgroundColor:"transparent"}}>
              <ScrollView>
                {
                  this.state.matches.map((item,index) => {
                    return(
                    <TouchableOpacity key = {index} onPress={(e)=>{
                      this.props.navigation.navigate("SpecieDetails" , {ID:item.Specie_ID})
                    }} style={{ borderColor:"#00695c",flex:1, flexDirection:'row',opacity:5,borderRadius:5,borderWidth:1,paddingTop:20, paddingBottom:20, paddingLeft:5, backgroundColor:"#eedede",}}>
                      <Image source = {{uri:item.Image}} style={{borderColor:"#00695c" ,width: 50, height: 50, borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3}}/>
                      <Text style={{color:"#00695c",fontSize:20,textAlignVertical: "center",marginLeft:15}}>{item.Specie_Name}</Text>
                    </TouchableOpacity>
                    )
                  })
                }
              
              </ScrollView>
          </View>
          {/* End Search Code */}
        </View>
        
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
    },
    overlay: {
     ...StyleSheet.absoluteFillObject,
     backgroundColor: 'rgba(0,0,0,0.5)'
   }
  })