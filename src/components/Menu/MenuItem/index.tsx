import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {COLORS, FONTS, SIZES, icons, images} from '../../../constants';
import {useNavigation} from '@react-navigation/native';

type MenuItemProps = {
  label?: string;
  route?: string;
};

const MenuItem: FC<MenuItemProps> = ({label = 'Test', route = 'Test'}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={{
        height: 100,
        width: 100,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: SIZES.base,
        overflow: 'hidden',
        opacity: 0.9,
      }}>
      <View
        style={{
          height: 60,
          width: 60,
          // flex: 0.5,
          borderRadius: 60,
          backgroundColor: COLORS.white,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={icons.airplane}
          resizeMode="contain"
          height={20}
          width={20}
          style={{tintColor: COLORS.third}}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h3,
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
