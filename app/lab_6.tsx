import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { getUsers } from "../lib/supabase_crud";

type User = {
  id: number;
  name: string;
  email: string;
  created_at: string;
};

const Lab6 = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        console.log("Users data:", data); // Log fetched data
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error); // Log errors
      }
    };

    fetchUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lab 6: Supabase Data Fetching</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.userName}>Name: {item.name}</Text>
            <Text style={styles.userEmail}>Email: {item.email}</Text>
            <Text style={styles.userCreatedAt}>
              Created At: {new Date(item.created_at).toLocaleString()}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
    textAlign: "center",
  },
  userItem: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
  },
  userCreatedAt: {
    fontSize: 14,
    color: "#888",
  },
});

export default Lab6;