import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

const TouchableImage = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.textDescription}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginHorizontal: 15,
        marginVertical: 20,
        padding: 20,
        borderRadius: 10,
        elevation: 10
    },
    textDescription: {
        marginTop: 50,
        color: "#19456B",
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default TouchableImage