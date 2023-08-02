// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@react-navigation/native';
import { ScrollView, StyleSheet } from 'react-native';
import HomePage from './src/screens/HomePage';
import LandingPage from './src/screens/LandingPage';
import ShoppingList from './src/screens/ShoppingList';
import SignupSignin from './src/screens/SignupSignin';
import { theme } from './src/components/theme';
import GroceryList from './src/components/Lists/GroceryList';
import HouseholdSuppliesList from './src/components/Lists/HouseholdSuppliesList';
import PersonalCareList from './src/components/Lists/PersonalCareList';
import HealthMedicationsList from './src/components/Lists/HealthMedicationList';
import KitchenCookingList from './src/components/Lists/KitchenCookingList';
import BabyandChildrenList from './src/components/Lists/BabyandChildrenList';
import PetSuppliesList from './src/components/Lists/PetSuppliesList';
import OfficeStationeryList from './src/components/Lists/OfficeStationeryList';
import ElectronicsandTechList from './src/components/Lists/ElectronicsandTech';
import HomeImprovementList from './src/components/Lists/HomeImprovement';
import OutdoorandGardenList from './src/components/Lists/OutdoorandGardenList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <ScrollView contentContainerStyle={styles.container}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="ShoppingList" component={ShoppingList} />
            <Stack.Screen name="SignupSignin" component={SignupSignin} />
            <Stack.Screen name="GroceryList" component={GroceryList} />
            <Stack.Screen name="HouseholdSuppliesList" component={HouseholdSuppliesList} />
            <Stack.Screen name="PersonalCareList" component={PersonalCareList} />
            <Stack.Screen name="HealthMedicationsList" component={HealthMedicationsList} />
            <Stack.Screen name="KitchenCookingList" component={KitchenCookingList} />
            <Stack.Screen name="BabyandChildrenList" component={BabyandChildrenList} />
            <Stack.Screen name="PetSuppliesList" component={PetSuppliesList} />
            <Stack.Screen name="OfficeStationeryList" component={OfficeStationeryList} />
            <Stack.Screen name="ElectronicsandTechList" component={ElectronicsandTechList} />
            <Stack.Screen name="HomeImprovementList" component={HomeImprovementList} />
            <Stack.Screen name="OutdoorandGardenList" component={OutdoorandGardenList} />
          </Stack.Navigator>
        </ScrollView>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
});

export default App;
