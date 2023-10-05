import React from "react"
import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native"
import { Button } from 'react-native-paper';
import * as Linking from 'expo-linking';
import { progressRoute } from "./rutas.service";
import { setProgress } from "../../login/reducer/login.reducer";


const renderDetail = (navigation, findSites , dispatch ) => (rowData, sectionID, rowID) => {
  


  const finishStep = async (data)=>{
    const progress =await progressRoute(data)


    dispatch(setProgress({
        progress:progress,
        userID:data.user_id
    }))
    navigation.replace('RutaUni',{
      routeID:data.primary_id
    });
  }

  let title = <Text style={[styles.title]}>{rowData.title}</Text>
  var desc = null
  if (rowData.description && rowData.imageUrl)
    desc = (
      <View style={styles.descriptionContainer}>
        <Image source={{ uri: rowData.imageUrl }} style={styles.image} />
        <Text style={[styles.textDescription]}>{rowData.description}</Text>
      </View>
    )


  return (
    <View style={styles.container}>
      {title}
      {desc}
      <Button
        style={{
          marginTop: 15,
          marginBottom: 10
        }}
        mode="outlined"
        onPress={() => {
          const latitude = rowData.latitude; // Latitud del destino
          const longitude =rowData.longitude; // Longitud del destino
          const label = rowData.title;

          const url = `google.navigation:q=${latitude},${longitude}`;
          Linking.canOpenURL(url)
          .then(supported => {
            if (supported) {
              return Linking.openURL(url);
            } else {
              console.log('No es posible abrir Google Maps');
            }
          })
          .catch(err => console.error('Error al abrir Google Maps:', err));
        }}
        color="#19456B"
      >
        Ver en mapa
      </Button>
      <Button
        style={{
          marginTop: 15,
          marginBottom: 10
        }}
        mode="outlined"
        onPress={async () => {
          const site = await findSites(rowData.site_id)
          navigation.navigate("Site",site)
        }}
        color="#19456B"
      >
        Ver Sitio
      </Button>
      <Button
        style={{
          marginTop: 15,
          marginBottom: 10
        }}
        mode="outlined"
        onPress={async () => {
          if(!rowData.finish){
            finishStep({
              type:"route",
              primary_id:rowData.routeID,
              secondary_id: rowData.stepID,
              user_id : rowData.userID,
              score:"5.0"
            })
          }
        }}
        color={ rowData.finish ? "green" :"#19456B" }
      >
        {rowData.finish ? "Paso Terminado": "Terminar Paso"}
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    elevation: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray'
  }
});


export default renderDetail