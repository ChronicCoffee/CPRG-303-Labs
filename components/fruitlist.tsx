import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

// Fruit list with routes & icons
const fruits = [
  { name: "Apple", route: "/apple", emoji: "🍎" },
  { name: "Orange", route: "/orange", emoji: "🍊" },
  { name: "Mango", route: "/mango", emoji: "🥭" },
];

export default function FruitList() {
  const router = useRouter();

  return (
    <View style={styles.listContainer}>
      {fruits.map((fruit, index) => (
        <TouchableOpacity key={index} style={styles.fruitItem} onPress={() => router.push(fruit.route)}>
          <Text style={styles.fruitText}>{fruit.emoji} {fruit.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  fruitItem: {
    backgroundColor: "#f8c291",
    paddingVertical: 15,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Adds depth
  },
  fruitText: {
    fontSize: 20,
    color: "#4a4a4a",
    fontWeight: "600",
  },
});
