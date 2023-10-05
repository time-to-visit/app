import React from "react"
import { 
    View,
} from "react-native"
import { useDispatch } from 'react-redux';
import {  setClose } from "../../login/reducer/login.reducer"
import AsyncStorage from '@react-native-async-storage/async-storage';


const CerrarSession = ({
    navigation
})=>{

    const dispatch = useDispatch()


    React.useEffect(()=>{
        AsyncStorage.removeItem("token")
        dispatch(setClose())
    },[])

    return(
        <View>

        </View>
    )
}


export default CerrarSession