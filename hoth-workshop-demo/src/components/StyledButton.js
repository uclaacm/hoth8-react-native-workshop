import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const StyledButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default StyledButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "purple",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        padding: 25,
        textTransform: "uppercase",
    },
});