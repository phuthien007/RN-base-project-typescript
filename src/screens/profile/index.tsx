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
import * as MenuItemMain from '../../components/Menu/MenuItem';
import * as stylesGlobal from '../../styles/global';

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
          height: 90,
          borderBottomEndRadius: 12,
          borderBottomStartRadius: 12,
          backgroundColor: COLORS.primary,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: SIZES.base,
          elevation: 5,
        }}>
        {/* Toturial profile  */}
        <HeaderProfile />
      </View>
      {/* layout menu  */}
      <View style={[stylesGlobal.styles.shadow, stylesGlobal.styles.menucard]}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: SIZES.base * 2,
            flexWrap: 'wrap',
            paddingVertical: SIZES.base * 2,
          }}>
          <MenuItemMain.default label="Thong tin" route={'DetailProfile'} />
          <MenuItemMain.default
            label="Quen mat khau"
            route={'ChangePassword'}
          />
          <MenuItemMain.default label="Trang chủ" route={'Home'} />
          <MenuItemMain.default label="Trang chủ" route={'Home'} />
          <MenuItemMain.default label="Trang chủ" route={'Home'} />
          <MenuItemMain.default label="Trang chủ" route={'Home'} />
        </View>
      </View>

      <View
        style={{
          gap: SIZES.base,
          paddingTop: SIZES.base * 2,
          // backgroundColor: 'gray',
          paddingHorizontal: SIZES.base * 2,
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
