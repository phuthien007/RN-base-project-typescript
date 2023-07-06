import React from 'react';
import MainLayout from './MainLayout';
import {useSelector} from 'react-redux';
import {RootState} from '../services/stores';
// import {ActivityIndicator} from '@ant-design/react-native';
import AuthLayout from './AuthLayout';
import {ActivityIndicator} from 'react-native';

const Layout = () => {
  const {authorized, loading} = useSelector((state: RootState) => state.users);
  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!authorized) {
    return <AuthLayout />;
  }

  return <MainLayout />;
};

export default Layout;
