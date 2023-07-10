import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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
import {styles} from '../../../styles/global';

const HomeHeader = () => {
  const dispatch = useDispatch();
  const {fullName, roles} = useAppSelector((state: RootState) => state.users);
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
        // backgroundColor: COLORS.white,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          gap: 12,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* avatar  */}
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconOutline name="user" size={30} color={COLORS.white} />
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
              {fullName}
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
              {roles?.map(item => item.split('_')[1]).join(', ')}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={logoutHandle}
        style={[
          styles.button,
          {
            backgroundColor: COLORS.primary,
            marginTop: 0,
          },
        ]}>
        <IconOutline
          name="logout"
          size={30}
          color={COLORS.white}
          onPress={logoutHandle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
