import React from "react";
import {Button, View, Text} from "react-native";
import Styles from "../style/Theming";
import CustomButton from "./CustomButton";
import {AntDesign} from "@expo/vector-icons";


const Result = ({score, playAgain, total}) => (
    <View style={Styles.scoreBoard}>
        <View style={Styles.score}>


            {
                score === total ? <Text style={Styles.gameOverTxt}>
                    Your score is {score} out out {total} questions!  You're vert smart
                </Text> : <Text style={Styles.gameOverTxt}>
                    Your score is {score} out of {total} questions! Better luck next time.
                </Text>
            }

        </View>


        <CustomButton style={Styles.startAgainBtn} onPress={() => playAgain()}>

            <View>
                <Text style={Styles.customButtonText}>Play Again</Text>
            </View>

        </CustomButton>
    </View>
)

export default Result