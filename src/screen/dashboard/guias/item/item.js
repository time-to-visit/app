import React from "react"
import {
    View,
    StyleSheet,
    Image,
    Text,
    LayoutAnimation,
    Platform,
    UIManager,
    TouchableOpacity
} from "react-native"

if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
}

const Item = ({item,onPress=null})=>{
    return(
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
const ItemDepartamentos = ({ item , navigation}) => {
    const [open, setOpen] = React.useState(false)

    const onPress = () => {
        console.log("funcioan")
        LayoutAnimation.easeInEaseOut()
        setOpen(!open)
    }

    const abrirGuias = (departamento,municipio)=>{
        navigation.push("Sitios",{
            municipio,
            departamento
        })
    }

    return (
        <View>
            <Item item={item} onPress={onPress}/>
            {open && item.municipios.map((municipio)=>(
                <Item 
                key={municipio._id} 
                item={municipio}  
                onPress={()=>{
                    abrirGuias(item,municipio)
                }}
                />
            ))}
        </View>
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


export default ItemDepartamentos