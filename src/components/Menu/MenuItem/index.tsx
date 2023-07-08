import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {COLORS, FONTS, icons, images} from '../../../constants';
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
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
