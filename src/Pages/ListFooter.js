import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ListFooter = () => {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const handleLogoutPress = () => {
    // Handle the "Logout" button press here
    // For example, you can perform the logout action and navigate to the login screen
    console.log('Logout button pressed!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleHomePress}>
        <Icon name="home" size={24} color="#333" />
        <Text style={styles.iconLabel}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={handleProfilePress}>
        <Icon name="user" size={24} color="#333" />
        <Text style={styles.iconLabel}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={handleLogoutPress}>
        <Icon name="sign-out" size={24} color="#333" />
        <Text style={styles.iconLabel}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 12,
    color: '#333',
  },
});

export default ListFooter;
