import React from 'react';
import { Button, Text, View, TouchableHighlight,TouchableOpacity } from 'react-native';
import Styles from './../style/Theming'



const CustomButton = ({children, onPress, style})=>{
    return(
        <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
            <View style={{...Styles.customButtonStyle, ...style}}>
{children}
            </View>
           
        </TouchableOpacity>
    )
}

export default CustomButton