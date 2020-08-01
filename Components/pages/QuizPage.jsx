import React from 'react'
import { View, Text, Button } from 'react-native'
import Styles from './../../style/Theming';

const QuizPage = ({resetGame}) => {
    return (
        <View style={Styles.QuizPage}>
            <Text style={Styles.quizPageText}>Questions</Text>
            <Button title='Reset game' onPress={() => resetGame()}/>
        </View>
    )
}

export default QuizPage
