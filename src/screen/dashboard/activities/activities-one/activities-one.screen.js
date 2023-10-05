import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { Rating } from 'react-native-ratings';

import {  Button, Card, Title, Paragraph } from 'react-native-paper';

const ItemActivities = ({navigation, guide}) => {
    return (
        <Card style={styles.container}>
            <Card.Cover source={{ uri: guide.image }} />
            <Card.Content>
                <View style={{display:"flex",flexDirection:"row"}}>
                <Title>{guide.site_name}</Title>
                <Rating style={{marginVertical:5, marginHorizontal:5}} imageSize={20} />
                </View>
                <Paragraph>{guide.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button onPress={()=>{
                    navigation.navigate("GuidesUni",{
                        id:guide.id
                    })
                }}>Ver Site</Button>
                <Button onPress={()=>{
                    navigation.navigate("GuidesUni",{
                        id:guide.id
                    })
                }}>Buscar Ubicacion</Button>
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


export default ItemActivities