import React from 'react';
import {
    StyleSheet,
    View,
    Platform,
    UIManager,
    LayoutAnimation
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
}

const ItemRuta = ({navigation ,route, progress}) => {



    const [ seeMore , setSeeMore ]= React.useState(false)


    const onPressDescription =() => {
        LayoutAnimation.easeInEaseOut()
        setSeeMore(!seeMore)
    }


    const progressStarting = ()=>{
        const progressStep =  progress.filter(pro => pro.primary_id === route.id && pro.type == "route" )
        const numberProgress = progressStep.length
        const numberStep = route?.steps?.length ?? 0
        if(numberStep == 0){
            return 0
        }
        return (numberProgress/numberStep) *5
    }
    
    return (
        <Card style={styles.container}>
            <Card.Cover source={{ uri: route.cover }} />
            <Card.Content>
                <View style={{display:"flex",flexDirection:"row"}}>
                <Title>{route.name}</Title>
                <Rating style={{marginVertical:5, marginHorizontal:5}} startingValue={progressStarting()}  readonly={true} imageSize={20} />
                </View>
                <Paragraph>{seeMore ? route.description : ""}</Paragraph>
                
            </Card.Content>
            <Card.Actions>
            <Button onPress={()=>{
                    onPressDescription()
                }} >Ver descripcion</Button>
                <Button onPress={()=>{
                    navigation.navigate("Review",{
                        routeID:route.id,
                        type:"route"
                    })
                }} >Dar resena</Button>
                <Button onPress={()=>{
                    navigation.navigate("RutaUni",{
                        routeID:route.id
                    })
                }}>Ver mas</Button>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    container :{
        margin:10,
        elevation:5
    }
})


export default ItemRuta