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
  },
  destinationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  destinationText: {
    fontSize: 18,
  },
});

export default Lab4;