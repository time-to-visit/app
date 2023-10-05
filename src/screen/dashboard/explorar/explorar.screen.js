import React from "react";

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList
} from "react-native"
import { useDispatch, useSelector } from "react-redux";

import ButtonFilter from "./filter/filter"
import RNPickerSelect from 'react-native-picker-select';
import {
    seeSites,
    findCategory
} from "./explorar.services"

import {
    setIsLoading,
    setSites,
    setCategories,
    setDepartment,
    setSubCategories
} from "./reducer/explorar.reducer"
import ItemExplorar from "./explorar-item.screen";
import FilterModal from "./filter/filter.modal";
import { findMunicipalties } from "../mapa/mapa.service";





const ExplorarScreen = ({navigation}) => {
    const dispatch = useDispatch()
    let auxquery ={}
    const {
        sites,
        categories,
        subcategories,
        department,
    } = useSelector(state => state.explorar)
    const [visible, setVisible] = React.useState(false)
    const [title, setTitle] = React.useState("categoria")
    const [query ,setQuery ] = React.useState({})
    const showModal = () => {
        setVisible(true)
    }

    const changeExplorer = async ()=>{
        const  q = Object.entries(auxquery)
        q.forEach(q=>{
            if(q[0] == "category_id"){
              const cat =categories.find((cat => cat.id == q[1]))
              console.log(cat)
              dispatch(setSubCategories(cat.subcategories))    
              console.log(subcategories)    
            }
          })

        seeSites(auxquery).then(sites => {
            dispatch(setSites(sites))
        })
    }

    const setItemQuery =(data)=> {
        auxquery = query
        auxquery[data.item] = data.value
        setQuery(auxquery)
    }

    const selectedItem = () => {
        switch (title) {
            case "categoria":
                return categories.map(categorie =>({
                    img : categorie.url_imagen,
                    text:categorie.nombre,
                    id:categorie.id,
                    title:"category_id"
                }))
            case "subcategoria":
                return subcategories.map(subcategorie =>({
                    img : subcategorie.url_imagen,
                    text:subcategorie.nombre,
                    id:subcategorie.id,
                    title:"subcategory_id"
                }))
            case "municipio":
                return department.map(deparment =>({
                    img : deparment.bandera,
                    text:deparment.nombre,
                    id:deparment.id,
                    title:"municipalities_id"
                }))
        }
    }


    React.useEffect(() => {
        
        findCategory().then(categories => {
            dispatch(setCategories(categories));
        })
        findMunicipalties().then(municipalities => {
            console.log(municipalities)
            dispatch(setDepartment(municipalities))
          })
          seeSites().then(sites => {
            dispatch(setSites(sites))
        })
    }, [])


    return (
        <View>
                <View>
                    <ButtonFilter showModal={showModal} setTitle={setTitle} />
                    <Text style={styles.title}>Explorar Sitios</Text>

                </View>
                <FlatList
                    data={sites}
                    renderItem={({item})=> <ItemExplorar site={item} navigation={navigation}  />}
                    keyExtractor={item => item.id}
                    ListFooterComponent={<View style={
                        {
                            height:200
                        }
                    } />}
                />
                
            <FilterModal
                visible={visible}
                items={selectedItem()}
                hideModal={()=>{
                    setVisible(false)
                }}
                changeExplorer={changeExplorer}
                setItemQuery={setItemQuery}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
        paddingHorizontal: 10
    }
})



export default ExplorarScreen