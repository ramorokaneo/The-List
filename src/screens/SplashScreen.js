import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SplashScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Add logic for any async tasks or navigation after a splash screen
    // For example, navigate to SignInScreen after 2 seconds with a fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.navigate('SignInScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <Animated.View
      style={[
        styles.container,
        { width: width, height: height, opacity: fadeAnim },
      ]}
    >
      <Icon name="list-alt" size={150} color="#fff" style={styles.icon} />
      <Text style={styles.title}>List It</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db', // Set a vibrant background color
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Set a text color that contrasts with the background
  },
});

export default SplashScreen;
