/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {COLORS, SIZES} from '../../constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../../screens/profile';
import Home from '../../screens/home';
import {IconOutline} from '@ant-design/icons-react-native';

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
      }}
      initialRouteName="Dashboard">
      <Tab.Screen
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({focused}) => (
            <IconOutline
              name="home"
              size={24}
              color={focused ? COLORS.primary : COLORS.gray}
            />
          ),
        }}
        name="Dashboard"
        component={Home}
      />
      {/* <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Bookmark" component={Bookmark} /> */}
      <Tab.Screen
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: ({focused}) => (
            <IconOutline
              name="user"
              size={24}
              color={focused ? COLORS.primary : COLORS.gray}
            />
          ),
        }}
        name="Account"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
