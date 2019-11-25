import React from 'react';
import { StyleSheet, Button,  View, SafeAreaView, Text, Alert, Image, ImageBackground,TouchableWithoutFeedback, TouchableHighlight, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from "react-navigation";
import { Divider} from 'react-native-paper';

let img = 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg'

export default class PlantDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      name: "Treevor",
      planter: "Mubeen",
      SP_ID: null,
      SP_name: "Rosewood",
      SP_Bioname: "Dalbergia ",
      planted: "15/11/2014",
      watered: "17/11/2019",
      images: [],
    
      lookup : {
          5326:  
              {"Date_Planted":"22-02-18", "Image": "http://www.bothranursery.com/wp-content/uploads/2015/12/8.jpg",                "Location":  {"latitude": 31.472219, "longitude": 74.410782,}, "Name": "Neembaaz ", "Plant_ID": 5326, "Planter_ID": 2,"Planter":"Hamza", "Specie_Bioname": "Azadirachta", "Specie_ID": 8, "Specie_Name": "Neem", "Watered":"22-11-19",},
          389:
              {"Date_Planted":"22-03-19", "Image": "https://c-6rtwjumjzx7877x24nrlncx2ewfspjwx2ehtr.g00.ranker.com/g00/3_c-6bbb.wfspjw.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fnrlnc.wfspjw.htrx2fzx78jw_stij_nrlx2f05558x2f6555599785x2ftwnlnsfqx2fymj-gfsfsf-ywjj-nx78-sty-f-ywjj-kttix78-umtyt-z7x3fbx3d105x26vx3d05x26krx3duoulx26knyx3dhwtux26hwtux3dkfhjx78x26n65h.rfwpx3dnrflj_$/$/$/$/$/$", "Location":  {"latitude": 31.469847, "longitude": 74.409374,}, "Name": "Banana Boy", "Plant_ID": 389, "Planter_ID": 1,"Planter":"Hassan", "Specie_Bioname": "Musa Basjoo", "Specie_ID": 2, "Specie_Name": "Banana Tree", "Watered":"22-11-19"},        
          5756:
              {"Date_Planted":"02-05-18", "Image": "https://i.pinimg.com/originals/83/00/bc/8300bc51e01e77b7f526ec96540d8d66.jpg", "Location":  {"latitude": 31.471507, "longitude": 74.409701,}, "Name": "Neem Darakhat", "Plant_ID": 5756, "Planter_ID": 2,"Planter":"Hamza", "Specie_Bioname": "Azadirachta", "Specie_ID": 8, "Specie_Name": "Neem", "Watered":"22-11-19",},
          3985:
            {"Date_Planted":"03-12-18", "Image": "https://cdn.pixabay.com/photo/2017/10/20/17/18/babul-2872022_960_720.jpg",       "Location":  {"latitude": 31.470734, "longitude": 74.408703,}, "Name": "Kiker K Darakhat", "Plant_ID": 3985, "Planter_ID": 1,"Planter":"Hassan", "Specie_Bioname": "A Nilotica", "Specie_ID": 5, "Specie_Name": "Kiker", "Watered":"22-11-19",},
          9357:
            {"Date_Planted":"20-02-10", "Image": "http://i.dawn.com/2012/08/6-gul-e-nishter-trees-qamar-mehdi-670.jpg",            "Location":  {"latitude": 31.471036, "longitude": 74.408698,}, "Name": "Sumbal Darakhat 2", "Plant_ID": 9357, "Planter_ID": 1,"Planter":"Hassan", "Specie_Bioname": "Bombax C", "Specie_ID": 6, "Specie_Name": "Sumbal", "Watered":"22-11-19",},
          6046:
            {"Date_Planted":"12-02-15", "Image": "http://i.dawn.com/2012/08/7-sukh-chane-trees-qamar-mehdi-670.jpg",               "Location":  {"latitude": 31.471557, "longitude": 74.409615,}, "Name": "Sucky Sucky", "Plant_ID": 6046, "Planter_ID": 1,"Planter":"Hassan", "Specie_Bioname": "Pongamia", "Specie_ID": 7, "Specie_Name": "Sukh Chain", "Watered":"22-11-19",},
          7384:
            {"Date_Planted":"05-07-13", "Image": "http://i.dawn.com/2012/08/4-sumbul-trees-qamar-mehdi-450.jpg",                   "Location":  {"latitude": 31.470734, "longitude": 74.408703,}, "Name": "Sumbal Tree", "Plant_ID": 7384, "Planter_ID": 1,"Planter":"Hassan", "Specie_Bioname": "Bombax C", "Specie_ID": 6, "Specie_Name": "Sumbal", "Watered":"22-11-19",},
          2808:
            {"Date_Planted":"06-07-14", "Image": "https://images-na.ssl-images-amazon.com/images/I/61unKaYGOsL.jpg",               "Location":  {"latitude": 31.471399, "longitude": 74.411191,}, "Name": "Treever", "Plant_ID": 2808, "Planter_ID": 2,"Planter":"Hamza", "Specie_Bioname": "Dalbergia", "Specie_ID": 11, "Specie_Name": "Rosewood", "Watered":"22-11-19",},
          3352:
            {"Date_Planted":"11-11-11", "Image": "https://i.pinimg.com/originals/ee/ee/41/eeee41f43035f6e3e36840ea482a5f14.jpg",   "Location":  {"latitude": 31.472196, "longitude": 74.410494,}, "Name": "Arjun Rampal", "Plant_ID": 3352, "Planter_ID": 2,"Planter":"Hamza", "Specie_Bioname": "T Arjuna", "Specie_ID": 9, "Specie_Name": "Arjun", "Watered":"22-11-19",},
          5369:
            {"Date_Planted":"06-08-17", "Image": "https://d6p0gevo8s9lm.cloudfront.net/media/catalog/product/cache/1/image/353x353/9df78eab33525d08d6e5fb8d27136e95/m/u/musa-basjoo750x750.jpg", "Location":  {"latitude": 31.469861, "longitude": 74.409519,}, "Name": "Banana Man", "Plant_ID": 5369, "Planter_ID": 1, "Specie_Bioname": "Musa Basjoo", "Specie_ID": 2, "Specie_Name": "Banana Tree", "Watered":"22-11-19",},
          292:
            {"Date_Planted":"11-03-03", "Image": "https://live.staticflickr.com/2524/3954496959_e7fb57a43f_b.jpg",                 "Location":  {"latitude": 31.47024, "longitude": 74.409213,}, "Name": "Thorny Kiker", "Plant_ID": 292, "Planter_ID": 1,"Planter":"Hassan", "Specie_Bioname": "A Nilotica", "Specie_ID": 5, "Specie_Name": "Kiker", "Watered":"22-11-19"},
          797:
            {"Date_Planted":"14-02-16", "Image": "https://media.npr.org/assets/img/2012/10/05/apple-tree-056fb57ed927bf3668ef04e5b9850e99363b87fe-s1100-c15.jpg", "Location":  {"latitude": 31.469349, "longitude": 74.409841,}, "Name": "Asaaib", "Plant_ID": 797, "Planter_ID": 1,"Planter":"Hassan", "Specie_Bioname": "Malus", "Specie_ID": 1, "Specie_Name": "Apple Tree", "Watered":"22-11-19",},
          452:
            {"Date_Planted":"21-11-09", "Image": "https://i.pinimg.com/originals/5f/fc/c1/5ffcc15874a99035e053bbc5ff8148f5.jpg",   "Location":  {"latitude": 31.469139, "longitude": 74.409465,}, "Name": "Aam Khao", "Plant_ID": 452, "Planter_ID": 1,"Planter":"Hassan", "Specie_Bioname": "Mangifera", "Specie_ID": 4, "Specie_Name": "Mango", "Watered":"22-11-19",},
          9079:
            {"Date_Planted":"19-01-07", "Image": "https://cdn.britannica.com/68/128168-004-BB84F2D2/Eucalyptus-tree.jpg",          "Location":  {"latitude": 31.470057, "longitude": 74.409336,}, "Name": "Angraiz", "Plant_ID": 9079, "Planter_ID": 1,"Planter":"Hassan", "Specie_Bioname": "Eucalytpus", "Specie_ID": 3, "Specie_Name": "Eucalytpus", "Watered":"22-11-19",},
          5519:
            {"Date_Planted":"12-02-15", "Image": "https://smedia2.intoday.in/indiatoday/images/stories/2017November/peepal-mos_110917010639.jpg", "Location":  {"latitude": 31.47204, "longitude": 74.41059,}, "Name": "Peepal Sheepal", "Plant_ID": 5519, "Planter_ID": 2,"Planter":"Hamza", "Specie_Bioname": "F Religiosa", "Specie_ID": 10, "Specie_Name": "Peepal", "Watered":"22-11-19",},
          2816:
            {"Date_Planted":"13-04-04", "Image": "https://images-na.ssl-images-amazon.com/images/I/71aGedkWLDL.jpg",               "Location":  {"latitude": 31.469486, "longitude": 74.409803,}, "Name": "Saib K Darakahat", "Plant_ID": 2816, "Planter_ID": 1,"Planter":"Hassan", "Specie_Bioname": "Malus", "Specie_ID": 1, "Specie_Name": "Apple Tree", "Watered":"22-11-19",},
      }
    };

  }

  componentDidMount(){
    // console.log("Details ", this.props.location, this.props, this.props.navigation.state.params)
    // this.setState({location:  {
    //                             latitude: this.props.navigation.state.params.location.latitude, 
    //                             longitude: this.props.navigation.state.params.location.longitude,
    //                           } })
    let p1 = new Promise((resolve, reject)=>{
      let x = this.state.lookup[this.props.navigation.state.params.ID]
      resolve(x)
    })
    p1.then(x1=>{
      this.setState({
        name: x1["Name"],
        planter: x1["Planter"],
        SP_ID: x1["Specie_ID"],
        SP_name: x1["Specie_Name"],
        SP_Bioname: x1["Specie_Bioname"],
        planted: x1["Date_Planted"],
        watered: x1["Watered"],
        images: [x1["Image"]]
      })
      this.props.navigation.setParams({
        img: this.state.images[0]
      })
    })
    //get rest of information from DB and set state.

  }

  viewSpecie = (e) =>{
    e.preventDefault();
    console.log("redirect")
    this.props.navigation.navigate('SpecieDetails', {ID: this.state.SP_ID, Name: this.state.SP_name, Bio: this.state.SP_Bioname})
  }

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return{
      headerStyle: {
        height: 200
      },
      headerBackground: (
      <Image
        style={StyleSheet.absoluteFill}
        source={{ uri: params.img }}
      />
      ),
      headerLeft: (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
          <Icon name="md-arrow-round-back"  style={{ marginTop: -150, marginLeft: 10}} size={32} color="#eedede" />
        </TouchableWithoutFeedback>
      ),
    }
  };


  render() {
    const {navigate} = this.props;
    return (
      <View style = {{height: '100%', width: '100%'}}>
        <View style={{backgroundColor: "#00695c", height: '20%'}}>
          <Text style = {{fontSize: 30, color: "#eedede", marginTop: '1%', marginLeft: 10}}>{this.state.name} </Text>
          <Text style = {{fontSize: 20, color: "white", marginTop: '1%', marginLeft: 10}}>Planted by {this.state.planter}</Text>
        </View> 
        <View style={{height:'80%', width:'100%',}}>
          
          <ImageBackground
            style={{ height: "100%", width:"100%"}}
            source = {require('../bgpink1.jpg')}
          >

            <View style= {{height:'20%',width:'100%',flexDirection: 'row', justifyContent: 'space-around'}}> 
              <Text style={{fontSize:20, alignSelf: 'center', width:'60%',marginLeft:30,color: "#00695c", fontWeight: "bold"}}>Type</Text>
              <TextInput style={{textAlign: "left", width: "40%", fontSize: 20,alignSelf:'center', color:'#439889'}} value = {this.state.SP_name} editable = {false}/> 
            </View>
            <Divider style = {{width: "90%", alignSelf: "center"}}/>


            <View style= {{height:'20%',width:'100%',flexDirection: 'row', justifyContent: 'space-around'}}> 
              <Text style={{fontSize:20, alignSelf: 'center', width:'60%',marginLeft:30,color: "#00695c", fontWeight: "bold"}}>Biological Name</Text>
              <TextInput style={{textAlign: "left", width: "40%", fontSize: 20,alignSelf:'center',color: "#439889"}} value = {this.state.SP_Bioname} editable = {false}/> 
            </View>
            <Divider style = {{width: "90%", alignSelf: "center"}}/>


            <View style= {{height:'20%',width:'100%',flexDirection: 'row', justifyContent: 'space-around'}}> 
              <Text style={{fontSize:20, alignSelf: 'center', width:'60%',marginLeft:30,color: "#00695c", fontWeight: "bold"}}>Planted On</Text>
              <TextInput style={{textAlign: "left", width: "40%", fontSize: 20,alignSelf:'center',color: "#439889"}} value = {this.state.planted} editable = {false}/> 
            </View>
            <Divider style = {{width: "90%", alignSelf: "center"}}/>


            <View style= {{height:'20%',width:'100%', flexDirection: 'row', justifyContent: 'space-around'}}> 
              <Text style={{fontSize:20, alignSelf: 'center', width:'60%',marginLeft:30,color: "#00695c", fontWeight: "bold"}}>Last Watered</Text>
              <TextInput style={{textAlign: "left", width: "40%", fontSize: 20,alignSelf:'center',color: "#439889"}} value = {this.state.watered} editable = {false}/> 
            </View>
            <Divider style = {{width: "90%", alignSelf: "center"}}/>

            <View style = {{height: '20%', width: '100%', marginTop: 10}}>
              <TouchableHighlight underlayColor="#439889" onPress ={(e) =>{this.viewSpecie(e)}} style = {{backgroundColor: '#00695c', width: '55%',height: '70%', alignSelf: 'center', borderRadius: 30}}>
                <View style = {{width: '100%', flexDirection: 'row', alignSelf: 'center', marginLeft: '20%', paddingTop:10}}>
                  <Icon name="md-eye" style = {{alignSelf: 'center'}} color = "#eedede" size = {30}/>
                  <Text style={styles.fullWidthButtonText}>  View Species</Text>
                </View>
              </TouchableHighlight>
            </View>

          </ImageBackground>


        </View>
       
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  fullWidthButtonText: {
    alignSelf: 'center',
    fontSize:20,
    color: '#eedede',
  }
})