import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import LandingPage from './src/screens/LandingPage';
import LoadingScreen from './src/screens/LoadingScreen';
import HomePage from './src/screens/HomePage';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import TermsAndConditions from './src/Pages/TermsAndConditionsScreen';
import ProfileScreen from './src/Pages/ProfileScreen';
import ListPage from './src/screens/ListPage';
import MyListScreen from './src/screens/MyListScreen';


const Stack = createStackNavigator();

const App = () => {
  const [dataLoaded, setDataLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setDataLoaded(true);
    }, 2000);
  }, []);

  if (!dataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name='Signup' component={SignupScreen} />
          <Stack.Screen name='TermsAndConditions' component={TermsAndConditions} />
          <Stack.Screen name='Profile' component={ProfileScreen} />
          <Stack.Screen name='List' component={ListPage} />
          <Stack.Screen name='MyList' component={MyListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
