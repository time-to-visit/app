import React from "react";

import {
    ScrollView,
    SafeAreaView,
    Text,
    StyleSheet,
    Dimensions,
    View,
    Image,
    ImageBackground,TouchableOpacity
} from "react-native"

import {
    Button,
    Provider,
    Modal,
    Portal
} from "react-native-paper";
import Carousel from 'react-native-reanimated-carousel';
import * as Linking from 'expo-linking';


const ModalConctact = ({
    visible,
    hideModal,
    contacts
}) => {
    const containerStyle = { backgroundColor: 'white', padding: 20, height: 400, zIndex: 1000 };
    const openPhoneApp = async (phoneNumber) => {
        const phoneUrl = `tel:${phoneNumber}`;
    
        const supported = await Linking.canOpenURL(phoneUrl);
    
        if (supported) {
          await Linking.openURL(phoneUrl);
        } else {
          console.log(`No se puede abrir la aplicación de teléfono: ${phoneUrl}`);
        }
      };
    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <ScrollView>
                        <Button
                            icon="tune"
                            mode="outlined"
                            color="#19456B"
                            onPress={(e) => {
                                hideModal()
                            }}
                        >
                            Cerrar
                        </Button>
                        {contacts.map(contact => (
                            <TouchableOpacity key={contact.id} style={{
                                margin:10,
                                padding:10,
                                flexDirection: "row",
                                paddingHorizontal: 10,
                                backgroundColor:"#fff",
                                elevation:5,
                                borderRadius:20
                            }}
                                onPress={()=>{
                                    console.log("presionado")
                                    openPhoneApp(contact.numero)
                                }}
                            >
                                <Image style={style.image} source={contact.is_wp ? require("../../../../assets/icons/whatsapp.png") : require("../../../../assets/icons/llamada.png")} />
                                <View style={{
                                    marginHorizontal:10
                                }}>
                                    <Text style={style.text}>{contact.nombre}</Text>
                                    <Text style={style.text}>{contact.numero}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </Modal>
            </Portal>
        </Provider>
    );
}


const SitesScreen = ({ route, navigation }) => {

    const [visible, setVisible ] = React.useState(false)

    const site = route.params

    const width = Dimensions.get('window').width;
    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={style.scrollView}>
                <View style={style.containerText}>
                    <Text style={style.title}>{site.nombre}</Text>
                </View>
                {site.resource.length > 0 ? (
                    <Carousel
                        data={site.resource}
                        width={width}
                        height={width / 2}
                        renderItem={({ index, item }) => (
                            <View
                                style={{
                                    flex: 1,
                                    borderWidth: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                <ImageBackground resizeMode="cover" source={{ uri: item.payload }} style={{ flex: 1, backgroundColor: "red" }} >
                                </ImageBackground>
                            </View>
                        )}

                        onSnapToItem={(index) => console.log('current index:', index)}
                        autoPlay={true}
                        scrollAnimationDuration={1000}
                    />) : (
                    <View style={style.containerText}>
                        <Text>Lo sentimos este sitio no cuenta con recursos importantes ...</Text>
                    </View>)
                }
                <View style={style.containerText}>

                    <Text style={style.Subtitle}>Dirrecion</Text>
                    <Text>{site.dirrecion}</Text>
                    <Text style={style.Subtitle}>Descripcion</Text>
                    <Text style={style.text}>{site.descripcion}</Text>
                    <Text style={style.Subtitle}>Categorias</Text>
                    <View style={{
                        flexDirection: "row",
                        paddingHorizontal: 10,
                    }}>
                        <Image style={style.image} source={{ uri: site.category.url_imagen }} />
                        <Text style={{ ...style.text, margin: 10 }}>{site.category.nombre}</Text>
                    </View>
                    <Button onPress={() => {
                    setVisible(true)
                }}>Ver Conctatos</Button>
                </View>
                <Button onPress={() => {
                    navigation.navigate("Review", {
                        type: "sites",
                        data: site
                    })
                }}>Ver Comentarios</Button>
            </ScrollView>
            <ModalConctact  
                visible={visible}
                hideModal={()=>{
                    setVisible(false)
                }}
                contacts={site.contacts}
            />
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    containerText: {
        paddingHorizontal: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
        paddingVertical: 10,
        textAlign: "center",
        marginTop: 30,
        marginBottom: 10
    },
    Subtitle: {
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic",
        paddingVertical: 8,
    },
    text: {
        textAlign: "justify"
    },
    image: {
        width: 50,
        height: 50
    }
})



export default SitesScreen