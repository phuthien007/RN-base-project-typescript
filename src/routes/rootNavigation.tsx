import {StatusBar} from 'react-native';
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './utils';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigation from './Auth';
import SplashComponent from '../components/SplashComponent';

import MainNavigation from './Main';

const Stack = createNativeStackNavigator();
// const insets = useSafeAreaInsets();
const RootNavigation = () => {
  const theme = {
    ...DefaultTheme,
    color: {
      ...DefaultTheme.colors,
      border: 'transparent',
    },
  };

  return (
    <NavigationContainer theme={theme} ref={navigationRef}>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SplashComponent">
        <Stack.Screen name="SplashComponent" component={SplashComponent} />
        <Stack.Screen name="MainNavigation" component={MainNavigation} />
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
