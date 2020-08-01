import React from 'react'
import Styles from "../style/Theming";
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const CategoryComponent = ({onStartQuiz}) => {
    const allCategories = ["Government", "General"];
    return (
        <View>
     <View style={Styles.categoryTextWrap}>
        <Text style={Styles.categoryText}> Pick a category </Text>
      </View>
      <View style={Styles.cardsWrap}>
        {allCategories.map((cat, index) => (
          <TouchableOpacity activeOpacity={0.9} key={index} style={Styles.cards} onPress={() => onStartQuiz(cat)}>
            <Text style={Styles.cardText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>
        </View>
    )
}

export default CategoryComponent

