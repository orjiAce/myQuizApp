import React, {useState} from 'react'
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native'
import Styles from './../../style/Theming';
import QuestionBox from "../QuestionBox";
import {Ionicons, AntDesign} from "@expo/vector-icons";


const QuizPage = ({resetGame, Category, computeAnswer}) => {

    return (
        <View style={Styles.QuizPage}>
            <View style={Styles.wrap}>
                <Text style={Styles.quizPageText}>Questions </Text>
                <TouchableOpacity activeOpacity={1} title='Reset game' onPress={() => resetGame()}>
                    <AntDesign name="arrowleft" size={34} color="black"/>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={Styles.questionWrap}>

                {
                    Category.map(({
                                      question, answers,
                                      correct, questionId
                                  }, index) => (
                            <View style={Styles.questionContainer}>
                                <View style={Styles.questionCard} key={index}>
                                    <Text style={Styles.questionText}>{question}</Text>


                                </View>

                                <QuestionBox options={answers} selected={answer => computeAnswer(answer, correct)}/>
                            </View>
                        )
                    )
                }


            </ScrollView>

        </View>
    )
}

export default QuizPage
