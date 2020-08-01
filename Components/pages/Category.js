import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "../../style/Theming";
import CategoryComponent from "./../Category.Component";
import QuizPage from "./QuizPage";

const Category = () => {
  let allAnswers = []
  const [quizStart, setQuizStart] = useState(0);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState(1);
  const [answerBank, setAnswerBank] = useState(allAnswers);

  const startQuiz = (MyCategory) => {
    setQuizStart(1);
    setScore(1);
    console.log(MyCategory);
  };

  const resetGame = () => {
    setQuizStart(0);
    setScore(0);
    console.log(score);
  };

  // Function to compute scores
  const computeAnswer = (answer, correctAns) => {
    if (answer === correctAns) {
      /*     answerBank.filter(name => name.includes(answer)).map(filteredName => (

              console.log(filteredName)


            ))*/

      if (answerBank.includes(answer)) {
        console.log("answered");
      } else {
        setAnswerBank((pastAnswers) => [answer, ...pastAnswers]);
        setScore(score + 1);
        console.log(score);
      }
      console.log(answerBank);
    }

    //subtract is question is wrong
    /* setScore(score > 1 ? score - 1 : score)
   console.log(score)*/

    setResponses(responses < 5 ? responses + 1 : 5);
    console.log(responses);
  };

  let content = <CategoryComponent onStartQuiz={startQuiz} />;
  if (quizStart > 0) {
    content = <QuizPage resetGame={resetGame} />;
  } else {
    content = <CategoryComponent onStartQuiz={startQuiz} />;
  }

  return <View style={Styles.categoryScreen}>{content}</View>;
};
export default Category;
