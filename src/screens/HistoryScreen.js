import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectHistory } from '../Slices/listSlice';

const HistoryScreen = () => {
  const history = useSelector(selectHistory);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>

      {history.length === 0 ? (
        <Text>No saved lists yet.</Text>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
              <Text style={styles.listItems}>
                {item.items.map((listItem) => listItem.name).join(', ')}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#3498db',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  historyItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  timestamp: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  listItems: {
    fontSize: 14,
  },
});

export default HistoryScreen;
