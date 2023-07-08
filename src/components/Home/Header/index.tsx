import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {Button} from '@ant-design/react-native';
import {IconOutline} from '@ant-design/icons-react-native';
import {useDispatch} from 'react-redux';
import {RootState, useAppSelector} from '../../../services/stores';
import {
  setAuthorized,
  setLoading,
} from '../../../services/stores/sliceReducers/UserSlice';
import {useNavigation} from '@react-navigation/native';
import SplashComponent from '../../SplashComponent';

const HomeHeader = () => {
  const dispatch = useDispatch();
  const {name, authorities} = useAppSelector((state: RootState) => state.users);
  const navigation = useNavigation();
  const logoutHandle = () => {
    dispatch(setLoading(true));
    navigation.navigate(SplashComponent);
    setTimeout(() => {
      dispatch(setAuthorized(false));
      dispatch(setLoading(false));
    }, 3000);
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        paddingHorizontal: SIZES.base * 3,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          gap: 12,
          alignItems: 'center',
        }}>
        {/* avatar  */}
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.lightGray,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconOutline name="user" size={30} color="black" />
        </View>
        {/* name  */}
        <View
          style={{
            flex: 1,
            marginLeft: 10,
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              marginTop: 5,
            }}>
            <Text
              style={{
                color: COLORS.black,
                fontSize: SIZES.body2,
                fontWeight: 'bold',
              }}>
              {name}
            </Text>
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              marginTop: 5,
            }}>
            <Text
              style={{
                color: COLORS.black,
                fontSize: SIZES.body4,
              }}>
              {authorities?.map(item => item.split('_')[1]).join(', ')}
            </Text>
          </View>
        </View>
      </View>
      <Button
        onPress={logoutHandle}
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <IconOutline
          name="logout"
          size={30}
          color="black"
          onPress={logoutHandle}
        />
        <View
          style={{
            alignItems: 'center',
            marginTop: 5,
          }}>
          <Text
            style={{
              color: COLORS.black,
            }}>
            Đăng xuất
          </Text>
        </View>
      </Button>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    padding: 20,
    alignItems: 'center',
    paddingTop: SIZES.padding * 2,
  },
});
