import React from "react"
import { View, Text , StyleSheet } from "react-native"
import { Picker } from '@react-native-picker/picker';


const PickerView = ()=>{
    return(
        <View style={styles.select}>
            <Picker>
                <Picker.Item  
                    label="adasdas"
                    value="adadadas"
                />
            </Picker>
        </View>
    )
}


const styles = StyleSheet.create({
    select:{
        borderWidth:1,
        borderColor:"#19456B",
        marginVertical:20,
        marginHorizontal:10,
        padding:10,
        borderRadius:10
    }
})

export default PickerView