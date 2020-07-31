import React, { useState,Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from "react-native";
import Styles from "./../style/Theming";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import CustomButton from "./CustomButton";
import { Link } from 'react-router-native'
const person = require("../assets/image/person.png");

class Splash extends Component {

    constructor(props){
        super();
        this.state = {
            opacity: new Animated.Value(0),
        }
    }
//  let opacity = 
      onLoad = () => {
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }


      
render() {
    const {onStartQuiz} = this.props;
    return (
        <View style={Styles.SplashScreen}>
          <View style={Styles.splashTextWrap}>
            <Text style={Styles.splashText}>Go head to head 
            </Text>
            <Text style={Styles.splashText}>
            with yourself. 
                </Text>
            <Text style={Styles.splashText}>test your knowledge.</Text>
          </View>
    
          <View style={Styles.roundedImageContainer}>
            <Animated.Image onLoad={this.onLoad} style={Styles.myImage} source={person} resizeMode={"contain"} />
          </View>
         
          <CustomButton onPress={() => onStartQuiz(true)}>
            
            <View>
              <Text style={Styles.customButtonText}>Start</Text>
            </View>
            <View style={Styles.iconBtn}>
           
            <AntDesign name="rightcircle" size={14} color="black" />
        
            </View>
          </CustomButton>
         
        </View>
      );
}
  
};

export default Splash;
