import { StyleSheet, TextInput, Text, Button, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {

    const handleSubmit = () => {
        navigation.navigate("About");
    }
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title="Press" onPress={() => handleSubmit()} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})