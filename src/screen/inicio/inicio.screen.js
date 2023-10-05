import * as React from "react"
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native"
import { Button } from "react-native-paper"
import { useFonts } from 'expo-font';


const InicioScreen = ({ navigation }) => {

  const [loaded] = useFonts({
    Honey: require('../../../assets/fonts/Honey.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../../assets/bg-ini.png")} style={{ flex: 1 }}>
        <View style={{ flex: 1, justifycontent: "center" }} >
          <Text style={styles.textTitle}>Time To Visit</Text>
        </View>
        <View style={styles.containerImg}>
          <Image source={require("../../../assets/icono.png")} style={styles.img} />
        </View>
        <View style={styles.containerCard}>
          <Button
            icon="account"
            mode="contained"
            style={{}}
            onPress={() => navigation.navigate("Login")}
            style={styles.btn}
            color="#19456B"
          >
            Inicia Sesion
          </Button>
          <Button
            icon="account-multiple-plus"
            mode="contained"
            onPress={() => navigation.navigate("Registro")}
            style={styles.btn}
            color="#19456B"
          >
            Registrate
          </Button>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textTitle: {
    fontFamily: "Honey",
    fontSize: 60,
    textAlign: "center",
    marginTop: 100,
    color: "#fff"
  },
  img: {
    width: 300,
    height: 250
  },
  containerImg: {
    alignItems: "center",
    flex: 2,
    justifyContent: "center"
  },
  containerCard: {
    flex: 2,
    justifyContent: "center"
  },
  btn: {
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    padding: 5,
    elevation: 5
  }
})


export default InicioScreen