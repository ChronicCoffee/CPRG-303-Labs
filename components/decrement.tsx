import react from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';

const Decrement = () => {
    return (
        <View>
        <TouchableOpacity onPress={() => console.log("Decrement")}>
        <Text>This is Decrement</Text>
        </TouchableOpacity>
        </View>
    );
};


export default Decrement;