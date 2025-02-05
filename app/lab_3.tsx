import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IncrementButton from '../components/incrementButton';
import DecrementButton from '../components/decrementButton';

const Lab3 = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>This is Lab 3</Text>
        <Text style={styles.counterText}>Counter: {value}</Text> {/* Display the counter value */}
      <View style={styles.buttonContainer}>
        <IncrementButton value={value} setValue={setValue} />
        <DecrementButton value={value} setValue={setValue} />
      </View>
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
  counterText: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
});

export default Lab3;