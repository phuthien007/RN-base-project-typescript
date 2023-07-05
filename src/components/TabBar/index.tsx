import React from 'react';
import {COLORS} from '../../constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../../screens/profile';
import Home from '../../screens/home';

const Tab = createBottomTabNavigator();

const TabBar = () => {
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
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
          height: 64,
        },
      }}
      initialRouteName="Dashboard">
      <Tab.Screen name="Dashboard" component={Home} />
      {/* <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Bookmark" component={Bookmark} /> */}
      <Tab.Screen name="Account" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabBar;
