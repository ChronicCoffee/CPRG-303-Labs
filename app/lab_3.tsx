import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';
import Decrement from '../components/decrement';
import Increment from '../components/increment';


const Lab3 = () => {
    const [value, setValue] = useState<number>(0);
    return (
        <View>
        <Text>This is Lab 3</Text>
        <View>
        <Increment value={value} setValue={setValue}/>
        <Decrement value={value} setValue={setValue}/>
        </View>
        </View>
    );
};

export default Lab3;

