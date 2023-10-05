import * as React from "react"
import { Text, ScrollView, Alert } from "react-native"
import { Button } from "react-native-paper";
import TextInput from "../../Utilidades/inputs"
import styles from "./registro.styles"
import { setDataForm,setIsLoading } from "./reducer/register.reducer"
import { useSelector, useDispatch } from 'react-redux';
import LoadingModal from "../../modals/loading.modal";
import ErrorModal from "../../modals/error.modal";
import SucessModal from "../../modals/sucess.modal";
import { registerUser } from "./registro.service"
const RegistroScreen = ({
  navigation
}) => {


  const dispatch = useDispatch()

  const { 
    form,
    is
  } = useSelector(state => state.register)

  const registrarUser = async () => {
    const response = await registerUser(form)
    if (response) {
      dispatch(setIsLoading({
        type:"sucess"
      }))
    } else {
      dispatch(setIsLoading({
        type:"error"
      }))
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textTitle}>Registrate</Text>
      <TextInput
        label="Nombres"
        onChangeText={(value) => {
          dispatch(setDataForm({
            key:"nombres",
            value
          }))
        }}
        value={form.nombres}
      />
      <TextInput
        label="Apellidos"
        onChangeText={(value) => {
          dispatch(setDataForm({
            key:"apellidos",
            value
          }))
        }}
        value={form.apellidos}
      />
      <TextInput
        label="Nombre Usuario"
        onChangeText={(value) => {
          dispatch(setDataForm({
            key:"nombre_usuario",
            value
          }))
        }}
        value={form.nombre_usuario}
      />
      <TextInput
        label="Correo"
        onChangeText={(value) =>{
          dispatch(setDataForm({
            key:"correo",
            value
          }))
        }}
        value={form.correo}
      />
      <TextInput
        label="Password"
        onChangeText={(value) => {
          dispatch(setDataForm({
            key:"clave",
            value
          }))
        }}
        icon={"eye"}
        secureTextEntry={true}
        value={form.clave}
      />
      <Button icon="account-multiple-plus"
        mode="contained"
        onPress={() => {
          registrarUser()
        }}
        style={styles.btn}
        color="#19456B"
      >
        Crear Cuenta
      </Button>
      <Text style={styles.textName}
        onPress={() =>{
            registrarUser()
          }
        }
        >
        Ya tienes cuenta? Inicia Sesión
      </Text>
      <LoadingModal modalVisible={is.isLoading} event={()=>{
        dispatch(setIsLoading({
          type:""
        }))
      }} />
      <SucessModal task={{
        title:"registro exitoso"
      }} modalVisible={is.isSuccess} event={()=>{
        dispatch(setIsLoading({
          type:""
        }))
      }} />
      <ErrorModal task={{
        title:"error al registrar a la persona"
      }} modalVisible={is.isError} event={()=>{
        dispatch(setIsLoading({
          type:""
        }))
      }} />
    </ScrollView>
  );
}

export default RegistroScreen