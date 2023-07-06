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

const HomeHeader = () => {
  const dispatch = useDispatch();
  const {name} = useAppSelector((state: RootState) => state.users);

  const logoutHandle = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setAuthorized(false));
      dispatch(setLoading(false));
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        {/* information account  */}
        <View style={{flex: 0.7, flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 50,
              width: 50,
              borderRadius: 50,
              backgroundColor: COLORS.green,
              flex: 0.2,
            }}>
            <IconOutline
              name="user"
              size={30}
              style={{marginTop: 8, color: COLORS.white}}
            />
          </View>
          <View style={{flex: 0.8, marginLeft: 5}}>
            <Text style={{color: COLORS.black, ...FONTS.h3}}>Xin chào</Text>
            <Text style={{color: COLORS.black, ...FONTS.body3}}>{name}</Text>
            <Text style={{color: COLORS.black, ...FONTS.body3}}>
              CONG TY TRACH NHIEM HUU HAN
            </Text>
          </View>
        </View>
        {/* Logout btn  */}
        <View style={{flex: 0.3}}>
          <Button
            onPress={logoutHandle}
            style={{
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.radius,
            }}>
            <IconOutline
              name="logout"
              size={20}
              color={COLORS.white}
              style={{marginRight: 5}}
            />
            <Text style={{color: COLORS.white}}>Logout</Text>
          </Button>
        </View>
      </View>
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
