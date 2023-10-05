import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist'
import renderDetail from './item-rutas-one.screen';
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, setSteps } from "./reducer/steps.reducer"
import { seeSteps } from "./rutas.service"
import LoadingModal from '../../../modals/loading.modal';
import { findSiteOne } from '../mapa/mapa.service';
import { setProgress } from '../../login/reducer/login.reducer';


const RutasOneScreen = ({
  route,
  navigation
}) => {


  const dispatch = useDispatch()
  const {
    steps,
    is
  } = useSelector(state => state.steps)

  const  setFinish = (progress) =>{
    dispatch(setProgress(progress))
  }
  const {
    progress,
    userID
  } = useSelector(state => state.login)
  
  React.useEffect(() => {
    const { routeID } = route.params
    loadData(routeID)
  }, [])

  const loadData = async (id) => {
    dispatch(setIsLoading({
      type: "loading"
    }))
    const steps = await seeSteps(id)
    dispatch(setIsLoading({
      type: ""
    }))

    const progressStep =  progress.filter(pro => pro.primary_id === id && pro.type == "route" )
    const data = steps.map((step, index) => {
      
      const indexStep =progressStep.findIndex(pro => pro.secondary_id === step.id)
      
      const timeline= {
        userID,
        stepID: step.id,
        routeID: id,
        time: (index + 1) + "/" + steps.length,
        title: step.name,
        description: step.description,
        lineColor: "",
        imageUrl: step.cover,
        latitude: step.latitud,
        longitude: step.longitud,
        site_id: step.sites_id,
        finish : indexStep!== -1,
        eventContainerStyle:{
          borderColor:indexStep!== -1 ? "green":  '#ff9797'
        }
        
      }
      return timeline
    })
    console.log("route => ", data)
    dispatch(setSteps(data))
  }


  const findSites = async (id) => {
    dispatch(setIsLoading({
      type: "loading"
    }))

    const sites = await findSiteOne(id)

    dispatch(setIsLoading({
      type: ""
    }))
    return sites
  }

  return (
    <View style={styles.container}>
      <Timeline
      
        style={styles.list}
        data={steps}
        circleSize={20}
        circleColor='rgba(0,0,0,0)'
        lineColor='rgb(45,156,219)'
        timeContainerStyle={{ minWidth: 52, marginTop: 2 }}
        timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
        descriptionStyle={{ color: 'gray' }}
        options={{
          style: { paddingTop: 5 }
        }}
        columnFormat='single-column-left'
        renderDetail={renderDetail(navigation,findSites,dispatch)}
      />
      <LoadingModal modalVisible={is.isLoading} levent={() => {
        dispatch(setIsLoading({
          type: ""
        }))
      }}

      />
    </View>
  );
}

export default RutasOneScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  list: {
    flex: 1,
    marginTop: 10,
  }
});