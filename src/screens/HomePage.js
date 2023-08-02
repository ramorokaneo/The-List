// src/screens/HomePage.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Button from '../components/Button';
import { useTheme } from '@react-navigation/native';

const HomePage = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.contentContainer, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.text }]}>Welcome to Let's Shop!</Text>
        <Text style={[styles.description, { color: colors.text }]}>
          Start organizing your shopping list with ease using the Let's Shop app. Add items, set
          reminders, and enjoy a hassle-free shopping experience.
        </Text>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('LandingPage')}
        />
        <Button
          title="Signup / Signin"
          onPress={() => navigation.navigate('SignupSignin')}
        />
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
  contentContainer: {
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
  description: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default HomePage;
