import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Import icons

export default function AppleScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍎 Apple</Text>
      <Image source={require("../assets/apple.jpg")} style={styles.image} />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back-circle" size={30} color="white" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff5f5",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#c0392b",
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  backButton: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#c0392b",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
