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
import {useNavigation} from '@react-navigation/native';
import SplashComponent from '../../../components/SplashComponent';
// import Button from '@ant-design/react-native/lib/button';

const ForgotPassword = () => {
  const navigation = useNavigation();
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
        Quên mật khẩu
      </Text>
      <Text
        style={{
          color: COLORS.gray,
          ...FONTS.body3,
        }}>
        Điền email để lấy lại mật khẩu
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
          Email
        </Text>
        <InputItem
          value={dataLogin.username}
          onChange={value => setDataLogin({...dataLogin, username: value})}
          placeholder="Nhập email"
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
          Gửi thông tin
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignContent: 'center',
    color: COLORS.black,
  },
});
