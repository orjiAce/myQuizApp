import React, { Component } from "react";
import { View, Text } from "react-native";
import Styles from "./../style/Theming";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCategories: ["Government", "General"],
    };
  }

  render() {
    return (
      <View style={Styles.categoryScreen}>
        <View style={Styles.categoryTextWrap}>
          <Text style={Styles.categoryText}> Pick a category </Text>
        </View>
        <View style={Styles.cardsWrap}>
          {this.state.allCategories.map((cat, index) => (
            <View key={index} style={Styles.cards}>
              <Text>{console.log(index)}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default Category;
