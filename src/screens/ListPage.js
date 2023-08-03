import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import Axios from 'axios';
import ListHeader from '../Pages/ListHeader';
import ListFooter from '../Pages/ListFooter';

const ListPage = () => {
  const [isCreatingList, setIsCreatingList] = useState(false);
  const [listTitle, setListTitle] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleCreateNewList = () => {
    setIsCreatingList(true);
  };

  const handleSaveList = () => {
    if (listTitle.trim().length > 0) {
      const newList = {
        title: listTitle,
        items: [],
        user: 'USER_UNIQUE_IDENTIFIER', // Replace this with the logged-in user's unique identifier
      };

      Axios.post('http://YOUR_BACKEND_API_URL/api/lists/create-list', newList)
        .then((response) => {
          Alert.alert('List Created Successfully', 'Your new list has been created.');
          setIsCreatingList(false);
          setListTitle('');
        })
        .catch((error) => {
          Alert.alert('List Creation Failed', 'An error occurred while creating the list.');
        });
    }
  };

  useEffect(() => {
    // Fetch user-specific lists from the backend upon component mount
    Axios.get(`http://YOUR_BACKEND_API_URL/api/lists/user-lists/USER_UNIQUE_IDENTIFIER`)
      .then((response) => {
        setListItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user lists:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ListHeader />
      <View style={styles.content}>
        <Text style={styles.text}>List Page</Text>
        {isCreatingList ? (
          <View style={styles.createListContainer}>
            <TextInput
              style={styles.listTitleInput}
              placeholder="Enter list title"
              value={listTitle}
              onChangeText={setListTitle}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveList}>
              <Text style={styles.saveButtonText}>Save List</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.dashboard}>
            <Text style={styles.dashboardItem} onPress={handleCreateNewList}>
              Create New List
            </Text>
            <Text style={styles.dashboardItem}>My List</Text>
            <Text style={styles.dashboardItem}>Help</Text>
          </View>
        )}
        <FlatList
          data={listItems}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.listItemTitle}>{item.title}</Text>
              {/* Add the list items here */}
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <ListFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
  dashboard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  dashboardItem: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
    marginHorizontal: 10,
  },
  createListContainer: {
    alignItems: 'center',
  },
  listTitleInput: {
    fontSize: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  saveButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  listItemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ListPage;
