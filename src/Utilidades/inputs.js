import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"

const Input = ({ label, onChangeText, icon = null, secureTextEntry = false, value="" }) => {
    return (
        <View style={styles.inputGroup}>
            <Text style={styles.textName}>{label}</Text>
            <TextInput
                mode="outlined"
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                right={(icon)?<TextInput.Icon name={icon} />:null}
                value={value}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    textName: {
        fontWeight: "bold"
    },
    inputGroup: {
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff'
    }
})



export default Input