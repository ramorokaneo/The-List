import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';

const LoginScreen = ({ navigation }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = {
      usernameOrEmail,
      password,
    };

    Axios.post('http://YOUR_BACKEND_API_URL/api/users/login', userData)
      .then((response) => {
        // Assuming the backend returns a token upon successful login
        const token = response.data.token;
        // Store the token in your app's state or AsyncStorage for future authenticated requests
        // ...

        // Show a success message upon successful login
        Alert.alert('Logged In Successfully', 'Welcome to our app!');
        // Here, you can navigate to the home screen or perform other actions after successful login
        navigation.navigate('Home');
      })
      .catch((error) => {
        Alert.alert('Login Failed', 'Invalid credentials. Please try again.');
      });
  };

  const handleTermsAndConditionsPress = () => {
    navigation.navigate('TermsAndConditions');
  };

  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        value={usernameOrEmail}
        onChangeText={setUsernameOrEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTermsAndConditionsPress}>
        <Text style={styles.termsText}>
          By logging in, you agree to our{' '}
          <Text style={styles.linkText}>Terms & Conditions</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignupPress}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLinkText}>Signup</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#00cbcc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  termsText: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
