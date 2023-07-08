/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, SIZES} from '../../constants';
import {IconOutline} from '@ant-design/icons-react-native';
import {ROUTES} from './config';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 1.1,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
          height: 80,
          borderTopLeftRadius: SIZES.radius * 2,
          borderTopRightRadius: SIZES.radius * 2,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          paddingBottom: SIZES.padding / 2,
        },
        unmountOnBlur: true,
      }}
      // initialRouteName="Dashboard"
      initialRouteName="Account">
      {ROUTES.map((route: any, index: number) => {
        const {name, component, options, icon} = route;
        return (
          <Tab.Screen
            key={`TabNavigation_${index}`}
            name={name}
            options={{
              ...options,
              tabBarIcon: ({focused}: {focused: boolean}) => (
                <IconOutline
                  name={icon}
                  size={24}
                  color={focused ? COLORS.primary : COLORS.gray}
                />
              ),
            }}
            component={component}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigation;
