import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Icon from 'react-native-vector-icons/Ionicons';

export default class test extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    name : "Go Man",
    lastwatered : "22-11-2019",
    spname : "Mango Tree",
    img : 'https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/A4/97/14c09c41-9c8d-49a1-a94e-65282729d808.jpeg.webp'
  };


  static navigationOptions = ({navigation}) => ({
    headerLeft: (
      <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
        <Icon name="md-arrow-round-back"  style={{ marginTop: 10, marginLeft: 10}} size={32} color="#eedede" />
      </TouchableWithoutFeedback>
    ),
    headerStyle: {
        backgroundColor: '#00695c',
    },
    title:"Scan QR code",
    headerTintColor:"#eedede",
  });


  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          height: '100%', width: '100%', backgroundColor:"#eedede"
          // flex: 1,
          // flexDirection: 'column',
          // justifyContent: 'flex-end',
        }}
        >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {/* {scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
        )} */}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    // this.props.navigation.navigate("Animation")
    this.props.navigation.navigate("Animation", {path: "MyTrees", name: this.state.name, spname: this.state.spname, lastwatered: this.state.lastwatered, datePlanted: '22-11-2019'})
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
}