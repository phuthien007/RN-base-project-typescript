import {View} from 'react-native';
import React, {useEffect} from 'react';
import {ActivityIndicator} from '@ant-design/react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../services/stores';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getMe,
  setAuthorized,
  setLoading,
} from '../../services/stores/sliceReducers/UserSlice';

const Splash = () => {
  const navigation = useNavigation();
  const {authorized, loading} = useSelector((state: RootState) => state.users);

  React.useEffect(() => {
    if (authorized) {
      navigation.navigate('MainNavigation');
      return;
    }
    if (!authorized && !loading) navigation.navigate('AuthNavigation');
  }, [authorized, loading, navigation]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const SplashComponent = () => {
  const navigation = useNavigation();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // value previously stored
        dispatch(getMe());
      } else {
        console.log('value nav', value);
        navigation.navigate('AuthNavigation');
      }
    } catch (e) {
      // error reading value
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    // set storage async, check token nếu có call me, không có thì chuyển sang login
    getData();
  }, []);

  return <Splash />;
};

export default SplashComponent;
