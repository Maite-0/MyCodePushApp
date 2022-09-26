import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import codePush from "react-native-code-push";
import AppNavigation from './src/Navigation/AppNavigation';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';



const App = () => {
useEffect(() => {SplashScreen.hide();})
  return (
   <AppNavigation />
  )
}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START
}

export default codePush(App);

const styles = StyleSheet.create({})