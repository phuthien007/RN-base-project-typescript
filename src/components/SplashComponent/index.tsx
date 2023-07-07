import {View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from '@ant-design/react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../services/stores';

const Splash = () => {
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
  const {authorized, loading} = useSelector((state: RootState) => state.users);

  React.useEffect(() => {
    if (loading) {
      return;
    }
    if (authorized) {
      navigation.navigate('MainNavigation');
      return;
    }

    navigation.navigate('AuthNavigation');
  }, [authorized, loading]);
  return <Splash />;
};

export default SplashComponent;
