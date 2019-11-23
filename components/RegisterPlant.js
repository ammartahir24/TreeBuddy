import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  DatePickerAndroid,
  CameraRoll,
} from 'react-native';
import { TextInput, Button, Portal, Provider} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import Constants from 'expo-constants';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal, { ModalContent } from 'react-native-modal';
import QRCode from 'react-native-qrcode';
import ViewShot from "react-native-view-shot";


export default class RegisterPlant extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        loading: false,
        r: null,
        image: null,
        location: null,
        firebaseUpload: false,
        text: "",
        date: new Date(),
        dateText: 'Pick a date',
        visibleModal : null
    }
    this.showDatePicker.bind(this);
    }

    showDatePicker = async (options) => {
      try {
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action !== DatePickerAndroid.dismissedAction) {
              let date = new Date(year, month, day);
              let newState = {};
              newState['date'] = date;
              newState['dateText'] = date.toLocaleDateString("en-US");
              this.setState(newState);
            }
          } catch ({code, message}) {
            console.warn(`error `, code, message);
          }
      };

  static navigationOptions = {
    title: 'Add a Tree',
  };

  async componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
        ToastAndroid.show("Permission Denied!")
    } else {
        // this._getLocationAsync();
    }

  }

  _pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({allowsEditing: true,
      aspect: [4, 3], quality: 1})
    console.log("here", result.cancelled)
    if (!result.cancelled) {
      const resizedPhoto = await ImageManipulator.manipulateAsync(result.uri, [
        { resize: { width: 1000 }}
      ])
      this.setState({ image: resizedPhoto.uri })

      img_type = ((this.state.image).split(".").pop())
      img_type = "jpg"
      const type_ = "image/" + img_type;
      const name_ = "photo." + img_type;

      const formData = new FormData();
      const photo = {
        uri: this.state.image,
        type: type_,
        name: name_
      }

      formData.append('image', photo)
    }
  }
  _showModal = () => this.setState({ visible: true });
  _hideModal = () => this.setState({ visible: false });
  _renderModalContent = () => (
    
    //Do backend processing here.
    
    <View style = {{opacity: 0.60}} >
      <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
        <View style={{paddingLeft:"25%"}}>
          <QRCode
          value="http://facebook.github.io/react-native/"
          size={200}
          // bgColor='black'
          // fgColor='white'
          />
        </View>
      </ViewShot>
      <View style={{height: "10%"}}/>
      <View>
        <Button icon="content-save" mode="contained" onPress={()=>{this.qrcodesave();this.state.visibleModal=0;this.forceUpdate()}} >Save QR code to gallery</Button>
      </View>
    </View>

  );
  qrcodesave = () => {
    this.refs.viewShot.capture().then(uri => {
      console.log("do something with ", uri);
      CameraRoll.saveToCameraRoll(uri)
    });
}

  render() {
    const {navigate} = this.props.navigation;
    const { hasCameraPermission } = this.state
    if (0) {
      return <View />
    }
    else if (0) {
      return <Text>No access to camera</Text>
    }
    else{
      return (
        <KeyboardAvoidingView  behavior="padding" enabled>
          <View style={{height: '100%', width: '100%', alignItems: 'center' }}>
            {!this.state.image? <View style = {{width : '100%', height: '35%', backgroundColor: '#F6F6F6' }}>
            <Icon style = {{alignSelf: 'center' }} name = "md-camera" size={150} color = "#C7C7C7"/>
            <Text style = {{alignSelf: 'center', color: "#C7C7C7", fontSize:20}}> Add an Image of the Tree</Text>
            </View>:
            <Image
                                    style={{width: "100%", height: "35%"}}
                                    source={{uri: this.state.image}}
                                  />
            }
            
            <ImageBackground
                  style={{ opacity: 0.8, height: "100%", width:"100%"}}
                  source = {require('../backdrop1jpg.jpg')}
            >
              <View style={{paddingRight:"5%", paddingLeft:"5%", paddingTop:"15%" }}>
                  <TextInput
                    style = {backgroundColor= "white"}
                    label="Nick Name"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    isFocused = "true"
                    mode = "outlined"
                    theme={{ colors: { placeholder: '#00695c', text: '#00695c', primary: 'black',
                    underlineColor: 'transparent', 
                    background: '#e6e6fa' 
                  } }}
                  />
                  <View style={{height: "5%"}}/>
                  <TextInput
                    label="Type of tree"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    isFocused = "true"
                    mode = "outlined"
                    color = "white"
                    theme={{ colors: { placeholder: '#00695c', text: '#00695c', primary: 'black',
                    underlineColor: 'transparent', 
                    background: '#e6e6fa' 
                  } }}
                  />
                  <View style={{height: "5%"}}/>
                  <Button icon="calendar" mode="contained" onPress={() => this.showDatePicker({date: this.state.date})}>
                    When was the tree planted?
                  </Button>
                  
                  <View style={{height: "25%"}}/>
                  <View style = {{paddingLeft:"60%"}}>
                  <Button mode="contained" onPress={()=>{this.state.visibleModal = 1; this.forceUpdate()}}>
                    Submit
                  </Button>
                
                  <Modal isVisible={this.state.visibleModal === 1} coverScreen="true" onBackButtonPress={()=>{this.state.visibleModal = 0; this.forceUpdate()}}>
                    {this._renderModalContent()}
                  </Modal>
              
                  </View>
                  </View>
              
            </ImageBackground>
            <View style={{top: "28%", right: 0, width: "20%", height: "15%",position: "absolute"}}>
              <ActionButton buttonColor="#b9f6ca" fixNativeFeedbackRadius= {true} position = "right" nativeFeedbackRippleColor  = "#87c197" onPress={this._pickImage}>
              </ActionButton>
            </View>
          </View>
        </KeyboardAvoidingView>
        );    
    }
  }
}

const styles = StyleSheet.create({
  inputsContainer: {
    flex: 1
  },
  fullWidthButton: {
    marginTop: "10%",
    marginRight: "5%",
    marginLeft: "5%",
    backgroundColor: '#017745',
    height: "140%",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  fullWidthButtonText: {
    textAlignVertical: "center",
    paddingBottom: "10%",
    fontSize:24,
    color: 'gold'
  }
})
