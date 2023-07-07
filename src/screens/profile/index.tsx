import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import MenuItem from '../../components/Profile/MenuItem';
import DetailProfile from './detail-profile';
import ChangePassword from './change-password';

const Profile = () => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      {/* information toturial  */}
      <View
        style={{
          height: 350,
          backgroundColor: 'red',
        }}></View>
      {/* layout menu  */}
      <View
        style={{
          gap: 10,
          // backgroundColor: 'gray',
        }}>
        <MenuItem label="Thông tin chi tiết" route={'DetailProfile'} />
        <MenuItem label="Đổi mật khẩu" route={'ChangePassword'} />
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
