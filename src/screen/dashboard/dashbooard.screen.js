import React from "react";
import {
  StyleSheet,
  Dimensions
} from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
import GuiasScreen from "./guias/guias.screen"
import CerrarSession from "./cerrar-session/cerrar-session.screen"
import DrawerContent from "./drawercontent"
import MapScreen from "./mapa/mapa.screen";
import RutasScreen from "./rutas/rutas.screen";
import ExplorarScreen from "./explorar/explorar.screen";
// import PreguntasScreen from "./preguntas/preguntas.screen";


const Drawer = createDrawerNavigator();

const Drawered = () => {

  
  return (
    <Drawer.Navigator
      initialRouteName="Explorar"
      drawerContent={(props) => <DrawerContent {...props} />}
    >

      <Drawer.Screen name="Explorar"
        options={{
          title: "Explorar",
          drawerItemStyle: styles.drawer
        }} component={ExplorarScreen} />
      <Drawer.Screen name="Mapa"
        options={{
          title: "Mapa",
          drawerItemStyle: styles.drawer
        }} component={MapScreen} />

      <Drawer.Screen name="Guias"
        options={{
          title: "Guias Turistica",
          drawerItemStyle: styles.drawer
        }} component={GuiasScreen} />

      <Drawer.Screen name="Rutas"
        options={{
          title: "Rutas Turistica",
          drawerItemStyle: styles.drawer
        }}
        component={RutasScreen} />
      <Drawer.Screen name="CerrarSession"
        options={{
          title: "cerrar session",
          drawerItemStyle: styles.drawer
        }}
        component={CerrarSession} 
       />

    </Drawer.Navigator>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  drawer: {
    borderColor: "#ccc",
    borderBottomWidth: 0.5
  }
});

export default Drawered