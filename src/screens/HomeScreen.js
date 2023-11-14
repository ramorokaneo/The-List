import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate('ProfileScreen');
  };

  const logout = () => {
    // Implement your logout logic here
    // ...

    // After logging out, navigate back to SignInScreen
    navigation.navigate('SignIn');
  };

  const createNewList = () => {
    navigation.navigate('ShoppingListScreen');
  };

  const viewListHistory = () => {
    navigation.navigate('ListHistory');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      {/* Buttons for various options */}
      <TouchableOpacity style={styles.button} onPress={goToProfile}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={createNewList}>
        <Text style={styles.buttonText}>Create New List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={viewListHistory}>
        <Text style={styles.buttonText}>List History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ecf0f1', // Light background color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498db', // Title color
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#e74c3c', // Red color for logout button
  },
});

export default HomeScreen;
