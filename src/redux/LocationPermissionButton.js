import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import * as Location from 'expo-location';
import { setLocationPermission } from '../redux/actions/locationActions'; // Import the location action

const LocationPermissionButton = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch(); // Initialize dispatch

  const handleLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      dispatch(setLocationPermission(status === 'granted')); // Dispatch the location permission action
    } catch (error) {
      console.error('Error requesting location permission:', error);
    }
  };

  return (
    <View style={styles.locationIconContainer}>
      <TouchableOpacity onPress={handleLocationPermission}>
        <FontAwesome5 name="map-marker-alt" size={30} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  locationIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 8,
    borderRadius: 20,
  },
});

export default LocationPermissionButton;
