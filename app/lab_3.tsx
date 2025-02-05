import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';
import Decrement from '../components/decrement';
import Increment from '../components/increment';


const Lab3: React.FC = () => {
    return (
        <View>
        <Text>This is Lab 3</Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Decrement button pressed')}>
            <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Increment button pressed')}>
            <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        </View>
    );
};

export default Lab3;
