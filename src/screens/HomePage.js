import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';
import LoginScreen from './LoginScreen';

const HomePage = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <View style={styles.container}>
      <Header loggedIn={loggedIn} />
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the Home Page!</Text>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});

export default HomePage;
