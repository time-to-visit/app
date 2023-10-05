import {
    useState, useEffect
} from "react"

import {
    ScrollView,
    Text,
    StyleSheet,
} from "react-native"
import { useDispatch, useSelector } from "react-redux";
import ItemLevel from "./item"
import { seeLevel } from "./level.service";
import { setLevels , setIsLoading } from "./reducer/level.reducer";
import LoadingModal from "../../../../modals/loading.modal";
import ErrorModal from "../../../../modals/error.modal";

const Level = ({ route, navigation }) => {

    const dispatch = useDispatch()

    const [idGuide , setIdGuide ] = useState(0)

    const {
        levels,
        is
    } = useSelector(state => state.levels)

    const loadData = async (params)=>{
        dispatch(setIsLoading({
            type: "loading"
        }))

        const levels = await seeLevel(params.id)
        setIdGuide(params.idGuide)
        dispatch(setIsLoading({
            type: ""
        }))
        dispatch(setLevels(levels))
    }

    useEffect(()=>{
        const params=route.params
        console.log(params)
        loadData(params)
    },[])
    return (
        <ScrollView>
            <Text style={style.title}>Niveles</Text>
            {levels.map(level => (
                <ItemLevel navigation={navigation} level={level} idGuide={idGuide} />
            ))}
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


export default Level


const style = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 12,
        fontWeight: "bold"
    }
})