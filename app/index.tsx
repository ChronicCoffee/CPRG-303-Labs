import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView,} from "react-native";
import FruitList from "../components/fruitlist"; // Import FruitList component
import Lab3 from "./lab_3";
import Lab4 from "./lab_4";
import lab5 from "./lab_5";
import lab6 from "./lab_6";
import { router } from "expo-router";

export default function Index() {
  const handleWelcomePress = () => {
    Alert.alert("Welcome!", "Glad to have you here.");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to our App!</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('./lab_3')}>
        <Text style={styles.buttonText}>Go to Lab 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('./lab_4/')}>
        <Text style={styles.buttonText}>Go to Lab 4</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('./lab_5/')}>
        <Text style={styles.buttonText}>Go to Lab 5</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('./lab_6/')}>
  <Text style={styles.buttonText}>Go to Lab 6</Text>
</TouchableOpacity>

      {/* Styled Button */}
      <TouchableOpacity style={styles.button} onPress={handleWelcomePress}>
        <Text style={styles.buttonText}>This was Lab 1 - Click Me</Text>
      </TouchableOpacity>

      {/* Display the fruit list */}
      <Text style={styles.listTitle}>This was Lab 2 - Choose a Fruit:</Text>
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
