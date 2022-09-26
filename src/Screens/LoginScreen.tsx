import { StyleSheet, Button, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = ({ navigation }) => {
    const handleSubmit = () => {
        navigation.navigate("About");
    }
    return (
        <View>
            <Text>LoginScreen</Text>
            <Text>This a Login screen</Text>
            <Text>This a Login screen</Text>
            <Text>This a Login screen</Text>
            <Text>This a Login screen</Text>
            <Text>This a Login screen</Text>
            <Text>This a Login screen</Text>
            <Button title="Press" onPress={() => handleSubmit()} />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})