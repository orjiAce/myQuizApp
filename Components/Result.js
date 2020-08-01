import React from "react";
import {Button, View, Text} from "react-native";
import Styles from "../style/Theming";



const Result = ({score, playAgain, total}) => (
    <View className="score-board">
        <View className="score">

        <Text>
            Your score is {score} / {total} correct answer ! ! !
        </Text>
        </View>
        <Button style={Styles.playBtn} onPress={playAgain} title='Play Again' />

    </View>
)

export default Result