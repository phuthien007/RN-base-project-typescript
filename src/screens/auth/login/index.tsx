import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {
  setAuthorized,
  setLoading,
  setState,
} from '../../../services/stores/sliceReducers/UserSlice';
import {COLORS, FONTS, SIZES, images} from '../../../constants';
import {InputItem} from '@ant-design/react-native';
import {UserState} from '../../../services/models/Users';
// import Button from '@ant-design/react-native/lib/button';

const Login = () => {
  const [dataLogin, setDataLogin] = React.useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setAuthorized(true));
      dispatch(
        setState({
          name: dataLogin.username,
        }),
      );
      dispatch(setLoading(false));
    }, 3000);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        flex: 1,
        // marginTop: SIZES.padding * 4,
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={images.logo}
        resizeMode="contain"
        style={{
          width: 240,
        }}
      />
      {/* header  */}
      <Text
        style={{
          color: COLORS.black,
          ...FONTS.h3,
          fontSize: SIZES.h1,
          paddingTop: SIZES.padding,
        }}>
        Đăng nhập
      </Text>
      <Text
        style={{
          color: COLORS.gray,
          ...FONTS.body3,
        }}>
        Chào mừng bạn quay trở lại
      </Text>
      {/* form data  */}
      <View
        style={{
          width: '100%',
          paddingRight: SIZES.padding,
          marginBottom: 20,
          paddingLeft: SIZES.padding / 2,
        }}>
        <Text style={{color: COLORS.black, marginTop: 20, marginLeft: 15}}>
          Tên đăng nhập
        </Text>
        <InputItem
          value={dataLogin.username}
          onChange={value => setDataLogin({...dataLogin, username: value})}
          placeholder="Nhập tên đăng nhập"
          placeholderTextColor={COLORS.gray}
        />
        <Text style={{color: COLORS.black, marginTop: 20, marginLeft: 15}}>
          Mật khẩu
        </Text>
        <InputItem
          value={dataLogin.password}
          onChange={value => setDataLogin({...dataLogin, password: value})}
          placeholder="Nhập mật khẩu"
          placeholderTextColor={COLORS.gray}
        />
      </View>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          backgroundColor: COLORS.primary,
          padding: SIZES.padding / 2,
          borderRadius: SIZES.radius,
          alignItems: 'center',
          width: 200,
        }}>
        <Text
          style={[
            {
              color: COLORS.white,
              fontSize: SIZES.h3,
            },
          ]}>
          Đăng nhập
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignContent: 'center',
    color: COLORS.black,
  },
});
