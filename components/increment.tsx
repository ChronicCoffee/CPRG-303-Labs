import react from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';

const Increment = () => {
    return (
        <View>
        <TouchableOpacity onPress={() => console.log("Increment")}>
        <Text>This is Increment</Text>
        </TouchableOpacity>
        </View>
    );
};


export default Increment;