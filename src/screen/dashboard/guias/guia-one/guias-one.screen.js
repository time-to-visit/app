import {
    useState, useEffect
} from "react"

import {
    ScrollView,
    Text,
    StyleSheet
} from "react-native"

import SessionsComponents from "./sessiones"
import LoadingModal from "../../../../modals/loading.modal"
import ErrorModal from "../../../../modals/error.modal"
import { setSections, setIsLoading } from "./reducer/guides-one.reduce"
import { useDispatch, useSelector } from "react-redux";
import { seeGuidesOne } from "./guias-one.service"
const GuiasOne = ({route, navigation }) => {

    const [id , setId ] = useState(0)
    const dispatch = useDispatch()
    const {
        sections,
        is
    } = useSelector(state => state.guiasOne)

    const loadData = async (params) => {
        dispatch(setIsLoading({
            type: "loading"
        }))
        const section = await seeGuidesOne(params.id)
        setId(params.id)
        dispatch(setIsLoading({
            type: ""
        }))
        dispatch(setSections(section))
    }

    useEffect(() => {
        const params = route.params
        loadData(params)
    }, [])

    return (
        <ScrollView style={{
            paddingBottom: 10
        }}>
            <Text style={sytles.title}>Guias one</Text>
            {sections.map(section => (
                <SessionsComponents navigation={navigation} section={section} idGuide={id} />
            ))}
            <LoadingModal modalVisible={is.isLoading} event={() => {
                dispatch(setIsLoading({
                    type: ""
                }))
            }} />
            <ErrorModal task={{
                title: "hubo un problema al mostrar guias, \n intenta nuevamente"
            }} modalVisible={is.isError} event={() => {
                dispatch(setIsLoading({
                    type: ""
                }))
            }} />
        </ScrollView>
    )
}

const sytles = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign: "center",
        marginVertical: 12,
        fontWeight: "bold"
    },
})

export default GuiasOne