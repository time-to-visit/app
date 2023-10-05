import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    LayoutAnimation,
    Platform,
    UIManager,
    Image
} from "react-native"

import React from "react"

import { Ionicons } from '@expo/vector-icons';
import Filter from "../dashboard/explorar/filter/filter";

if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
}



const FilterResult = ({showModal, setTitle}) => {

    const [open, setOpen] = React.useState(false)

    const onPress = () => {
        LayoutAnimation.easeInEaseOut()
        setOpen(!open)
    }

    const show =()=>{
        showModal()
        setOpen(false)
    }

    return (
        <View style={{ position: 'absolute', width: '100%', bottom: 0, zIndex: 2 }}>
            {open ? (
                <View style={styles.filterSee}>

                    <Filter
                    showModal={show}
                    setTitle={setTitle}
                     />
                   
                </View>
            ) : null}
            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={{ flex: 1 }} > 
                    <TouchableOpacity style={styles.filterRes} onPress={onPress}>
                        <Text style={styles.textFilter}>Filtrar Resultados</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.filterPlus} onPress={onPress}>
                        <Ionicons name="add-outline" size={32} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textTitle: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 5
    },
    textItem: {
        textAlign: "right",
        marginHorizontal: 10,
        fontSize: 15,
        marginVertical: 10
    },
    filterRes: {
        padding: 15,
        margin: 5,
        elevation: 10,
        backgroundColor: "#19456B",
        borderRadius: 10,
    },
    filterSee: {
        padding: 15,
        margin: 5,
        elevation: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    textFilter: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center"
    },
    filterPlus: {
        padding: 15,
        margin: 5,
        elevation: 20,
        backgroundColor: "#fff",
        borderRadius: 50,
    },
    active :{
        backgroundColor: 'gray', 
        borderWidth: 1,
        marginVertical: 10 
    },
    disactive:{ 
        borderColor: 'gray', 
        borderWidth: 1,
        marginVertical: 10 
    }
})


export default FilterResult