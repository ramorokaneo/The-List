// src/screens/HealthMedicationsList.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const HealthMedicationsList = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Health and Medications List</Text>
      {/* Add your health and medications list items here */}
      <TouchableOpacity style={styles.addButton}>
        <FontAwesome5 name="plus" size={20} color="white" />
        <Text style={styles.addButtonText}>AddToList</Text>
      </TouchableOpacity>
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
    addButton: {
      flexDirection: 'row',
      backgroundColor: 'blue',
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 15,
      alignItems: 'center',
      marginTop: 20,
    },
    addButtonText: {
      color: 'white',
      marginLeft: 10,
      fontSize: 16,
    },
  });

export default HealthMedicationsList;
