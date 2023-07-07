import React from 'react';
import {ROUTES} from './config';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
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
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
