import React from "react"
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native"
import { Button } from "react-native-paper"
import LoadingModal from "../../../modals/loading.modal"
import ErrorModal from "../../../modals/error.modal"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { seeObjectives } from "./objectives.service"
import { setObjectives, setIsLoading, cleanAnswer } from "./reducer/objectives.reducer"
import { progressRoute } from "../rutas/rutas.service"
import { setProgress } from "../../login/reducer/login.reducer"


const ObjectivesScreen = ({ route, navigation }) => {


    const dispatch = useDispatch()
    const [id, setId] = React.useState(0)
    const [idGuide, setIdGuide] = React.useState(0)

    const {
        objectives,
        is,
        answers
    } = useSelector(state => state.objectives)

    const {
        userID
    } = useSelector(state => state.login)

    const loadData = async (params) => {
        dispatch(setIsLoading({
            type: "loading"
        }))
        const objective = await seeObjectives(params.id)
        setId(params.id)
        setIdGuide(params.idGuide)
        dispatch(setIsLoading({
            type: ""
        }))
        dispatch(setObjectives(objective))
    }

    useEffect(() => {
        const params = route.params
        loadData(params)
    }, [])


    const isColor = (id) => {
        console.log("ansvwes", answers)
        console.log("ansvwes", id)

        const answer = answers.filter(ans => (ans.id === id))
        if (answer.length === 0 ) {
            return "#68739b"
        }
        if (answer[0].ans) {
            return "#008f39"
        }

        return "#CB3234"
    }

    return (
        <View>
            <ScrollView>
                <Text style={styles.title}>Objectivos</Text>
                {objectives.map((objective, key) => (
                    <Button key={key} style={styles.cardAnswer} color={isColor(objective.id)} icon={"question"} mode="contained" onPress={() => {
                        if(isColor(objective.id) ===  "#68739b" ){
                            navigation.navigate("Question", {
                                ...objective,
                                idLevel:id,
                            })
                        }
                    }
                    }>
                        {objective.question}
                    </Button>
                ))}
                <Button  style={styles.cardAnswer} color="#68739b" icon={"question"} mode="contained" onPress={async () => {
                    let quantityGood = 0
                    objectives.forEach(objective => {
                        if(isColor(objective.id) === "#008f39") quantityGood++
                    });
                    console.log("good => " + quantityGood)
                    console.log("objective => " + objectives.length)

                    const rating = (quantityGood/ objectives.length)*5
                    const progress =await progressRoute({
                        type:"level",
                        primary_id:id,
                        secondary_id:1,
                        user_id:userID,
                        score:rating.toString()
                    })
                    dispatch(setProgress({
                        userID,
                        progress,
                    }))
                    dispatch(cleanAnswer())
                    navigation.replace("GuidesUni",{
                        id:idGuide
                    })
                }}>
                        Terminar Test
                    </Button>
                <LoadingModal modalVisible={is.isLoading} event={() => {
                    dispatch(setIsLoading({
                        type: ""
                    }))
                }} />
                <ErrorModal task={{
                    title: "hubo un problema al mostrar los objectivos, \n intenta nuevamente"
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
        backgroundColor: "#fff",
        margin: 10,
        borderRadius: 10,
        elevation: 3,
        padding: 10
    },
    cardAnswer: {
        margin: 10,
        marginHorizontal: 30
    }
})

export default ObjectivesScreen