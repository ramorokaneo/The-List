import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListHeader = () => {
  return (
    <View style={styles.container}>
      <Icon name="location-arrow" size={24} color="blue" style={styles.icon} />
      <Icon name="lock" size={24} color="black" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default ListHeader;
