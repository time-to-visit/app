import {
    React
} from "react"

import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native"

import { Button } from "react-native-paper"
import { Rating } from "react-native-ratings"
import { useDispatch, useSelector } from "react-redux";


const ItemLevel = ({ navigation, level, idGuide }) => {

    const {
        userID,
        progress
    } = useSelector(state => state.login)
    
    const progressStarting = ()=>{
        const progressStep =  progress.find(pro => pro.primary_id === level.id && pro.type == "level" )
        console.log(progressStep)
        return progressStep?.score ?? 0
    }

    return (
        <View style={style.cardSection}>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={style.subTitle}>{level.title}</Text>
                <Rating style={{ marginVertical: 5, marginHorizontal: 5 }}
                    startingValue={progressStarting()}
                    readonly={true}
                    imageSize={20}
                />
            </View>
            <View style={style.row}>
                <Image style={style.img} source={{ uri: level.cover }} />
                <Text style={style.text}>{level.description}</Text>
            </View>
            <Button
                mode="outlined"
                onPress={() => {
                    navigation.navigate("LevelUni", {
                        id: level.id,
                        name: level.title,
                        idGuide
                    })
                }}
                style={style.btn}
                color="#19456B"

            >
                Ver mas
            </Button>
        </View>
    )
}


const style = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 12,
        fontWeight: "bold"
    },
    subTitle: {
        fontSize: 15,
        marginVertical: 5,
        marginHorizontal: 10,
        fontWeight: "bold"
    },
    cardSection: {
        backgroundColor: "#fff",
        padding: 10,
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 4
    },
    row: {
        flexDirection: "row"
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 100
    },
    text: {
        flex: 1,
        textAlign: "justify",
        margin: 10
    },
    btn: {
        margin: 5,
    },
})

export default ItemLevel