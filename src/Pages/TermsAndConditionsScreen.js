import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TermsAndConditionsScreen = () => {
  const navigation = useNavigation();

  const handleAgree = () => {
    // Implement logic to store the user's agreement (e.g., in Redux or AsyncStorage) and navigate back to the LoginScreen
    // For example, you can use navigation.navigate('Login') to go back to the LoginScreen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.termsText}>The Terms and Conditions of the App:</Text>
      {/* Include your terms and conditions text here */}
      <TouchableOpacity style={styles.agreeButton} onPress={handleAgree}>
        <Text style={styles.agreeButtonText}>Agree</Text>
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
  termsText: {
    fontSize: 16,
    marginBottom: 20,
  },
  agreeButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  agreeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TermsAndConditionsScreen;
