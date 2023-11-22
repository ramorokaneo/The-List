import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setUser } from '../Slices/authSlice';

const SignInScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSignIn = () => {
    // Perform sign-in logic here

    // Dispatch the user information to Redux
    dispatch(setUser({ email: 'user@example.com' }));

    // Navigate to Home screen after successful sign-in
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate('SignUpScreen')}
      >
        <Text style={styles.signUpButtonText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ecf0f1', // Light background color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498db', // Title color
  },
  input: {
    height: 50,
    borderColor: '#3498db',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
    textAlign: 'center',
    color: '#2980b9',
    fontSize: 16,
  },
  signUpButton: {
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 10,
    borderColor: '#3498db',
    borderWidth: 2,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
