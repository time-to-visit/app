import React from "react"
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
} from "react-native"
import LoadingModal from "../../../modals/loading.modal"
import ErrorModal from "../../../modals/error.modal"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { setIsLoading , setAnswer,  setObjective, setQuestion} from "./reducer/preguntas.reducer"
import { setAnswers } from "../objectives/reducer/objectives.reducer"
const PreguntasScreen = ({ route, navigation }) => {

    const dispatch = useDispatch()
    const [id, setId] = React.useState(1)
    useEffect(()=>{
        const params = route.params
        setId(params.idLevel)
        dispatch(setQuestion(params.questions))
        dispatch(setAnswer(params.answer))
        dispatch(setObjective(params))
    },[])


    const {
        answer,
        questions,
        objective,
        is
    } = useSelector(state => state.question)
    return (
        <View>
            <ScrollView>
                <Text style={styles.title}>Trivia</Text>
                <View style={styles.cardQuestion}>
                    <Text>{answer}</Text>
                </View>
                {questions.map((question,key) => (
                    <TouchableOpacity key={key} style={styles.cardAnswer}  onPress={() => {
                        console.log("objective id =>" + objective.id)
                        dispatch(setAnswers({
                            id:objective.id,
                            ans:  (question.is_true == "true")
                        }))
                        navigation.navigate("Objective",{id})
                    }}>
                    {question.type == "TEXT" ? (
                        <Text style={{
                            margin:10,
                        }}>{question.request}</Text>

                    ): 
                        <Image style={{
                            height:200,
                            borderRadius:10
                        }} source={{
                            uri:question.request,
                          }} />
                    }
                    </TouchableOpacity>
                ))}
                <LoadingModal modalVisible={is.isLoading} event={() => {
                    dispatch(setIsLoading({
                        type: ""
                    }))
                }} />
                <ErrorModal task={{
                    title: "hubo un problema al mostrar las questions, \n intenta nuevamente"
                }} modalVisible={is.isError} event={() => {
                    dispatch(setIsLoading({
                        type: ""
                    }))
                }} />
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign: "center",
        marginVertical: 10,
        fontWeight: "bold"
    },
    cardQuestion: {
        backgroundColor: "#ccc",
        margin: 10,
        borderRadius: 10,
        elevation: 3,
        padding: 10
    },
    cardAnswer: {
        margin: 10,
        backgroundColor:"#fff",
        borderRadius:10,
        elevation:6
    }
})

export default PreguntasScreen