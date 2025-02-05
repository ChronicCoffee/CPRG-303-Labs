import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView, Button } from 'react-native';

type IncrementProps = {value: number; setValue: (value: number) => void};

const Increment: React.FC<IncrementProps> = ({value, setValue}) => {
    const handleIncrement = () => {
        setValue(value + 1);
    };


    return (
        <View>
            <View>
            {/* <TouchableOpacity onPress={handleIncrement}>
            <Text>This is Increment</Text> */}
            {/* </TouchableOpacity> */}
            <Button title="Increment" onPress={handleIncrement}/>
            </View>
        </View>
    );
};


export default Increment;