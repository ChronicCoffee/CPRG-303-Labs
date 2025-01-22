import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Index() {
  const handleWelcomePress = () => {
    alert("Welcome to your app!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to your App!</Text>
      <Button title="Click Me" onPress={handleWelcomePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
});
