import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Explore from './components/Explore'
import Profile from './components/Profile'
import Settings from './components/Settings'
import Camera from './components/CameraComponent'
// import AddTree from './components/AddTree'
import QRcode from "./components/Qrcode"
// import Camera from './components/CameraComponent'
import PlantDetails from './components/PlantDetails'
import MyTrees from './components/MyTrees'
import Animation from './components/Animation'
import ScanList from './components/ScanList'
import WaterList from './components/WaterList'
import RegisterPlant from "./components/RegisterPlant"
import SpecieDetails from './components/SpecieDetails'
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer";
import Rewards from './components/Rewards'
import qrScanner from './components/qrScanner'
import test from './components/test'
// import {SafeAreaView, ScrollView, Image, View, Text, Alert} from 'react-native';
import { Avatar } from 'react-native-paper';

import {Dimensions} from 'react-native';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  ScrollView, 
  Text,
  Alert,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

global.values = {
	name : "Hassan",
	user : "User-1"
}

// const AuthenticationStack = createStackNavigator({
//   LogIn : {
//     screen: HomeScreen,
//   },
//   SignUp : {
//     screen : SignUp,
//   },
// })

const CustomeDrawerComponent = (props) => (
	<SafeAreaView style = {{flex: 1, height:"100%", backgroundColor:"#eedede"}}>
		<View style={{padding: 10, paddingTop: 0.05*height, paddingBottom: 0.05*height, backgroundColor:"#00695c"}}>
      <View style={{paddingLeft:"22%"}}>
        <Avatar.Image  size={150} source={require('./hassan.jpeg')} />
      </View>
			 <Text style={{marginLeft: 0.01*height, marginTop: 20, fontWeight: 'bold', color:"#eedede"}}> {values.name} </Text>
			 <Text style={{marginLeft: 0.01*height, marginTop: 8, color:"#eedede"}}> Member ID: {values.user} </Text>
		</View>
		<ScrollView>
		<View style={{height:"5%"}}></View>
    <View style={{height: "100%", width: "100%", backgroundColor:"#eedede"}}>
      <DrawerItems {...props} 
        // onItemPress={(route) => {
        // 	console.log(route)
        // 	if (route.route.routeName !== "Logout") {
        // 	  	props.onItemPress(route);
        // 	  	return;
        // 	}
        // 	Alert.alert(
        // 		'Are you sure you want to logout?',
        // 		'',
        // 		[
        // 			{
        // 				text: 'Cancel',
        // 				style: 'cancel',
        // 		  	},
        // 		  {
        // 				text: 'Logout', 
        // 				onPress: () => {
        // 					AsyncStorage.clear();
        // 					nav2.dispatch(StackActions.reset({
        // 						index: 0,
        // 						actions: [
        // 							NavigationActions.navigate({
        // 								routeName: 'Login',
        // 							}),
        // 						],
        // 					}))
        // 				}
        // 		  },
        // 		],
        // 	);
        // }}
      />
    </View>
    
		</ScrollView>
	</SafeAreaView>
)



const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Explore : {
    screen: Explore,
  },
  PlantDetails : {
    screen : PlantDetails,
  },
  SpecieDetails : {
    screen: SpecieDetails,
  },
  Profile : {
    screen: Profile,
  },
  Settings : {
    screen : Settings,
  },
  MyTrees : {
    screen: MyTrees,
  },
  Animation : {
    screen: Animation,
  },
  ScanList : {
    screen: ScanList,
  },
  WaterList : {
    screen: WaterList,
  },
  RegisterPlant : {
    screen : RegisterPlant,
  },
  test: {
    screen : test,
  },
  Rewards : {
    screen : Rewards
  }
});


const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppNavigator,
  },
  Explore : {
    screen: Explore,
  },
  Rewards : {
    screen: Rewards,
  },
},{
  contentComponent: CustomeDrawerComponent,
  contentOptions:{
    labelStyle: {
      fontWeight: 'normal',
    },
    activeTintColor: '#eedede',
    activeBackgroundColor: '#00695c',
    inactiveBackgroundColor: '#eedede',
    backgroundColor: "eedede"
  }
});


// const switchnav = createSwitchNavigator({
//   Auth : AuthenticationStack,
//   App: MyDrawerNavigator,
// })

// const MyApp = createAppContainer(MyDrawerNavigator);
const MyApp = createAppContainer(MyDrawerNavigator);

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}