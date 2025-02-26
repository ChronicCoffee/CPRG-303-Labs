import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CallAPI from '../components/callAPI'; // Make sure to import your CallAPI component

const Lab5 = () => {
    const [showComponent, setShowComponent] = useState(false);

    const toggleComponent = () => {
        setShowComponent(!showComponent);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lab 5</Text>
            <Text style={styles.content}>Lab 5 content</Text>
            <TouchableOpacity style={styles.button} onPress={toggleComponent}>
                <Text style={styles.buttonText}>Toggle Component</Text>
            </TouchableOpacity>
            {showComponent && <CallAPI />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    content: {
        fontSize: 16,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginBottom: 16,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Lab5;
