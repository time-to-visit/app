import {
    React
} from "react"


import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native"


const CommentsScreen = ({comment}) => {
    return (
        <View style={styles.bgContainer}>
            <Image style={styles.img} source={require("../../../../../assets/icons/hombre.png")} />
            <View style={styles.containerCommets}>
                <Text style={styles.textTitle}>{comment.user_nombre?.toLowerCase()}</Text>
                <Text style={styles.textComment}>{comment.comment}</Text>
            </View>
        </View>
    )
}



export default CommentsScreen


const styles = StyleSheet.create({
    bgContainer: {
        flexDirection: "row",
    },
    img: {
        width: 50,
        height: 50
    },
    containerCommets:{
        margin:5,
        flex:1,
        backgroundColor:"#ccc",
        padding:5,
        borderRadius:5
    },
    textTitle:{
        fontWeight:"bold",
        fontSize:18,
        textAlign:"justify"
    } ,
    textComment :{
        textAlign:"justify", 
        fontSize:14
    }
})