import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const LandingPage = () => {
  const appName = useSelector((state) => state.landing.appName);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{appName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00cbcc',
  },
  text: {
    fontSize: 32,
    color: '#ccb3a3',
    fontWeight: 'bold',
  },
});

export default LandingPage;
