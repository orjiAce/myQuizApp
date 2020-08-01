import React, {useState} from "react";
import {Button, View} from 'react-native'


// Function to question inside our app
const QuestionBox = ({question, options, selected}) => {
    const [answer, setAnswer] = useState(options);
    const [choice, setChoice] = useState('');

    const resetAnswer = (answers) => {
        setAnswer(answers)
    }

    return (
        <View style="questionBox">
        {/*    <View className="question">{question}</View>*/}
            {answer.map((text, index) => (
                {text}
               /* <button
                    key={index}
                    className={`answerBtn ${answer.filter(ans => (ans.includes(text) ? 'active' : ''))}`}
                    onClick={() => {
                        setAnswer([text]);
                        setChoice(text)
                        //console.log(text)
                        selected(text);
                    }}> {text}
                </button>*/
            ))}
        </View>
    )
};

export default QuestionBox;