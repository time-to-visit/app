import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native"


const FilterMunicipios = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: item.urlBandera }}
                />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={styles.text}>{item.nombre}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    container: {
        backgroundColor: "#fff",
        elevation: 10,
        margin: 10,
        flexDirection: "row",
        borderRadius: 10
    },
    image: {
        width: 80,
        height: 50,
        margin: 5,
        resizeMode: "cover"
    }
})

export default FilterMunicipios