import React from 'react'
import {
    View,
    StyleSheet
} from "react-native"
import {
    TextInput
 } from "react-native-paper"

const SearchFilter = () => {
    return (
        <View style={styles.container}>
            <TextInput
                mode="outlined"
                style={styles.textSearh}
                right={<TextInput.Icon name="magnify" />}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        elevation: 1,
        backgroundColor:"#fff",
        width:"90%",
        alignSelf:"center",
        margin:10,
         position:"absolute",
         top:0
    },
    textSearh:{
        margin:10
    }
})


export default SearchFilter