import { React } from "react"
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from "react-native"


const ActivitiesScreen = () => {
    return (
        <View>
            <ScrollView>
                <Text style={styles.title}>Activities</Text>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign: "center",
        marginVertical: 10,
        fontWeight: "bold"
    },
    cardQuestion: {
        backgroundColor: "#fff",
        margin: 10,
        borderRadius: 10,
        elevation: 3,
        padding: 10
    },
    cardAnswer: {
        margin: 10,
        marginHorizontal: 30
    }
})


export default ActivitiesScreen