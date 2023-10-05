import { configureStore } from '@reduxjs/toolkit'
import  loginReducer  from './src/screen/login/reducer/login.reducer'
import mapsReducer from './src/screen/dashboard/mapa/reducer/mapa.reducer'
import reviewReducer  from './src/screen/dashboard/resena/reducer/resena.reducer'
import registerReducer from './src/screen/registro/reducer/register.reducer'
import guiasReducer from './src/screen/dashboard/guias/reducer/guias.reducer'
import guiasOneReducer from './src/screen/dashboard/guias/guia-one/reducer/guides-one.reduce'
import levelReducer from './src/screen/dashboard/guias/levels/reducer/level.reducer'
import levelOneReducer from './src/screen/dashboard/guias/level-one/reducer/level-one.reducer'
import routesReducer  from './src/screen/dashboard/rutas/reducer/rutas.reducer'
import objectivesReducer from './src/screen/dashboard/objectives/reducer/objectives.reducer'
import questionReducer from './src/screen/dashboard/preguntas/reducer/preguntas.reducer'
import stepsReducer from './src/screen/dashboard/rutas/reducer/steps.reducer'
import explorarReducer from './src/screen/dashboard/explorar/reducer/explorar.reducer'
const store = configureStore({
    reducer: {
      login:loginReducer,
      map : mapsReducer,
      review:reviewReducer,
      register: registerReducer,
      guias: guiasReducer,
      guiasOne : guiasOneReducer,
      levels:levelReducer,
      levelsOne : levelOneReducer,
      routes:routesReducer,
      objectives: objectivesReducer,
      question: questionReducer,
      steps: stepsReducer,
      explorar:explorarReducer
    }
  })


export default store

//   // "apiKey": "AIzaSyBs6FWD1KJPGXEOk36XObrUlBiY7mSAdiw"