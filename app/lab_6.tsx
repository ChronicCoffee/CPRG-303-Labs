import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { getUsers } from '../lib/supabase_crud';

// Define a type for your user object to resolve type issues
type User = {
  id?: number | string;
  [key: string]: any;
};

export default function Lab6Screen() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const fetchedUsers = await getUsers();
        
        // Ensure fetchedUsers is an array and has the correct type
        setUsers(Array.isArray(fetchedUsers) ? fetchedUsers : []);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setIsLoading(false);
        setUsers([]); // Ensure users is an empty array in case of error
      }
    }

    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading users...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Users from Supabase</Text>
      <FlatList
        data={users}
        keyExtractor={(item, index) => 
          item.id 
            ? String(item.id) 
            : `user-${index}`
        }
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.userText}>
              {JSON.stringify(item, null, 2)}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text>No users found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  userItem: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  userText: {
    fontSize: 16
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 50
  }
});