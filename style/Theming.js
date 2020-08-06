import Colors from "./Colors";
import {StyleSheet} from "react-native";


const Styles = StyleSheet.create({
    SplashScreen: {
        flex: 1,
        backgroundColor: Colors.accent,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    splashTextWrap: {
        padding: 10,

        alignItems: "flex-start",
    },
    splashText: {
        color: Colors.black,
        textAlign: "left",
        fontFamily: "Montserrat-Black",
        fontSize: 30,
    },
    roundedImageContainer: {
        width: 250,
        height: 250,
        backgroundColor: "#F9FFC4",
        borderRadius: 125,
        overflow: "hidden",
        marginVertical: 30,
    },
    myImage: {
        width: "100%",
        height: "100%",
    },
    customButtonStyle: {
        backgroundColor: Colors.black,
        width: 150,
        padding: 12,
        borderRadius: 30,
        textAlign: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
    },
    customButtonText: {
        textAlign: "center",
        color: "white",
        fontFamily: "Montserrat-Bold",
        fontSize: 18,
    },
    iconBtn: {
        overflow: "hidden",
        borderRadius: 20,
        width: 40,
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: Colors.orange,
    },
    categoryScreen: {
        flex: 1,
    },
    categoryTextWrap: {
        paddingVertical: 30,

    },
    categoryText: {
        padding: 20,
        textAlign: "left",
        color: Colors.black,
        fontFamily: "Montserrat-Black",
        fontSize: 40,
    },
    cardsWrap: {
        flex: 1,
        alignItems: "center"
    },
    cards: {
        padding: 10,
        backgroundColor: Colors.primary,
        width: "90%",
        height: 100,
        borderRadius: 100,
        margin: 5,
        justifyContent:"space-evenly"
    },
    cardText: {
        textAlign: "center",
        fontFamily: "Montserrat-Bold",
        fontSize: 24,
        color: "white"
    },
    arrow:{
        paddingHorizontal:20,
alignItems:"flex-end"
    },
    navItem: {
        width: 150,
        height: 40,
        alignItems: "center",
        padding: 10,
    },

    //quiz page
    QuizPage: {
        flex: 1,
        padding: 15
    },
    questionWrap: {

        alignItems: "center"
    },
    questionContainer: {
width: "100%",

    },
    questionCard: {
        padding: 10,
        backgroundColor:Colors.primary,
        width: "90%",
        height: 50,
        borderRadius: 50,
        margin: 5,
    },
    answersWrap:{
        padding:5,
        minWidth: "50%",
        flexDirection: "column"
    },
    answerText:{
        padding: 3,
        fontFamily: "Monteserrat-SemiBold",
        fontSize:15,
        color:Colors.black,
    },
    answerBtn:{
        padding: 10,
        backgroundColor:"white",
        borderRadius: 20,
        margin: 5,

    },
    questionText:{
        textAlign: "center",
        fontFamily: "Montserrat-Bold",
        fontSize: 15,
        textTransform:'capitalize',
        color:"white",
    },
    wrap:{
        padding:5,
        alignItems:"center",
      flexDirection:"row",
       width: "100%",
        justifyContent:"space-between",
    },
    quizPageText: {
        color: Colors.black,
        fontSize: 38,
        fontFamily: "Montserrat-Bold",
        paddingVertical: 30,
    },
    scoreBoard:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gameOverTxt:{
      fontSize:24,
        padding:10,
        textAlign:"center",
      fontFamily:"Montserrat-Bold",
    },
    startAgainBtn:{
        alignItems:'center',
        justifyContent:'center'
    }
});

export default Styles;
