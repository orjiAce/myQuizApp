import React, {useState} from "react";
import {Button, Text, TouchableOpacity, View} from 'react-native'
import Styles from "../style/Theming";

let i = 1;
// Function to question inside our app
const QuestionBox = ({question, options, selected}) => {
    const [answers, setAnswer] = useState(options);
    const [choice, setChoice] = useState('');

    const resetAnswer = (answers) => {
        setAnswer(answers)
    }

    return (

    <View style={Styles.answersWrap}>
        {
            answers.map((text, index) =>(
                <TouchableOpacity key={index}  onPress={() => {
                    setAnswer([text]);
                    setChoice(text)
                    //console.log(text)
                    selected(text);
                }} style={Styles.answerBtn}>

                    <Text style={Styles.answerText}>

                        {text}
                    </Text>
                </TouchableOpacity>
            ))
        }

    </View>
    )
};

export default QuestionBox;