import React from "react";

import {
    View,
    StyleSheet,
    Platform,
    UIManager,
    LayoutAnimation
} from "react-native"
import { Button   } from 'react-native-paper';
import FilterData from "./filter-data";


if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
}

const Filter = ({showModal,setTitle}) => {



    const [open, setOpen] = React.useState(false)



    const onPress = () => {
        LayoutAnimation.easeInEaseOut()
        setOpen(!open)
    }

    return (
        <View>
            <Button icon="tune"
                mode="outlined"
                color="#19456B"
                onPress={onPress}
            >
                Filtros
            </Button>
            {open &&
                <FilterData
                 showModal={showModal}
                 setTitle={setTitle}
                 />
            }
    
        </View>
    )
}



const styles = StyleSheet.create({

})




export default Filter