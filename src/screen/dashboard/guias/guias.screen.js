import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native'
import ItemGuias from './item/item-guias'
import { useDispatch, useSelector } from "react-redux";
import LoadingModal from '../../../modals/loading.modal';
import ErrorModal from '../../../modals/error.modal';
import { useEffect } from 'react';
import { seeGuides } from './guias.service';
import { setGuides, setIsLoading } from './reducer/guias.reducer';


const GuiasScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const {
        guides,
        is
    } = useSelector(state => state.guias)


    const loadContent = async () => {
        dispatch(setIsLoading({
            type: "loading"
        }))
        const guide = await seeGuides()
        dispatch(setIsLoading({
            type: ""
        }))
        dispatch(setGuides(guide))
    }

    useEffect(() => {
        loadContent()
    }, [])

    return (
        <View>
            <ScrollView  >
                <Text style={styles.textTitle}>Guias Turisticas</Text>
                {guides.map((guide => (
                    <ItemGuias key={guide.id} navigation={navigation} guide={guide} />
                )))}
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
        </View>
    )
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 25,
        textAlign: "center",
        marginVertical: 10,
        fontWeight: "bold"
    }
})


export default GuiasScreen