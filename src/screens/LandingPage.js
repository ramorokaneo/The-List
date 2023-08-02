import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const LandingPage = ({ navigation }) => {
  const { colors } = useTheme();

  const categories = [
    { name: 'Groceries', icon: 'shopping-cart' },
    { name: 'Household Supplies', icon: 'home' },
    { name: 'Personal Care', icon: 'user' },
    { name: 'Health and Medications', icon: 'heartbeat' },
    { name: 'Kitchen and Cooking', icon: 'utensils' },
    { name: 'Baby and Children', icon: 'baby' },
    { name: 'Pet Supplies', icon: 'paw' },
    { name: 'Office and Stationery', icon: 'briefcase' },
    { name: 'Electronics and Tech', icon: 'tv' },
    { name: 'Home Improvement', icon: 'tools' },
    { name: 'Outdoor and Garden Supplies', icon: 'tree' },
    { name: 'Others', icon: 'ellipsis-h' },
  ];

  const handleCategoryPress = (category) => {
    switch (category.name) {
      case 'Groceries':
        navigation.navigate('GroceryList');
        break;
      case 'Household Supplies':
        navigation.navigate('HouseholdSuppliesList');
        break;
      case 'Personal Care':
        navigation.navigate('PersonalCareList');
        break;
      case 'Health and Medications':
        navigation.navigate('HealthMedicationsList');
        break;
      case 'Kitchen and Cooking':
        navigation.navigate('KitchenCookingList');
        break;
      case 'Baby and Children':
        navigation.navigate('BabyChildrenList');
        break;
      case 'Pet Supplies':
        navigation.navigate('PetSuppliesList');
        break;
      case 'Office and Stationery':
        navigation.navigate('OfficeStationeryList');
        break;
      case 'Electronics and Tech':
        navigation.navigate('ElectronicsTechList');
        break;
      case 'Home Improvement':
        navigation.navigate('HomeImprovementList');
        break;
      case 'Outdoor and Garden Supplies':
        navigation.navigate('OutdoorGardenList');
        break;
      // Add cases for other categories
      default:
        console.log(`Category: ${category.name}`);
    }
  };

  const renderCategoryButtons = () => {
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => console.log('Profile Icon Pressed')}>
          <FontAwesome5 name="user-circle" size={30} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={[styles.signinText, { color: colors.text }]}>Signin</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.title, { color: colors.text }]}>Welcome to Let's Shop!</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={[styles.searchInput, { borderColor: colors.text, color: colors.text }]}
          placeholder="Search"
          placeholderTextColor={colors.text}
        />
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome5 name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.categoryButtonsContainer}>
        {renderCategoryButtons()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 10,
  },
  signinText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  categoryButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
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

export default LandingPage;
