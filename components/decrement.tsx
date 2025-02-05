import react from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';


type DecrementProps = {value: number; setValue: (value: number) => void};

const Decrement: React.FC<DecrementProps> = ({value, setValue}) => {
    const handleDecrement = () => {
        setValue(value + 1);
    };


    return (
        <View>
            <View>
            <TouchableOpacity onPress={handleDecrement}>
            <Text>This is Decrement</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};


export default Decrement;