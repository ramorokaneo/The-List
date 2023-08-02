// src/screens/ShoppingList.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const ShoppingList = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>My Shopping List</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>1. Apples</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>2. Milk</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>3. Bread</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>4. Eggs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listItem: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default ShoppingList;
