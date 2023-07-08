import {View, Text} from 'react-native';
import React from 'react';
import {IconOutline} from '@ant-design/icons-react-native';
import {COLORS, SIZES} from '../../../constants';
import {useAppSelector} from '../../../services/stores';

const HeaderProfile = () => {
  const {authorities, email, name, partnerName} = useAppSelector(
    state => state.users,
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        paddingHorizontal: SIZES.base * 3,
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
              color: 'white',
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
              color: 'white',
              fontSize: SIZES.body4,
            }}>
            {authorities?.map(item => item.split('_')[1]).join(', ')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderProfile;
