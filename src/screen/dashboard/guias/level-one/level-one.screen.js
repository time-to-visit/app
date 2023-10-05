
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { useState , useEffect } from 'react';
import ErrorModal from "../../../../modals/error.modal";
import LoadingModal from "../../../../modals/loading.modal";
import { seeLevelOne } from "./level-one.service";
import { setContainerLevels, setIsLoading, setTitle } from "./reducer/level-one.reducer"
import { Button } from "react-native-paper"
const LevelOne = ({ route, navigation }) => {


    const customItem = (container) => {
        switch (container.type) {
            case "TITLE":
                return (
                    <View>
                        <Text style={styles.textTitle}>{container.container}</Text>
                    </View>
                )
            case "SUBTITLE":
                return (<Text style={styles.textSuTitle}>{container.container}</Text>)
            case "TEXT":
                return (<Text style={styles.text}>{container.container}</Text>)
            case "IMAGE":
                return (<Image style={styles.img} source={{ uri: container.container }} />)
        }
    }

    const [idGuide, setIdGuide] = useState(0)

    const dispatch = useDispatch()

    const loadData = async (params) => {
        dispatch(setIsLoading({
            type: "loading"
        }))
        const container = await seeLevelOne(params.id)
        dispatch(setIsLoading({
            type: ""
        }))
        dispatch(setTitle(params.name))
        setIdGuide(params.idGuide)
        dispatch(setContainerLevels(container))
    }

    useEffect(() => {
        const params = route.params
        loadData(params)
    }, [])


    const {
        containerLevel,
        is,
        title
    } = useSelector(state => state.levelsOne)

    return (
        <ScrollView>
            <Text style={styles.textTitleMain}>{title}</Text>
            <Button onPress={() => {
                navigation.navigate("Objective", {
                    id: containerLevel[0].level_id,
                    idGuide,
                })
            }}>Hacer Preguntar</Button>
            {containerLevel.map(container => (
                customItem(container)
            ))}
            <Button onPress={() => {
                navigation.navigate("Objective", {
                    id: containerLevel[0].level_id,
                    idGuide,
                })
            }}>Hacer Preguntar</Button>
            <LoadingModal modalVisible={is.isLoading} event={() => {
                dispatch(setIsLoading({
                    type: ""
                }))
            }} />
            <ErrorModal task={{
                title: "hubo un problema al mostrar levels, \n intenta nuevamente"
            }} modalVisible={is.isError} event={() => {
                dispatch(setIsLoading({
                    type: ""
                }))
            }} />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    textTitleMain: {
        fontSize: 25,
        textAlign: "center",
        marginVertical: 10,

        fontWeight: "bold"
    },
    textTitle: {
        fontSize: 22,
        marginHorizontal: 10,
        marginVertical: 5,
        fontWeight: "bold"
    },
    textSuTitle: {
        fontSize: 16,
        marginHorizontal: 10,
        marginVertical: 5,
        fontWeight: "bold"
    },
    text: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    img: {
        height: 300
    }
})


export default LevelOne