import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, BackButton } from 'react-router-native'
import Splash from './Components/Splash';
import Colors from './style/Colors';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Category from './Components/pages/Category';

const fetchFont = () =>{
 return Font.loadAsync({
    "Montserrat-Black": require("./assets/Fonts/Montserrat-Black.ttf"),
    "Montserrat-Bold": require("./assets/Fonts/Montserrat-Bold.ttf"),
    "Monteserrat-SemiBold": require("./assets/Fonts/Montserrat-SemiBold.ttf"),
    "Monteserrat-Medium": require("./assets/Fonts/Montserrat-Medium.ttf"),
  });
}



export default function App() {
  const [category, setCategory]= useState(false)
  const [score, setScore] = useState(0)

  const [dataLoaded, setDataLoaded] = useState(false)
   //this condition if false loads the AppLoading coponentt in place of the App component
  //untill the data we want to load finishes (e.g fetchFont) then onFinish sets our condition to true
  if (!dataLoaded) {
    return (
      <AppLoading startAsync={fetchFont} onFinish={() => setDataLoaded(true)} 
      onError={(error) => console.log(error)}/>
    );
  }

let Content = <Splash onStartQuiz={setCategory}/>

if(category){
  Content = <Category/>
}

  return (
/*   
<NativeRouter>

     <View style={styles.container}>
       <BackButton />
     <Route  path='/questions' component = {Questions} /> 
      <Route exact path='/' component = {Splash} /> 
      <Route exact path='/Category' component = {Category} /> 
   
     </View>
       
</NativeRouter>
 */
 <View style={styles.container}>
{Content}
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:15,
    backgroundColor: Colors.accent,

  },
});
