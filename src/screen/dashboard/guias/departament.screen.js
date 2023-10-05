import React from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'

import { guiasHook } from "./hooks/guias.hooks"
import ItemDepartamentos from "./item/item"

const GuiasScreen = ({ navigation }) => {
    const {
        departamentos,
        mostrarDepartamentos
    } = guiasHook()

    React.useEffect(() => {
        mostrarDepartamentos()
    }, [])

    const renderItem = ({ item }) => (
        <ItemDepartamentos
            item={item}
            navigation={navigation}
        />
    )


    return (
        <View>
            <FlatList
                data={departamentos}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
        </View>
    )
}


export default GuiasScreen