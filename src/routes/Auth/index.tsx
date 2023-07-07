import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './config';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      {ROUTES.map((route: any, index: number) => {
        const {name, component, options} = route;
        return (
          <Stack.Screen
            key={index}
            name={name}
            component={component}
            options={options}
          />
        );
      })}
      {/* <Stack.Screen name="Login" component={Login} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
