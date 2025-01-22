import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  const handleCustomPress = () => {
    Alert.alert('Button Pressed.');
  };

  return (
    <View style={styles.container}>
      <Text>Lab 1</Text>
      <StatusBar style="auto" />
      <Text style={{fontSize: 20, color: "blue"}}>Noah Gallasic</Text>

      <View style={styles.spacer} />

      <TouchableOpacity 
        style={styles.customButton}
        onPress={handleCustomPress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    height: 20, // Adds space between the buttons
  },
  customButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
