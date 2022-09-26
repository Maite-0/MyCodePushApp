import { View, Button, Text } from 'react-native'
import React from 'react'

const AboutScreen = ({ navigation }) => {
    const handleSubmit = () => {
        navigation.navigate("Details");
    }
    return (
        <View>
            <Text>AboutScreen</Text>
            <Button title="Press" onPress={() => handleSubmit()} />
        </View>
    )
}

export default AboutScreen