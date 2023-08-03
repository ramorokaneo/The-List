import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyListScreen = () => {
  // Simulated user's previous saved lists
  const previousLists = [
    { id: '1', title: 'List 1' },
    { id: '2', title: 'List 2' },
    { id: '3', title: 'List 3' },
    // Add more lists as needed
  ];

  return (
    <View style={styles.container}>
      {previousLists.map((list) => (
        <View key={list.id} style={styles.listItem}>
          <Text style={styles.listTitle}>{list.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  listTitle: {
    fontSize: 18,
    color: '#333',
  },
});

export default MyListScreen;
