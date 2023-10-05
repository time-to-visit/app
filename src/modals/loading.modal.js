import React from "react";
import { View, Modal, StyleSheet, Text, ActivityIndicator } from "react-native"
import LottieView from 'lottie-react-native';


const LoadingModal = ({ task, modalVisible }) => {
    const animation = React.useRef(null);
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            statusBarTranslucent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 150,
                            height: 150
                        }}
                        source={require('../../assets/lotties/anim-loading.json')}
                    />
                    {task ?
                    <Text></Text>:
                    <Text style={styles.textLoading}>Cargando ...</Text>}
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    textLoading:{
        paddingVertical:20,
        fontSize:15,
        fontWeight:"bold",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0008"
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
})

export default LoadingModal