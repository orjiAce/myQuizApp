import React, { useState } from "react";
import {View, Text, TouchableOpacity, Alert} from "react-native";
import Styles from "../../style/Theming";
import CategoryComponent from "./../Category.Component";
import QuizPage from "./QuizPage";
import QuestionBank from "../../DataSource/Question";
import Result from "../Result";
const Category = () => {
  let allAnswers = []
  const [quizStart, setQuizStart] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [myCategory, setMyCategory] = useState([]);
  const [responses, setResponses] = useState(1);
  const [answerBank, setAnswerBank] = useState(allAnswers);

  const startQuiz = (MyCategory) => {
    setQuizStart(1);
    setScore(1);

    setMyCategory(MyCategory)
  };

  const resetGame = () => {
    setShowAnswer(false);
    setQuizStart(0);
    setScore(0);
    setAnswerBank([]);
    setResponses(1);
    console.log(answerBank);
   console.log(myCategory.length);
   console.log(responses);
  };

  // Function to compute scores
  const computeAnswer = (answer, correctAns) => {
    if (answerBank.includes(answer)) {
      Alert.alert("Warning","Question already answered");
      return;
    }
    setAnswerBank((pastAnswers) => [answer, ...pastAnswers]);
    if (answer === correctAns) {
      /*     answerBank.filter(name => name.includes(answer)).map(filteredName => (

              console.log(filteredName)


      ))*/
    //  setAnswerBank((pastAnswers) => [answer, ...pastAnswers]);
      setScore(score + 1);
      console.log(answerBank);
    }

    //subtract is question is wrong
    /* setScore(score > 1 ? score - 1 : score)
   console.log(score)*/

    if(responses === myCategory.length){
      //setQuizStart(0);
      setShowAnswer(true)
    }
    setResponses( responses + 1);
    console.log(responses);
    console.log(myCategory.length);
  };






  let content ;
  if (quizStart > 0 && showAnswer === false) {
    content = <QuizPage computeAnswer={computeAnswer} resetGame={resetGame} Category={myCategory} />;
  } else if( showAnswer === true){
    content = <Result score={score} total={responses} playAgain={resetGame}/>
  }else{
   content = <CategoryComponent onStartQuiz={startQuiz} />
  }

  return <View style={Styles.categoryScreen}>{content}</View>;
};
export default Category;
