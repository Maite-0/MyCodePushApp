import { StyleSheet, TextInput, Text, Button, View, Alert } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const HomeScreen = ({ navigation }) => {

    return (
        <View>
            <Text style={{ fontSize: 30, color: 'black' }}>HomeScreen</Text>
            {/* <Image style={{ justifyContent: "center" }} source={require('./../../assets/taxi.png')} /> */}
        </View>
    )
}

export default HomeScreen
