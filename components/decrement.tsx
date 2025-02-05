import react from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView, Button } from 'react-native';


type DecrementProps = {value: number; setValue: (value: number) => void};

const Decrement: React.FC<DecrementProps> = ({value, setValue}) => {
    const handleDecrement = () => {
        setValue(value + 1);
    };


    return (
        <View>
            <View>
            <Button title="Decrement" onPress={handleDecrement}/>
            </View>
        </View>
    );
};


export default Decrement;