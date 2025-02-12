import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import vacationDestinations from '../constants/list-items';

const Lab4: React.FC = () => {
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>([]);

  const toggleDestination = (id: number) => {
    setSelectedDestinations((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the destinations you would like a quote for</Text>
      <FlatList
        data={vacationDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.destinationItem}
            onPress={() => toggleDestination(item.id)}
          >
            <Text style={styles.destinationText}>
              {item.location} - ${item.price} - {item.average_yearly_temperature}
            </Text>
            {selectedDestinations.includes(item.id) && <Text>{"\u2705"}</Text>}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 20,
    textAlign: 'left'
  },
  destinationItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  destinationText: {
    fontSize: 18,
    fontFamily: 'times new roman',
  },
});
export default Lab4;