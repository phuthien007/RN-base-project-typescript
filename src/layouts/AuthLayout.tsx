import React from 'react';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/login';
const AuthLayout = () => {
  const theme = {
    ...DefaultTheme,
    color: {
      ...DefaultTheme.colors,
      border: 'transparent',
    },
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthLayout;
