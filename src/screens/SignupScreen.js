import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
// import { setUser } from '../Slices/authSlice';
import { firebase } from '../../config';
// import { signUp } from '../utils/auth'; // Import signUp function from auth

const SignUpScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#%^&*()_+])[A-Za-z\d!@#%^&*()_+]{8,}$/;
    if (!passwordRegex.test(password)) {
      Alert.alert(
        'Error',
        'Password must be at least 8 characters and include an uppercase letter, a number, and a special character (!@#%^&*()_+).'
      );
      return;
    }

    // You can capture name here
    const userData = {
      name,
    };

    try {
      // Assuming firebase is imported properly
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url: 'https://list-it-2890a.firebaseapp.com', 
      });
      alert('Verification email sent');

      // Store additional user data (name, surname, phone number) in your database
      // await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set(userData);

      // Dispatch the user information to Redux
      dispatch(setUser({ email: 'user@example.com' }));

      // Navigate to SignIn screen after successful signup
      navigation.navigate('SignInScreen');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="words"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      {selectedImage && (
        <View style={styles.uploadContainer}>
          {/* Display the selected image if needed */}
        </View>
      )}
      <View style={styles.checkboxContainer}>
        <Text style={styles.termsText}>I agree to the Terms & Conditions</Text>
      </View>
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
        <Text style={styles.signInLink}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </ScrollView>
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
  uploadContainer: {
    height: 150,
    backgroundColor: '#3498db',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden', 
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  termsText: {
    fontSize: 16,
    marginLeft: 10,
  },
  signUpButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInLink: {
    fontSize: 16,
    textAlign: 'center',
    color: '#3498db',
  },
});

export default SignUpScreen;
