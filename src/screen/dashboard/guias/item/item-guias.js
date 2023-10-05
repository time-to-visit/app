import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import {  Button, Card, Title, Paragraph } from 'react-native-paper';

const ItemGuias = ({navigation, guide}) => {
    return (
        <Card style={styles.container}>
            <Card.Cover source={{ uri: guide.cover }} />
            <Card.Content>
                <View style={{display:"flex",flexDirection:"row"}}>
                <Title>{guide.name_guide}</Title>
                </View>
                <Paragraph>{guide.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button onPress={()=>{
                    navigation.navigate("GuidesUni",{
                        id:guide.id
                    })
                }}>Ver Actividades</Button>
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


export default ItemGuias