import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { Camera, BarCodeScanner, Permissions } from 'expo';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

// const NativePermissionsAndroid = NativeModules.PermissionsAndroid;

export default class qrScanner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasCameraPermission: null,
            scanned: false,
          };
        // this.onBarCodeRead = this.onBarCodeRead.bind(this);
        // this.renderMessage = this.renderMessage.bind(this);
        // this.scannedCode = null;

        // this.state = {
        // hasCameraPermission: null,
        // type: Camera.Constants.Type.back,
        // id_cedulacli: '',
        //         placa:'',
        //         monto:'', 
        //         fecha_pago:'Seleccione fecha'   
        // };
    }
    
    async componentDidMount() {
        this.getPermissionsAsync();
      }
    
    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    };

    static navigationOptions = {
      title: 'QR scanner',
    };
    onSuccess = (e) => {
        console.log(e.data, ' e.data');
    };


    render() {
        const { scanned } = this.state;
        // const { hasCameraPermission } = this.state
        return (
            <View>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {/* <QRCodeScanner
                    onRead={this.onSuccess}
                    topContent={
                        <Text style={styles.centerText}>
                            Scan this and make friends
                        </Text>
                    }
                /> */}
            </View>

        );

    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true });
        console.log("qr")
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };
  }