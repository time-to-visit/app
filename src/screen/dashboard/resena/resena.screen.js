import {
    React, useEffect, useState
} from "react"

import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native"
import CommentsScreen from "./comments/comments"
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux";
import { setComment, setComments, setIsLoading } from "./reducer/resena.reducer"
import { seeComment, generateComment } from "./resena.service";
import LoadingModal from "../../../modals/loading.modal";
import ErrorModal from "../../../modals/error.modal";

const ReviewScreen = ({ route, navigation }) => {

    const [siteID, setSiteId] = useState(0)
    const [routeID, setRouteId] = useState(0)

    const dispatch = useDispatch()
    const {
        textComment,
        comments,
        is
    } = useSelector(state => state.review)

    const reloadData = async (params) => {
        dispatch(setIsLoading({
            type: "loading"
        }))
        const comment = await seeComment({
            type: params.type,
            siteID: params?.data?.id,
            routeID: params.routeID
        })

        dispatch(setIsLoading({
            type: ""
        }))
        dispatch(setComments(comment))
        setSiteId(params?.data?.id)
        setRouteId(params.routeID)
        console.log(comment)
    }

    const addComment = async () => {
        dispatch(setIsLoading({
            type: "loading"
        }))
        let data = {}
    
        if (siteID) {
            data = {
                type: "sites",
                review: {
                    comment: textComment,
                    valoracion: "5.0",
                    sites_id: siteID
                }
            }
        } else {
            data = {
                type: "route",
                review: {
                    description: textComment,
                    star: "5.0",
                    routes_id: routeID,
                    state: "ACTIVE"
                }
            }
        }
        const ok = await generateComment(data)
        dispatch(setIsLoading({
            type: ""
        }))
        if (ok) {
            reloadData({
                type: data.type,
                data: {
                    id: siteID,            
                },
                routeID: routeID
            })
        } else {
            dispatch(setIsLoading({
                type: "error"
            }))
        }
    }

    useEffect(() => {

        const params = route.params
        reloadData(params)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View style={style.containerText}>
                <Text style={style.title}>Comentarios</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>
                {comments.map(comment => (
                    <CommentsScreen comment={comment} />
                ))}
            </ScrollView>
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    style={{ flex: 1 }}
                    label="Comentario"
                    value={textComment}
                    onChangeText={text => dispatch(setComment(text))}
                />
                <Button icon={"send"} mode={"contained"} color={"#ccc"} style={{ paddingTop: 10 }} onPress={() => {
                    addComment()
                }}></Button>
                <LoadingModal modalVisible={is.isLoading} event={() => {
                    dispatch(setIsLoading({
                        type: ""
                    }))
                }} />
                <ErrorModal task={{
                    title: "hubo un problema al registrar el comentario, \n intenta nuevamente"
                }} modalVisible={is.isError} event={() => {
                    dispatch(setIsLoading({
                        type: ""
                    }))
                }} />
            </View>
        </View>
    )
}


export default ReviewScreen



const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    containerText: {
        paddingHorizontal: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
        paddingVertical: 10,
        textAlign: "center"
    },
    Subtitle: {
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic",
        paddingVertical: 8,
    },
    text: {
        textAlign: "justify"
    },
    image: {
        width: 50,
        height: 50
    }
})