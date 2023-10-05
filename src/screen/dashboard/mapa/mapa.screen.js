import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import FilterResult from "../../utils/FIlterResult"
import SearchFilter from "../../utils/search/SearchFIlter"
import {
  findCategory,
  findMunicipalties,
  findSites
} from "./mapa.service"
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { setOpen, setItemSites, setItemSite, setIsLoading, setCategorias, setDepartment, setSubcategorias } from "./reducer/mapa.reducer"
import SmsScreen from "./seeMoreSites/sms.screen";
import SucessModal from "../../../modals/sucess.modal";
import FilterModal from "../explorar/filter/filter.modal";
const MapScreen = ({ route, navigation }) => {

  const dispatch = useDispatch()
  const {
    items,
    sites,
    isBotton,
    categorias,
    department,
    subcategorias,
    openSites,
    site,
    is
  } = useSelector(state => state.map)


  const [visible, setVisible] = React.useState(false)
  const [title, setTitle] = React.useState("categoria")
  const [query, setQuery] = React.useState({})
  let auxquery = {}

  const selectedItem = () => {
    switch (title) {
      case "categoria":
        return categorias.map(categorie => ({
          img: categorie.url_imagen,
          text: categorie.nombre,
          id: categorie.id,
          title: "category_id"
        }))
      case "subcategoria":
        return subcategorias.map(subcategorie => ({
          img: subcategorie.url_imagen,
          text: subcategorie.nombre,
          id: subcategorie.id,
          title: "subcategory_id"
        }))
      case "municipio":
        return department.map(deparment => ({
          img: deparment.bandera,
          text: deparment.nombre,
          id: deparment.id,
          title: "municipalities_id"
        }))
    }
  }


  const changeExplorer = async () => {
    const  q = Object.entries(auxquery)
    console.log(q)
    q.forEach(q=>{
      if(q[0] == "category_id"){
        const cat =categorias.find((cat => cat.id == q[1]))
        console.log(cat)
        dispatch(setSubcategorias(cat.subcategories))    
        console.log(subcategorias)    
      }
    })
    findSites(auxquery).then(sites => {
      dispatch(setItemSites(sites))
    })
  }

  React.useEffect(() => {
    const nav = route.params
    findCategory().then(categorys => {
      dispatch(setCategorias(categorys))
    })
    findMunicipalties().then(municipalities => {
      dispatch(setDepartment(municipalities))
    })
    findSites().then(sites => {
      dispatch(setItemSites(sites))
      dispatch(setIsLoading({
        type: "sucess"
      }))
    })

  }, [])

  const setItemQuery = (data) => {
    auxquery = query
    auxquery[data.item] = data.value
    setQuery(auxquery)
  }


  return (
    <View style={styles.container}>
      <SearchFilter />
      {isBotton ? (<FilterResult showModal={() => {
        setVisible(true)
      }}
        setTitle={
          setTitle
        } />) : <SmsScreen open={openSites} site={site} navigation={navigation} />
      }
      <MapView style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={
          {
            latitude: 2.9414813,
            longitude: -75.2862297,
            latitudeDelta: 0.2,
            longitudeDelta: 2

          }
        }
        zoomControlEnabled={true}
      >
        {sites.map(site => (
          <Marker
          key={site.id}
            coordinate={
              {
                latitude: parseFloat(site.latitud),
                longitude: parseFloat(site.longitud),
              }
            }
            title={site.nombre}
            description={site.descripcion}
            onPress={() => {
              dispatch(setOpen())
              dispatch(setItemSite(site))
            }}
          />
        ))}
      </MapView>
      <FilterModal
        items={selectedItem()}
        visible={visible}
        hideModal={() => {
          setVisible(false)
        }}
        changeExplorer={changeExplorer}
        setItemQuery={setItemQuery}
      />
      <SucessModal
        task={{
          title: "Bienvenido"
        }}
        modalVisible={is.isSuccess}
        event={() => {
          dispatch(setIsLoading({
            type: ""
          }))
        }
        } />
    </View>
  )
}


export default MapScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});