import { View, Button, Text, Image } from 'react-native'
import React from 'react'

const AboutScreen = ({ navigation }) => {
    const handleSubmit = () => {
        navigation.navigate("Details");
    }
    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <Text>AboutScreen</Text>
                <Image style={{ justifyContent: "center" }} source={require('./../../assets/taxi.png')} />
            </View>
            {/* <Button title="Press" onPress={() => handleSubmit()} /> */}
        </View>
    )
}

export default AboutScreen