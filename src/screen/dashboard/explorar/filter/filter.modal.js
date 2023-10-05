import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { ScrollView, StyleSheet ,  TouchableOpacity , Image, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

const ItemFilter = ({ item , hideModal ,  changeExplorer , setItemQuery }) => {
    
    const dispatch = useDispatch()

    return (
        <TouchableOpacity 
            style={styles.disactive}
            onPress={async ()=>{
                setItemQuery({
                    item:item.title,
                    value: item.id
                })
                hideModal()
                changeExplorer()
            }}
        >
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <View>
                    <Image source={{uri: item.img}}  style={{
                        width:30,
                        height:30,
                        margin:10
                    }} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.textItem}>{item.text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
 
const FilterModal = ({ visible , hideModal , items, changeExplorer , setItemQuery}) => {

    
    const containerStyle = {backgroundColor: 'white', padding: 20 , height:400 ,  zIndex: 1000};

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <ScrollView>
            <Button
                icon="tune"
                mode="outlined"
                color="#19456B"
                onPress={(e)=>{
                    hideModal()
                }}
            >
                Cerrar
            </Button>
            {items.map(item =>(
                <ItemFilter key={item.id} item={item} hideModal={hideModal} setItemQuery={setItemQuery} changeExplorer={changeExplorer} />
                ))}
                </ScrollView>
        </Modal>
      </Portal>
    </Provider>
  );
};


const styles = StyleSheet.create({
    textItem: {
        textAlign: "right",
        marginHorizontal: 10,
        fontSize: 15,
        marginVertical: 10
    },
    active :{
        backgroundColor: 'gray', 
        borderWidth: 1,
        marginVertical: 10 
    },
    disactive:{ 
        borderColor: 'gray', 
        borderWidth: 1,
        marginVertical: 10 
    }

})


export default FilterModal;