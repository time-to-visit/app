import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';
import ItemRuta from './item.rutas.screen';
import { useDispatch, useSelector } from "react-redux";
import LoadingModal from '../../../modals/loading.modal';
import ErrorModal from '../../../modals/error.modal';
import { useEffect } from 'react';
import { seeRutas } from './rutas.service';
import { setIsLoading, setRoutes } from "./reducer/rutas.reducer"

const RutasScreen = ({ navigation }) => {


    const dispatch = useDispatch()
    const {
        routes,
        is
    } = useSelector(state => state.routes)

    const {
        progress,
        userID
      } = useSelector(state => state.login)



    const loadData = async () => {
        dispatch(setIsLoading({
            type: "loading"
        }))
        const route = await seeRutas()
        dispatch(setIsLoading({
            type: ""
        }))
        dispatch(setRoutes(route))
    }

    useEffect(() => {
        loadData()
    }, [])
    return (
        <View>

            <ScrollView  >
                <Text style={styles.textTitle}>Rutas Turisticas</Text>
                {routes.map((route,key) => (
                    <ItemRuta key={key} navigation={navigation} route={route} progress={progress} />
                ))}
                <LoadingModal modalVisible={is.isLoading} event={() => {
                    dispatch(setIsLoading({
                        type: ""
                    })) 
                }} />
                <ErrorModal task={{
                    title: "hubo un problema al mostrar las rutas, \n intenta nuevamente"
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

export default RutasScreen