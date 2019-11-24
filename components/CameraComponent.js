import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import React, { Component } from 'react';
import { Button, ActivityIndicator, Icon, Item, Dimensions, Platform, View, TextInput, TouchableOpacity, TouchableHighlight, Text, KeyboardAvoidingView, Image, ToastAndroid, Alert } from 'react-native';
// import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
// const axios = require('axios')
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import Constants from 'expo-constants';
// import { FloatingAction } from "react-native-floating-action";
import ActionButton from 'react-native-action-button';

// import * as Location from 'expo-location';

import * as firebase from 'firebase';
// import ApiKeys from './ApiKeys';
// import { ImagePicker } from 'expo';


const imageWidth = Dimensions.get('window').width;
const imageHeight = Dimensions.get('window').height;
// const DESIRED_RATIO = "16:9";



class CameraComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
        loading: false,
        r: null,
        image: null,
        location: null,
        firebaseUpload: false,
        text: "",
    }

    // if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig) }
  }

  async componentDidMount() {
    // console.log("IN LOCATION LORU")
    if (Platform.OS === 'android' && !Constants.isDevice) {
        ToastAndroid.show("Permission Denied!")
    } else {
        // this._getLocationAsync();
    }

  }
  

  // async componentWilllMount() {
  //   if (Constants.platform.ios) {
  //     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  //     if (status !== 'granted') {
  //         ToastAndroid.show("Permission Denied!")
  //     }
  //   }
  // }


  // _getLocationAsync = async () => {

  //   let { status } = await Permissions.askAsync(Permissions.LOCATION)
  //   if (status !== 'granted') {
  //     ToastAndroid.show("Permission Denied!")
  //   }

  //   let loc = await Location.getCurrentPositionAsync({})
  //   this.setState({ location: loc })
  // }

    uploadImage = async (uri, imageName) => {
      const response = await fetch(uri)
      const blob = await response.blob()

      var ref = firebase.storage().ref().child("images/" + imageName)
      return ref.put(blob)
    }


    _pickImage = async () => {
      // console.log("HERE")
      let result = await ImagePicker.launchCameraAsync({allowsEditing: true,
        aspect: [4, 3], quality: 1})
      console.log("here", result.cancelled)
      if (!result.cancelled) {
        const resizedPhoto = await ImageManipulator.manipulateAsync(result.uri, [
          { resize: { width: 1000 }}
        ])
        this.setState({ image: resizedPhoto.uri })
        // console.log(this.state.image)
        // console.log(this.state.location)

        img_type = ((this.state.image).split(".").pop())
        img_type = "jpg"
        const type_ = "image/" + img_type;
        const name_ = "photo." + img_type;

        // console.log(name_)
        // console.log(type_)
        // console.log("-------------")

        const formData = new FormData();
        const photo = {
          uri: this.state.image,
          type: type_,
          name: name_
        }

        formData.append('image', photo)

        // this.setState({ text: "Estimating Quality.."})
      
        // console.log(formData)


        // const res = await axios.post('https://soil-sproj.herokuapp.com/', formData, {
        //     headers: {
        //       'content-type': `multipart/form-data`,
        //     }
        // }).then((response) => {
        //     this.setState({ text: "Uploading Image.."})
        //     ToastAndroid.show(String(response.data['score']), ToastAndroid.LONG)
        //     // console.log(this.state.text)
        //     let lat = String(this.state.location["coords"]["latitude"])
        //     let long = String(this.state.location["coords"]["longitude"])

        //     this.uploadImage(this.state.image, lat + "_" + long)
        //     .then(() => {
        //       // ToastAndroid.show("Upload Successful!", ToastAndroid.LONG)
        //       this.setState({firebaseUpload: true})
        //     })
        //     .catch((error) => {
        //       ToastAndroid.show(error.message)
        //       // console.log(error.message)
        //     });
        // }).catch(function (err) {
        //   console.log(err);
        // });

        // this.setState({ loading: false })
        // this.setState({ image: null })

        // this._pickImage()
        
      }
    }

  render() {

    const { hasCameraPermission } = this.state

    if (0) {
      return <View />
    }
    else if (0) {
      return <Text>No access to camera</Text>
    }
    else {
      return (
       <View style={{height: '100%', width: '100%', alignItems: 'center' }}>
          {!this.state.image? <View style = {{width : '100%', height: '40%', backgroundColor: 'lightgrey' }}></View>:
           <Image
                                  style={{width: "100%", height: "40%"}}
                                  source={{uri: this.state.image}}
                                />
           }
          
          <View style={{top: "33%", right: 0, width: "20%", height: "15%",position: "absolute"}}>
            <ActionButton buttonColor="#b9f6ca" fixNativeFeedbackRadius= {true} position = "right" nativeFeedbackRippleColor  = "#87c197" onPress={this._pickImage}>
            </ActionButton>
          </View>

        
          
        </View>
      );
    }
  }
}

export default CameraComponent

// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
// // import Icon from 'react-native-vector-icons/Ionicons';


// class Camera extends Component {

//   render() {
//     return (
//       <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
//         { Rest of the app comes ABOVE the action button component !}
//         <ActionButton buttonColor="#b9f6ca" fixNativeFeedbackRadius= {true} nativeFeedbackRippleColor  = "#87c197">
          
//         </ActionButton>
//       </View>
//     );
//   }

// }

// const styles = StyleSheet.create({
//   actionButtonIcon: {
//     fontSize: 20,
//     height: 22,
//     color: 'white',
//   },
// });

// export default Camera;