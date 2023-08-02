// src/screens/SignupSignin.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const SignupSignin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup / Signin</Text>
      {/* Add signup and signin components here */}
      <Button
        title="Signup"
        onPress={() => {/* Handle signup */}}
      />
      <Button
        title="Signin"
        onPress={() => {/* Handle signin */}}
      />
    </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default SignupSignin;
