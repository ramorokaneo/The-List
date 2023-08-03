import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ loggedIn }) => {
  return (
    <View style={styles.container}>
      <Icon name="location-arrow" size={24} color="#fff" style={styles.icon} />
      <Icon name="search" size={24} color="#fff" style={styles.icon} />
      {loggedIn ? (
        <Icon name="lock" size={24} color="#fff" style={styles.icon} />
      ) : (
        <Icon name="unlock" size={24} color="#fff" style={styles.icon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#00cbcc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default Header;
