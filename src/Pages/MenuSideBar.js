// MenuSideBar.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuSideBar = ({ closeModal }) => {
  const navigation = useNavigation();

  const handleMyListPress = () => {
    // Handle 'My List' press action here
    // For example, navigate to 'MyList' screen
    navigation.navigate('MyList');
    closeModal();
  };

  const handleMyBudgetPress = () => {
    // Handle 'My Budget' press action here
    // For example, navigate to 'MyBudget' screen
    navigation.navigate('MyBudget');
    closeModal();
  };

  const handleSettingsPress = () => {
    // Handle 'Settings' press action here
    // For example, navigate to 'Settings' screen
    navigation.navigate('Settings');
    closeModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.drawerItem} onPress={handleMyListPress}>
        <Text style={styles.drawerItemText}>My List</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={handleMyBudgetPress}>
        <Text style={styles.drawerItemText}>My Budget</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={handleSettingsPress}>
        <Text style={styles.drawerItemText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  drawerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  drawerItemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default MenuSideBar;
