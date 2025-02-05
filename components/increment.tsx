import react from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';

type IncrementProps = {value: number; setValue: (value: number) => void};

const Increment: React.FC<IncrementProps> = ({value, setValue}) => {
    const handleIncrement = () => {
        setValue(value + 1);
    };


    return (
        <View>
            <TouchableOpacity onPress=(handleIncrement)>
                <Text>This is Increment</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Increment;