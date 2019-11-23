import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  DatePickerAndroid,
} from 'react-native';
import { TextInput, Button, Portal, Provider} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import Constants from 'expo-constants';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal, { ModalContent } from 'react-native-modal';

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
        visibleModal : 1
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
  _showModal = () => this.setState({ visible: true });
  _hideModal = () => this.setState({ visible: false });
  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      <Button>Close</Button>
    </View>
  );



  render() {
    const {navigate} = this.props.navigation;
    const { hasCameraPermission } = this.state
    // const {visible} = this.state
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
                  // placeholder="Type of tree"
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
                <Button
                  style={{ marginTop: 30 }}
                  // onPress={this.setState({ visibleModal: 1 })}
                >show modal</Button>
                {/* <View style={{height: "25%"}}/> */}
                <View style = {{paddingLeft:"60%"}}>
                <Button mode="contained" onPress={() => console.log('Pressed')}>
                  Submit
                </Button>
                {/* <Modal visible={visible} onDismiss={this._hideModal}>
                  <Text>Example Modal</Text>
                </Modal> */}
                <Modal isVisible={this.state.visibleModal === 1}>
                  {this._renderModalContent()}
                </Modal>
            
                </View>
                </View>
              {/* <Button title={this.state.dateText} onPress={() => this.showDatePicker({date: this.state.date})}/> */}
            
          </ImageBackground>
          <View style={{top: "28%", right: 0, width: "20%", height: "15%",position: "absolute"}}>
            <ActionButton buttonColor="#b9f6ca" fixNativeFeedbackRadius= {true} position = "right" nativeFeedbackRippleColor  = "#87c197" onPress={this._pickImage}>
            </ActionButton>
          </View>
        </View>
        </KeyboardAvoidingView>

        // <View style={{width : "100%", height : "100%"}}>
        //   <ImageBackground
        //         style={{ opacity: 0.8, height: "100%", width:"100%"}}
        //         source = {require('../backdrop1jpg.jpg')}
        //   >
          // <View style={{paddingRight:"15%", paddingLeft:"15%", paddingTop:"15%"}}>
          //   {/* <View style={{height: "5%"}}/> */}
          //     <TextInput
          //       placeholder="Nick Name"
          //       onChangeText={(text) => this.setState({text})}
          //       value={this.state.text}
          //     />
          //     <View style={{height: "5%"}}/>
          //     <TextInput
          //       placeholder="Type of tree"
          //       onChangeText={(text) => this.setState({text})}
          //       value={this.state.text}
          //     />
          //     <View style={{height: "5%"}}/>
          //     <TextInput
          //       placeholder="Planted date"
          //       onChangeText={(text) => this.setState({text})}
          //       value={this.state.text}
          //     />
          // </View>
            
        //   </ImageBackground>
            
        //   </View>
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
