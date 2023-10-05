import React from "react";

import {
    View,
    StyleSheet,
} from "react-native"
import { Button } from 'react-native-paper';

const FilterData = ({showModal,setTitle}) => {

   
 

    return (
        <View>
            <Button
                icon="tune"
                mode="outlined"
                color="#19456B"
                onPress={(e)=>{
                    setTitle("categoria")
                    showModal()
                }}
            >
                Categoria
            </Button>
            <Button
                icon="tune"
                mode="outlined"
                color="#19456B"
                onPress={(e)=>{
                    setTitle("subcategoria")
                    showModal()
                }}
            >
                SubCategoria
            </Button>
            <Button
                icon="tune"
                mode="outlined"
                color="#19456B"
                onPress={(e)=>{
                    setTitle("municipio")
                    showModal()
                }}
            >
                Municipio
            </Button>
            
        </View>
    )
}

const styles = StyleSheet.create({

})


export default FilterData