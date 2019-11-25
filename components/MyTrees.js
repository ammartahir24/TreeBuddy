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
                  <TouchableOpacity underlayColor="#439889" key = {index} onPress={(e) =>{this.props.navigation.navigate("Animation", {path: "MyTrees", name: item.Name, spname: item.Specie_Bioname, lastwatered: item.Watered, datePlanted: item.Date_Planted, plantedBy:"Hassan"})}} 
                                    style={{elevation:5, alignSelf: 'center',width: "100%", backgroundColor:"#00695c",flex:1, flexDirection:'row',opacity:75,paddingTop:5, paddingBottom:5, paddingLeft:5, borderRadius: 35, marginBottom: 5}}
                  >
                    <Image source = {{uri:item.Image}} style={{borderColor:"#eedede",borderRadius:70 ,width: 70, height: 70, overflow: "hidden", borderWidth: 1}}/>
                    <View style={{flex:1, flexDirection:'column', paddingTop:5}}>
                      <Text style={{color:"#eedede",height:"37%",fontSize:19,textAlignVertical: "center",marginLeft:15, }}>{item.Name}</Text>
                      <Text style={{color:"#eedede",height:"30%",fontSize:15,textAlignVertical: "center",marginLeft:15}}>{item.Specie_Bioname}</Text>
                      <View style={{height:"12%", backgroundColor: "transparent"}}></View>
                      <Text style={{color:"#eedede",height:"25%",fontSize:12,textAlignVertical: "center",marginLeft:15, }}>Last Watered: {item.Watered}</Text>
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