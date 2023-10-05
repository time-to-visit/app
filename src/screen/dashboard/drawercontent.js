import {
    DrawerContentScrollView,
    DrawerItemList
  } from '@react-navigation/drawer';
import React from 'react'
import { 
    Image,
    View,
    StyleSheet
} from "react-native"

  const CustomDrawerContent=(props) => {
    return (
        <DrawerContentScrollView {...props}>
        <View>
        <Image
        style={styles.image}
            source={require("../../../assets/icono.png")}
            
        />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

  const styles = StyleSheet.create({
      image:{
          width:180,
          height:180,
          alignSelf:"center"
      }
  })

  export default CustomDrawerContent;