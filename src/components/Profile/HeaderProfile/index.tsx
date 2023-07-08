import {View, Text} from 'react-native';
import React from 'react';
import {IconOutline} from '@ant-design/icons-react-native';
import {COLORS} from '../../../constants';
import {useAppSelector} from '../../../services/stores';

const HeaderProfile = () => {
  const {authorities, email, name, partnerName} = useAppSelector(
    state => state.users,
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* avatar  */}
        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: COLORS.lightGray,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconOutline name="user" size={60} color="black" />
        </View>
      </View>
      {/* name  */}
      <View
        style={{
          alignItems: 'flex-start',
          marginTop: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Tên: {name}
        </Text>
      </View>
      {/* company  */}
      <View
        style={{
          alignItems: 'flex-start',

          marginTop: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Email: {email}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'flex-start',

          marginTop: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Công ty: {partnerName}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'flex-start',

          marginTop: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Vai trò: {authorities?.map(item => item.split('_')[1]).join(', ')}
        </Text>
      </View>
    </View>
  );
};

export default HeaderProfile;
