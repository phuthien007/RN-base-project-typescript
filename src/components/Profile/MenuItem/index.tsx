import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../../../constants';
import {IconOutline} from '@ant-design/icons-react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';

type MenuItemProps = {
  label: string;
  route?: string;
  disable?: boolean;
  onHandlePress?: () => void;
};
const MenuItem: React.FC<MenuItemProps> = ({
  label,
  route,
  disable,
  onHandlePress,
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (!disable) {
      navigation.navigate(route);
    } else if (onHandlePress) {
      onHandlePress();
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
      }}>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: COLORS.gray,
          width: '80%',
          height: 64,
          borderRadius: SIZES.radius,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.h3,
              fontWeight: 'bold',
              paddingHorizontal: SIZES.base * 2,
              paddingTop: SIZES.base * 2,
            }}>
            {label}
          </Text>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingRight: SIZES.base * 2,
            }}>
            <IconOutline name="right" size={20} color={COLORS.black} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MenuItem;
