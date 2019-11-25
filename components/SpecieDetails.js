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
      SP_ID: 8,
      SP_name: "Rosewood",
      SP_Bioname: "Dalbergia Stevensonii ",
      Occurences: '2',
      Kingdom: 'Plantae',
      Family: 'Fabacaea',
      Order: 'Fabales',
      images: [],

      lookup: {
         2: { "Family": 'Banana', "Image": 'https://previews.123rf.com/images/saengdao/saengdao1804/saengdao180400030/99274110-banana-was-leaving-the-tip-of-a-banana-tree-typically-one-banana-a-banana-tree-leaves-only-once-.jpg', "Kingdome": 'Plants',   "Occurences": 4,   "Order": 'Zingiberales',   "Specie_ID": 2,   "Specie_Name": 'Banana Tree',   "Specie_Bioname": 'Musa Basjoo' },
         3: { "Family": 'Myrtle',  "Image": 'https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2009/06/eucalyptus-400x533.jpg',   "Kingdome": 'Plants',   "Occurences": 2,   "Order": 'Mayrtales',   "Specie_ID": 3,   "Specie_Name": 'Eucalytpus',   "Specie_Bioname": 'Eucalytpus Globulus' },
         6: { "Family": 'Malvaceae', "Image": 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Bombax_ceiba_tree%27.jpg/330px-Bombax_ceiba_tree%27.jpg', "Kingdome": 'Plants',   "Occurences": 2,   "Order": 'Malvales',   "Specie_ID": 6,   "Specie_Name": 'Sumbal',   "Specie_Bioname": 'Bombax Ceiba' },
         9: { "Family": 'Combretaceae', "Image": 'https://5.imimg.com/data5/LD/MD/EM/SELLER-22662015/arjun-tree-plant-500x500.JPG',   "Kingdome": 'Plants',   "Occurences": 1,   "Order": 'Myrtales',   "Specie_ID": 9,   "Specie_Name": 'Arjun',   "Specie_Bioname": 'Terminalia Arjuna' },
         10:{ "Family": 'Mulberry', "Image": 'https://media.gettyimages.com/photos/peepal-tree-picture-id1076653258?s=612x612',   "Kingdome": 'Plants',   "Occurences": 1,   "Order": 'Rosales',   "Specie_ID": 10,   "Specie_Name": 'Peepal',   "Specie_Bioname": 'Ficus Religiosa' },
         5: { "Family": 'Legumes',  "Image": 'http://i.dawn.com/2012/08/1-kiker-trees-qamar-mehdi-670.jpg',   "Kingdome": 'Plants',   "Occurences": 5,   "Order": 'Fabales',   "Specie_ID": 5,   "Specie_Name": 'Kiker',   "Specie_Bioname": 'Acacia Nilotica' },
         8: { "Family": 'Mahogany',  "Image": 'https://cdn.shopify.com/s/files/1/1908/8561/products/Neem_trees1_cropped_grande.png?v=1498132161',   "Kingdome": 'Plants',   "Occurences": 19,   "Order": 'Sapindales',   "Specie_ID": 8,   "Specie_Name": 'Neem',   "Specie_Bioname": 'Azadirachta Indica' },
         11:{ "Family": 'Fabaceae',  "Image": 'https://img.hunkercdn.com/600x/clsd/getty/4382ec3c76db4e0bac2f537fb123795f.jpg',   "Kingdome": 'Plantae',   "Occurences": 1,   "Order": 'Fabales',   "Specie_ID": 11,   "Specie_Name": 'Rosewood',   "Specie_Bioname": 'Dalbergia' },
         4: { "Family": 'Anacardiaceae',  "Image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRybpZbfJjv2hrpfqsIT02V6fGxJ71LWHC6nS8ehIaax2TtHScq',   "Kingdome": 'Plantae',   "Occurences": 6,   "Order": 'Sapindales',   "Specie_ID": 4,   "Specie_Name": 'Mango',   "Specie_Bioname": 'Mangifera indica' },
         7: { "Family": 'Papilionaceae',   "Image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYsZ-4KN4SeAcltulvv-S4mJe84pfx808CxVA8CY9Pzj9b3N2&s',   "Kingdome": 'Plants',   "Occurences": 1,   "Order": 'Fabaceae',   "Specie_ID": 7,   "Specie_Name": 'Sukh Chain',   "Specie_Bioname": 'Pongamia Pinata' },
         1: { "Family": 'Rose', "Image": 'https://cdn.thetreecenter.com/c/uploads/pink-lady-apple-1.jpg',  "Kingdom": 'Plants',  "Occurences": 4,  "Order": 'Rosales',  "Specie_ID": 1,  "Specie_Name": 'Apple Tree',  "Specie_Bioname": 'Malus Domestica' }

      } 

    };

  }

  componentDidMount(){

    let p1 = new Promise((resolve, reject)=>{
      let x = this.state.lookup[this.props.navigation.state.params.ID]
      resolve(x)
    })
    p1.then(x1=>{
      this.setState({
        SP_ID: x1["Specie_ID"],
        SP_name:x1["Specie_Name"],
        SP_Bioname: x1["Specie_Bioname"],
        Occurences: x1["Occurences"],
        Kingdom: x1["Kingdome"],
        Family: x1["Family"],
        Order: x1["Order"],
        images: [x1["Image"]],
      })
      this.props.navigation.setParams({img: this.state.images[0]})
    })
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
      <View style = {{backgroundColor: '#e7f0eb',height: '100%', width: '100%'}}>
        <View style={{backgroundColor: "#00695c", height: '20%'}}>
          <Text style = {{fontSize: 30, color: "#eedede", marginTop: '1%', marginLeft: 10}}>{this.state.SP_name} </Text>
          <Text style = {{fontSize: 20, color: "white", marginTop: '1%', marginLeft: 10}}>{this.state.SP_Bioname}</Text>
        </View> 
        <View style={{height:'80%', width:'100%',}}>
          
          <ImageBackground
            style={{ height: "100%", width:"100%"}}
            source = {require('../bgpink1.jpg')}
          >

            <View style= {{height:'20%',width:'100%',flexDirection: 'row', justifyContent: 'space-around'}}> 
              <Text style={{fontSize:20, alignSelf: 'center', width:'60%',marginLeft:30,color: "#00695c", fontWeight: "bold"}}>Instances</Text>
              <TextInput style={{textAlign: "left", width: "40%", fontSize: 20,alignSelf:'center', color:'#439889'}} value = {this.state.Occurences.toString()} editable = {false}/> 
            </View>
            <Divider style = {{width: "90%", alignSelf: "center"}}/>

            <View style= {{height:'20%',width:'100%',flexDirection: 'row', justifyContent: 'space-around'}}> 
              <Text style={{fontSize:20, alignSelf: 'center', width:'60%',marginLeft:30,color: "#00695c", fontWeight: "bold"}}>Kingdom</Text>
              <TextInput style={{textAlign: "left", width: "40%", fontSize: 20,alignSelf:'center',color: "#439889"}} value = {this.state.Kingdom} editable = {false}/> 
            </View>
            <Divider style = {{width: "90%", alignSelf: "center"}}/>

            <View style= {{height:'20%',width:'100%',flexDirection: 'row', justifyContent: 'space-around'}}> 
              <Text style={{fontSize:20, alignSelf: 'center', width:'60%',marginLeft:30,color: "#00695c", fontWeight: "bold"}}>Family</Text>
              <TextInput style={{textAlign: "left", width: "40%", fontSize: 20,alignSelf:'center',color: "#439889"}} value = {this.state.Family} editable = {false}/> 
            </View>
            <Divider style = {{width: "90%", alignSelf: "center"}}/>

            <View style= {{height:'20%',width:'100%', flexDirection: 'row', justifyContent: 'space-around'}}> 
              <Text style={{fontSize:20, alignSelf: 'center', width:'60%',marginLeft:30,color: "#00695c", fontWeight: "bold"}}>Order</Text>
              <TextInput style={{textAlign: "left", width: "40%", fontSize: 20,alignSelf:'center',color: "#439889"}} value = {this.state.Order} editable = {false}/> 
            </View>
            <Divider style = {{width: "90%", alignSelf: "center"}}/>

            <View style = {{height: '20%', width: '100%', marginTop: 10}}>
              <TouchableHighlight underlayColor="#439889" onPress ={(e) =>{this.LocateSpecie(e)}}  style = {{backgroundColor: '#00695c', width: '55%',height: '70%', alignSelf: 'center', borderRadius: 30}}>
                <View onPress = {(e)=> {this.viewSpecie(e)}} style = {{width: '100%', flexDirection: 'row', alignSelf: 'center', marginLeft: '20%', paddingTop:10}}>
                  <Icon name="md-eye" style = {{alignSelf: 'center'}} color = "#eedede" size = {30}/>
                  <Text style={styles.fullWidthButtonText}>  Locate Specie</Text>
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