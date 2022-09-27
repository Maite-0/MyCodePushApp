import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import FilledButton from '../Components/FilledButton';


const Login = ({ navigation }: { navigation: any }) => {

    useEffect(() => { SplashScreen.hide(); })

    const loginHandle = () => {
        //navigation.navigate('HomeScreen' as never);
    };

    const onForgot = () => {
        //navigation.navigate('ForgotPasswordScreen' as never);
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white' }}>
            <Image
                style={styles.login_image}
                source={require('./../../assets/loginImage.png')}
            />

            <View>
                <TextInput
                    style={styles.textInput}
                    mode="outlined"
                    outlineColor="#9E9E9E"
                    activeOutlineColor="#9E9E9E"
                    placeholder="Username"
                />
                <TextInput
                    style={styles.textInput}
                    outlineColor="#9E9E9E"
                    mode="outlined"
                    activeOutlineColor="#9E9E9E"
                    placeholder="Password"
                />
                <TouchableOpacity onPress={() => onForgot()}>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.LoginFilledButton}>
                <FilledButton
                    title="Login"
                    onPress={() => {
                        loginHandle();
                    }}
                />
            </View>
        </KeyboardAvoidingView>
    );
};
export default Login;

const styles = StyleSheet.create({
    login_image: {
        backgroundColor: 'white',
        marginTop: 30,
        marginBottom: 30,

    },
    textInput: {
        marginVertical: 5,
        margin: 5
    },
    forgotPassword: {
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 30,
        color: '#3360FF',
        alignSelf: 'center',
    },
    LoginFilledButton: {
        bottom: 0,
        marginTop: 0,
        width: '100%',
        height: '59%',
        flex: 1,
        justifyContent: 'flex-end',
    },
})