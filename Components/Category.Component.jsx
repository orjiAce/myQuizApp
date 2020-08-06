import React, {useEffect, useState} from 'react'
import Styles from "../style/Theming";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import QuestionBank from "../DataSource/Question";
import {AntDesign} from "@expo/vector-icons";

const CategoryComponent = ({onStartQuiz}) => {
   //  const allCategories = [];
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        setQuestions(QuestionBank)
    }, [QuestionBank])
    const {Entertainment, General, Politics, Trivia} = questions
    return (
        <View>
            <View style={Styles.categoryTextWrap}>
                <Text style={Styles.categoryText}> Pick a category </Text>
            </View>
            <View style={Styles.cardsWrap}>


                <TouchableOpacity activeOpacity={0.9} style={Styles.cards} onPress={() => onStartQuiz(Entertainment)}>
                    <Text style={Styles.cardText}>Entertainment</Text>
                    <TouchableOpacity activeOpacity={1} style={Styles.arrow} title='Reset game'
                                      onPress={() => onStartQuiz(Entertainment)}>
                        <AntDesign name="arrowright" size={24} color="#FE6204"/>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} style={Styles.cards}
                                  onPress={() => onStartQuiz(General)}>
                    <Text style={Styles.cardText}>General</Text>

                    <TouchableOpacity activeOpacity={1} style={Styles.arrow} title='Reset game'
                                      onPress={() => onStartQuiz(General)}>
                        <AntDesign name="arrowright" size={24} color="#FE6204"/>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} style={Styles.cards}
                                  onPress={() => onStartQuiz(Politics)}>
                    <Text style={Styles.cardText}>Politics</Text>
                    <TouchableOpacity activeOpacity={1} style={Styles.arrow} title='Reset game'
                                      onPress={() => onStartQuiz(Politics)}>
                        <AntDesign name="arrowright" size={24} color="#FE6204"/>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} style={Styles.cards}
                                  onPress={() => onStartQuiz(Trivia)}>
                    <Text style={Styles.cardText}>Trivia</Text>
                    <TouchableOpacity activeOpacity={1} style={Styles.arrow} title='Reset game'
                                      onPress={() => onStartQuiz(Trivia)}>
                        <AntDesign name="arrowright" size={24} color="#FE6204"/>
                    </TouchableOpacity>
                </TouchableOpacity>


            </View>
        </View>
    )
}

export default CategoryComponent

