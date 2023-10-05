import React from "react";
import {
    View,
    Text,
    Platform,
    LayoutAnimation,
    UIManager,
} from "react-native"
import { Card, Title, Paragraph, Button } from 'react-native-paper';


if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
}


const SmsScreen = ({site, navigation }) => {
    
    const [open, setOpen] = React.useState(false)

    React.useEffect(()=>{
        setTimeout(()=>{
            LayoutAnimation.linear()
            setOpen(!open)
        },100)
    },[])
    return (
        <View style={{ position: 'absolute', width: '100%', bottom: 0, zIndex: 100 }}>
            {
                open ? (
                    <Card>
                        {site.resource.length != 0 ? <Card.Cover source={{ uri: site.resource[0].payload}} /> : null} 
                        
                        <Card.Content>
                            <Title>{site.nombre}</Title>
                            <Paragraph>{site.descripcion}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={()=>{
                                navigation.navigate("Site",site)
                            }}>Ver mas</Button>
                        </Card.Actions>
                    </Card>
                ) : null
            }
        </View>
    )
}


export default SmsScreen