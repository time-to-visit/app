import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screen/login/login.screen';
import InicoScreen from "./src/screen/inicio/inicio.screen";
import RegistroScreen from "./src/screen/registro/registro.screen"
import DashboardScreen from './src/screen/dashboard/dashbooard.screen';
import GuiasOne from './src/screen/dashboard/guias/guia-one/guias-one.screen';
import RutasOneScreen from './src/screen/dashboard/rutas/rutas-one.screen';
import ReviewScreen from './src/screen/dashboard/resena/resena.screen';
import SitesScreen from './src/screen/dashboard/sites/sites.screen';
import Level from './src/screen/dashboard/guias/levels/level.screen';
import LevelOne from './src/screen/dashboard/guias/level-one/level-one.screen';

import { Provider } from 'react-redux'
import store from "./store"
import PreguntasScreen from './src/screen/dashboard/preguntas/preguntas.screen';
import ObjectivesScreen from './src/screen/dashboard/objectives/objectives.screen';
import StepScreen from './src/screen/dashboard/steps/step.screen';
import ActivitiesScreen from './src/screen/dashboard/activities/activities.screen';
import { useSelector, } from 'react-redux';



const Stack = createNativeStackNavigator();



// import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";




const Navigation = () => {
  const { auth } = useSelector(state => state.login)

  return (

    <NavigationContainer>
      {!auth ?
        (
          <Stack.Navigator
            initialRouteName={"Inicio"}
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="Inicio" component={InicoScreen} />
            <Stack.Screen name="Registro" component={RegistroScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        )
        : (
          <Stack.Navigator
            initialRouteName={"Dashboard"}
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="Site" component={SitesScreen} />
            <Stack.Screen name="RutaUni" component={RutasOneScreen} />
            <Stack.Screen name="GuidesUni" component={GuiasOne} />
            <Stack.Screen name="Level" component={Level} />
            <Stack.Screen name="LevelUni" component={LevelOne} />
            <Stack.Screen name="Review" component={ReviewScreen} />
            <Stack.Screen name="Question" component={PreguntasScreen} />
            <Stack.Screen name="Objective" component={ObjectivesScreen} />
            <Stack.Screen name="Step" component={StepScreen} />
            <Stack.Screen name="Activities" component={ActivitiesScreen} />
          </Stack.Navigator>
        )
      }

    </NavigationContainer>
  )
}
const Container = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

const App = () => {
  return (
    <Container />
  );
}

export default App