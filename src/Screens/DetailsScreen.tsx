import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const DetailsScreen = ({ navigation }) => {
    const handleSubmit = () => {
        navigation.navigate("BookmarkScreen");
    }
    return (
        <View>
            <Text>DetailsScreen</Text>
            <Button title="Press" onPress={() => handleSubmit()} />
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({})