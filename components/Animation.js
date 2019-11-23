import React from 'react';
import { Dimensions,Easing,Animated,ImageBackground,ScrollView,StyleSheet, Button,  View, SafeAreaView, Text, Alert, Image,TouchableWithoutFeedback, TouchableHighlight, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PlantDetails extends React.Component {
    constructor(props) {
      super(props);
      this.animatedValue1 = new Animated.Value(0)
      this.animatedValue2 = new Animated.Value(0)
      this.animatedValue3 = new Animated.Value(0)
      this.state = {
        // Search Code
        // Fetch This array from DB
        datePlanted : "02-12-2018",
        plantedBy : "Mubeen",
        nickname : "Groot",
        spName : "Mangifera indica",
        lastwatered: "22-11-2019",
      }
    }
    componentDidMount() {
        this.props.navigation.setParams({
            titleName: this.state.nickname
        });
        this.animate()
    }
    animate () {
        this.animatedValue1.setValue(0)
        this.animatedValue2.setValue(0)
        this.animatedValue3.setValue(0)
        const createAnimation = function (value, duration, easing, delay = 0) {
            return Animated.timing(
            value,
            {
                toValue: 1,
                duration,
                easing,
                delay
            }
            )
        }
        Animated.parallel([
            createAnimation(this.animatedValue1, 1000, Easing.ease, 0),
            createAnimation(this.animatedValue2, 1000, Easing.ease, 2000),
            createAnimation(this.animatedValue3, 1000, Easing.ease, 4000)        
        ]).start()
      }
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            headerLeft: (
            <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
            <Icon name="md-arrow-round-back"  style={{ marginTop: 10, marginLeft: 10}} size={32} color="#FFFFFF" />
            </TouchableWithoutFeedback>
            ),
            headerStyle: {
                backgroundColor: '#00695c',
            },
            title: params.titleName,
            headerTintColor:"white",
        }
    };

    render() {
        const marginLeft = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [-200, 20]
        })
        const marginLeft2 = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: [Math.round(Dimensions.get('window').width)+200, Math.round(Dimensions.get('window').width)-220]
        })
        const marginLeft3 = this.animatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [-200, 20]
        })
        const {navigate} = this.props.navigation;
        return (
           <ImageBackground source={require('../groot.jpg')} style={{width: '100%', height: '100%'}}>
               <View style={styles.container}>
                <Animated.View
                    style={{
                    marginLeft,
                    height: 80,
                    borderRadius:10,
                    borderWidth:3,
                    width: 200,
                    borderColor:"#00695c",
                    backgroundColor: '#b9f6ca'}}>
                        <Text style={styles.fullWidthButtonText}>My name is {this.state.nickname}. I am a {this.state.spName} plant</Text>
                </Animated.View>
                <View style={{padding:130}}/>
                <Animated.View
                    style={{
                    marginLeft: marginLeft2,
                    marginTop: 10,
                    height: 80,
                    borderRadius:10,
                    borderWidth:3,
                    width: 200,
                    borderColor:"#00695c",
                    backgroundColor: '#b9f6ca'}}>
                        <Text style={styles.fullWidthButtonText}>{this.state.plantedBy} planted me on {this.state.datePlanted}</Text>
                </Animated.View>
                <View style={{padding:10}}/>
                <Animated.View
                    style={{
                    marginLeft: marginLeft3,
                    marginTop: 10,
                    height: 80,
                    borderRadius:10,
                    borderWidth:3,
                    width: 200,
                    borderColor:"#00695c",
                    backgroundColor: '#b9f6ca'}}>
                        <Text style={styles.fullWidthButtonText}>I was last watered on {this.state.lastwatered}</Text>
                </Animated.View>
                </View>
           </ImageBackground>
        );
    }
}  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50
    },
    fullWidthButtonText: {
        textAlign: "center",
        fontSize:16,
        color: '#00695c',
        padding: 15
    }
  })