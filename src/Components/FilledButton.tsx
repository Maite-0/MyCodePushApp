import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import React from 'react';

const FilledButton = (props: FilledButtonProps) => {
    const { title, style, filledButtonTextstyle, onPress } = props;

    return (
        <TouchableHighlight
            underlayColor="none"
            style={[styles.filledButtonContainer, style]}
            onPress={onPress}>
            <Text style={[styles.filledButtonText, filledButtonTextstyle]}>
                {title || 'Button'}
            </Text>
        </TouchableHighlight>
    );
};
export default FilledButton;

type FilledButtonProps = {
    title?: any;
    style?: any;
    onPress?: any;
    filledButtonTextstyle?: any;
};

const styles = StyleSheet.create({
    filledButtonContainer: {
        alignItems: 'center',
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#3399FF',
        height: 50,
        margin: 5

    },
    filledButtonText: {
        color: 'white',
        fontWeight: '300',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'bold'

    },
})