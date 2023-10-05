import React from "react";
import { View, Modal, StyleSheet, Text, ActivityIndicator } from "react-native"
import LottieView from 'lottie-react-native';
import { Button } from "react-native-paper";

const ErrorModal = ({ task, modalVisible ,event }) => {
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
                        source={require('../../assets/lotties/error.json')}
                    />
                    {task ?
                    <Text style={styles.textLoading}>{task.title}</Text>:
                    <Text style={styles.textLoading}>Cargando ...</Text>}
                    <Button
                                mode="outlined"
                                onPress={() => {  event()  }}
                                style={{
                                    margin:10
                                }}
                                color="#19456B"
                            >
                               Cerrar
                            </Button>
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
        textAlign:"center"
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

export default ErrorModal