import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';
import Decrement from '../components/decrement';
import Increment from '../components/increment';


const Lab3: React.FC = () => {
    return (
        <View>
        <Text>This is Lab 3</Text>
        <Increment />
        <Decrement />
        </View>
    );
};

export default Lab3;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ff9800",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    }
});
