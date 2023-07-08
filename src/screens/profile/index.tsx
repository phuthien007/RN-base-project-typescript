import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';
import MenuItem from '../../components/Profile/MenuItem';
import HeaderProfile from '../../components/Profile/HeaderProfile';
import {useDispatch} from 'react-redux';
import {
  setAuthorized,
  setLoading,
} from '../../services/stores/sliceReducers/UserSlice';
import SplashComponent from '../../components/SplashComponent';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const logoutHandle = (): void => {
    dispatch(setLoading(true));
    navigation.navigate(SplashComponent);
    setTimeout(() => {
      dispatch(setAuthorized(false));
      dispatch(setLoading(false));
    }, 3000);
  };
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      {/* information toturial  */}
      <View
        style={{
          height: 320,
          borderBottomEndRadius: 24,
          borderBottomStartRadius: 24,
          backgroundColor: COLORS.primary,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: SIZES.base,
        }}>
        {/* Toturial profile  */}
        <HeaderProfile />
      </View>
      {/* layout menu  */}
      <View
        style={{
          gap: 10,
          // backgroundColor: 'gray',
        }}>
        <MenuItem label="Thông tin chi tiết" route={'DetailProfile'} />
        <MenuItem label="Đổi mật khẩu" route={'ChangePassword'} />
        <MenuItem onHandlePress={logoutHandle} label="Đăng xuất" disable />
      </View>
      <View
        style={{
          height: 100,
        }}></View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLORS.primary,
  },
  text: {
    color: COLORS.primary,
  },
});
