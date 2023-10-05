import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import * as Linking from 'expo-linking';

import { Button, Card, Title, Paragraph } from 'react-native-paper';

const ItemExplorar = ({ navigation, site }) => {
    return (
        <Card style={styles.container}>
            <Card.Cover source= {  site.resource[0]  ? { uri: site.resource[0].payload  }:  require("../../../../assets/nothing.jpg")} />
            <Card.Content>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Title>{site.nombre}</Title>
                </View>
                <Paragraph>{site.descripcion}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => {
                    navigation.navigate("Site", site)

                }}>Ver Sitio</Button>
                <Button onPress={() => {

                    const latitude = site.latitud; // Latitud del destino
                    const longitude = site.longitud; // Longitud del destino
                    const label = site.nombre;

                    const url = `google.navigation:q=${latitude}+${longitude}`;
                    Linking.canOpenURL(url)
                        .then(supported => {
                            if (supported) {
                                return Linking.openURL(url);
                            } else {
                                console.log('No es posible abrir Google Maps');
                            }
                        })
                        .catch(err => console.error('Error al abrir Google Maps:', err));
                }}>Ubicar sitio</Button>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        elevation: 5
    }
})


export default ItemExplorar