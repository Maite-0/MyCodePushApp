import { StyleSheet,  } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import AboutScreen from '../Screens/AboutScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import LoginScreen from '../Screens/LoginScreen';
import BookmarkScreen from '../Screens/BookmarkScreen';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})