import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, images} from '../../../constants';

const MenuItem = ({navigation}: any) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Test')}
      style={{
        height: 100,
        width: 100,
        // backgroundColor: 'white',
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: 60,
          width: 60,
          // flex: 0.5,
          borderRadius: 60,
          backgroundColor: COLORS.green,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={icons.airplane}
          resizeMode="contain"
          height={20}
          width={20}
          style={{tintColor: 'white'}}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            color: COLORS.black,
            ...FONTS.body4,
          }}>
          Trang chu
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
