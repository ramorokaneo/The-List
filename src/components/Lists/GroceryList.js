// src/components/Lists/GroceryList.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const GroceryList = () => {
  const { colors } = useTheme();

  const categories = [
    { name: 'Fruits', icon: 'apple-alt' },
    { name: 'Vegetables', icon: 'carrot' },
    { name: 'Meat/Poultry/Fish', icon: 'drumstick-bite' },
    { name: 'Dairy Products', icon: 'cheese' },
    { name: 'Bread and Bakery items', icon: 'bread-slice' },
    { name: 'Canned and packaged Foods', icon: 'box' },
    { name: 'Beverages', icon: 'glass-martini' },
    { name: 'Snacks and Desserts', icon: 'cookie' },
    { name: 'Condiments and Sauces', icon: 'pepper-hot' },
    { name: 'Spices and Seasonings', icon: 'pepper-hot' },
    { name: 'Others', icon: 'ellipsis-h' },
  ];

  const handleCategoryPress = (category) => {
    console.log(`Category: ${category.name}`);
    // Implement your logic for handling category selection here
  };

  const renderCategoryList = () => {
    return categories.map((category, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.categoryButton, { borderColor: colors.text }]}
        onPress={() => handleCategoryPress(category)}
      >
        <FontAwesome5 name={category.icon} size={30} color={colors.text} />
        <Text style={[styles.categoryText, { color: colors.text }]}>
          {category.name}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Grocery List</Text>
      {/* Add your grocery list items here */}
      {renderCategoryList()}
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
  categoryButton: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'blue',
  },
});

export default GroceryList;
