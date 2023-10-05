import * as React from "react"
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native"
import { TextInput, Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from "./login.service";
import LoadingModal from "../../modals/loading.modal";
import ErrorModal from "../../modals/error.modal";
import SucessModal from "../../modals/sucess.modal";
import { setDataForm, setIsLoading ,setProgres, setAuth } from "./reducer/login.reducer"

const LoginScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const { form, is  } = useSelector(state => state.login)

  const setData = ({
    key, value
  }) => {
    dispatch(setDataForm({
      key,
      value
    }));
  }

  const loginUsuario = async () => {
    dispatch(setIsLoading({
      type:"loading"
    }))
    const response = await loginUser(form)
    dispatch(setIsLoading({
      type:""
    }))
    if (response.is_ok) {
      dispatch(setAuth(true))
      dispatch(setProgress({
        progress:response.progress,
        userID:response.userID
      }))
      navigation.navigate("Dashboard",{
        type:"sucess"
      })
    } else {
      dispatch(setIsLoading({
        type:"error"
      }))
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={{ ...styles.textTitle, marginTop: 20 }}>Bienvenido</Text>
      <Text style={{ ...styles.textTitle, marginBottom: 30 }}>a Time to Visit</Text>
      <View style={{ paddingVertical: 20, paddingHorizontal: 15 }}>
        <View style={styles.inputGroup}>
          <Text>Correo</Text>

          <TextInput
            mode="outlined"
            right={<TextInput.Affix text="/100" />}
            value={form.correo}
            onChangeText={(value) => {
              setData({
                key: "correo",
                value: value
              })
            }}
          />

        </View>
        <View style={styles.inputGroup}>

          <Text>Contraseña</Text>

          <TextInput
            secureTextEntry={true}
            mode="outlined"
            right={<TextInput.Icon name="eye" />}
            value={form.clave}
            onChangeText={(value) => {
              setData({
                key: "clave",
                value
              })
            }}
          />

        </View>
        <View style={styles.inputGroup}>
          <Button icon="account-multiple-plus"
            mode="contained"
            onPress={() => { loginUsuario() }}
            style={styles.btn}
            color="#19456B"
          >
            Ingresar
          </Button>

          <View style={{ flexDirection: "row", paddingVertical: 10 }}>
            <Text style={styles.textRegistrate}>no tienes cuenta?</Text>
            <Text style={{ ...styles.textRegistrate, fontWeight: "bold" }} onPress={() => navigation.navigate("Registro")}> Registrate</Text>
          </View>

        </View>
      </View>
      <LoadingModal modalVisible={is.isLoading} event={()=>{
        dispatch(setIsLoading({
          type:""
        }))
      }} />
      <ErrorModal task={{
        title:"hubo un problema al logearse, \n intenta nuevamente"
      }} modalVisible={is.isError} event={()=>{
        dispatch(setIsLoading({
          type:""
        }))
      }} />
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  inputGroup: {
    paddingVertical: 10
  },
  btn: {
    marginVertical: 15,
    borderRadius: 10,
    padding: 5
  },
  textTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#19456B",
  },
  textRegistrate: {
    fontSize: 18
  }
})

export default LoginScreen