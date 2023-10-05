import React from 'react';

import {
    Text,
    StyleSheet
} from "react-native"

const Title = ({ 
    text
})=>{
    return(
        <Text style={styles.title}>{text}</Text>
    )
}


const styles = StyleSheet.create({
    title:{
        textAlign:"center",
        fontWeight:"bold",
        color:"#19456B",
        fontSize:30,
        marginVertical: 15,
        textDecorationLine:"underline"
    }
})

export default Title