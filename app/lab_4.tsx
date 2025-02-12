import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Lab4: React.FC = () => {
    return (
       <View style={styles.container}>
            <Text style={styles.title}>This is Lab 4</Text>
            <Text style={styles.description}>This is the fourth lab exercise</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default Lab4;