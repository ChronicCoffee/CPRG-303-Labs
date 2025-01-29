import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from "react-native";
import FruitList from "../components/fruitlist"; // Import FruitList component

export default function Index() {
  const handleWelcomePress = () => {
    Alert.alert("Welcome!", "Glad to have you here.");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to our App!</Text>

      {/* Styled Button */}
      <TouchableOpacity style={styles.button} onPress={handleWelcomePress}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>

      {/* Display the fruit list */}
      <Text style={styles.listTitle}>Choose a Fruit:</Text>
      <FruitList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#ff9800",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    color: "#444",
  },
});
