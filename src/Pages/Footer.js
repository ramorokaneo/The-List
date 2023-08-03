import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const handleListPress = () => {
    navigation.navigate('List');
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="home" size={24} color="#333" />
        <Text style={styles.iconLabel}>Home</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.profileIcon} onPress={handleProfilePress}>
          <Icon name="user" size={24} color="#333" />
          <Text style={styles.iconLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={handleLoginPress}>
        <Icon name="sign-in" size={24} color="#333" />
        <Text style={styles.iconLabel}>Login</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleListPress}>
        <Icon name="list" size={24} color="#333" />
        <Text style={styles.iconLabel}>List</Text>
      </TouchableOpacity>
      </View>
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
  profileIcon: {
    alignItems: 'center', // This is to center the icon and label vertically inside the TouchableOpacity
  },
  iconLabel: {
    fontSize: 12,
    color: '#333',
  },
});

export default Footer;
