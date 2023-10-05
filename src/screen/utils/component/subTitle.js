import React from 'react';

import {
    Text,
    StyleSheet
} from "react-native"

const SubTitle = ({ 
    text
})=>{
    return(
        <Text style={styles.title}>{text}</Text>
    )
}


const styles = StyleSheet.create({
    title:{
        fontWeight:"bold",
        color:"#19456B",
        fontSize:20,
        marginVertical: 10,
        marginHorizontal: 10,
        textDecorationLine:"underline"
    }
})

export default SubTitle