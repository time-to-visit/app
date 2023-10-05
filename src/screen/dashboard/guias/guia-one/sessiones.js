import React from "react";

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform,
    LayoutAnimation,
    UIManager,
} from "react-native"


import { Rating } from 'react-native-ratings';

import { Button } from 'react-native-paper';


if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
}

const divideSection = (arr) => {
    let index = 0
    if (arr) {
        const divide = arr.reduce((acu, act) => {
            if (index % 2 == 0) {
                acu.push([act])
            } else {
                acu[acu.length - 1].push(act)
            }
            index++
            return acu
        }, [])
        return divide
    }
    return []
}


const SessionsComponents = ({ navigation, section ,idGuide }) => {

    const [open, setOpen] = React.useState(false)

    return (
        <View>
            <TouchableOpacity style={styles.cardSection} onPress={() => {
                LayoutAnimation.easeInEaseOut()
                setOpen(!open)
            }} >
                <Image style={styles.image} source={{ uri: section?.cover }} />
                <View  style={{
                    flex:1
                }} >
                    <Text style={styles.title}>{section.name}</Text>
                </View>
            </TouchableOpacity>
            {
                open ? divideSection(section.categories).map((categories) => (
                    <View style={styles.cardCategory} key={JSON.stringify(categories)}>
                        {categories.map(categorie => (
                            <View key={categorie.id} style={styles.column} >
                                <Text style={styles.titleCategory} >{categorie.name}</Text>
                                <Image
                                    style={styles.imageCategory}
                                    source={{ uri: categorie.cover}}
                                />
                                <Button
                                    mode="outlined"
                                    onPress={() => { navigation.navigate("Level",{
                                        id:categorie.id,
                                        idGuide,
                                    }) }}
                                    style={styles.btn}
                                    color="#19456B"

                                >
                                    Ver mas
                                </Button>
                            </View >
                        ))}
                    </View>
                )) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        margin: 5,
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 12,
        fontWeight: "bold"
    },
    cardSection: {

        flex:1,
        flexDirection: "row",
        flexWrap:"wrap",
        backgroundColor: "#fff",
        padding: 10,
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 4,
        alignContent:"center"
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginHorizontal: 10,
        
    },
    imageCategory: {
        width: 100,
        height: 100,
        borderRadius: 120,
        marginVertical: 10,
        alignSelf: "center"
    },
    cardCategory: {
        marginTop: 1,
        justifyContent: "center",
        flexDirection: 'row',
        flexWrap:"wrap",
        backgroundColor: "#fff",
        marginHorizontal: 15
    },
    column: {
        flex: 1
    },
    titleCategory: {
        fontSize: 18,
        marginTop: 10,
        textAlign: "center",
        fontWeight: "bold"
    }
})

export default SessionsComponents