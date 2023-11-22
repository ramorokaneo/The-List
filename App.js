import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/Store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/Screens/SplashScreen';
import SignInScreen from './src/Screens/SignInScreen';
import HomeScreen from './src/Screens/HomeScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import ShoppingListScreen from './src/Screens/ShoppingListScreen';
import HistoryScreen from './src/Screens/HistoryScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="ShoppingListScreen" component={ShoppingListScreen} />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
