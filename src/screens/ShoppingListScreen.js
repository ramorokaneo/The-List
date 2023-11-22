import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, clearList, saveList } from '../Slices/listSlice';

const CreateNewListScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [listTitle, setListTitle] = useState('');
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const addItemToRedux = () => {
    if (item.trim() !== '') {
      dispatch(addItem({ id: Date.now(), name: item }));
      setItem('');
    }
  };

  const removeItemFromRedux = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const saveListToRedux = () => {
    // Dispatch the saveList action
    dispatch(saveList());

    // After saving, navigate to the History screen or any other screen
    // navigation.navigate('HistoryScreen');
  };

  const goBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  const logout = () => {
    // Implement your logout logic here
    // ...

    // After logging out, navigate back to SignInScreen
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create New List</Text>

      {/* Title input */}
      <TextInput
        style={styles.input}
        placeholder="Enter List Title"
        value={listTitle}
        onChangeText={setListTitle}
      />

      {/* Item input and Add button */}
      <View style={styles.itemInputContainer}>
        <TextInput
          style={styles.itemInput}
          placeholder="Add Item"
          value={item}
          onChangeText={setItem}
        />
        <TouchableOpacity style={styles.addButton} onPress={addItemToRedux}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* List of added items */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity onPress={() => removeItemFromRedux(item.id)}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Save button */}
      <TouchableOpacity style={styles.saveButton} onPress={saveListToRedux}>
        <Text style={styles.buttonText}>Save List</Text>
      </TouchableOpacity>

      {/* Back and Logout buttons */}
      <View style={styles.buttonContainer}>
        {/* Back button */}
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Icon name="arrow-left" size={20} color="#fff" />
          <Text style={styles.buttonText}> Back</Text>
        </TouchableOpacity>

        {/* Logout button */}
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Icon name="sign-out" size={20} color="#fff" />
          <Text style={styles.buttonText}> Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#3498db', // Background color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Title color
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
    color: '#fff', // Text color
  },
  itemInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
  },
  itemInput: {
    flex: 1,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    color: '#fff', // Text color
  },
  addButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#3498db', // Button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    color: '#fff', // Text color
  },
  removeButtonText: {
    color: 'red',
  },
  saveButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  backButton: {
    flexDirection: 'row',
    backgroundColor: '#3498db',
    marginTop: 10,
    width: '40%',
    alignItems: 'center',
    paddingLeft: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#e74c3c',
    marginTop: 10,
    width: '40%',
    alignItems: 'center',
    paddingLeft: 10,
  },
});

export default CreateNewListScreen;
