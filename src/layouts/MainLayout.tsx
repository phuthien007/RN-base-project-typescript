import React from 'react';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabBar from '../components/TabBar';
import Test from '../screens/test';
const MainLayout = () => {
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
        initialRouteName="Home">
        <Stack.Screen name="Home" component={TabBar} />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Test',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
          }}
          name="Test"
          component={Test}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainLayout;
