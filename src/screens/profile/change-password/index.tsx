/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../constants';
import {Controller, useForm} from 'react-hook-form';
import {Button, Grid, InputItem, TextareaItem} from '@ant-design/react-native';
import {RootState, useAppSelector} from '../../../services/stores';
import {IconOutline} from '@ant-design/icons-react-native';

const ChangePassword = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: SIZES.base * 2,
      }}>
      <View
        style={{
          flex: 1,
          gap: 12,
          alignItems: 'flex-start',
        }}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputItem
              labelNumber={5}
              labelPosition="top"
              type="password"
              placeholder="Điền mật khẩu cũ"
              style={styles.text}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={COLORS.gray}>
              <Text style={styles.text}>Mật khẩu cũ:</Text>
            </InputItem>
          )}
          name="password"
        />
        {errors.password && <Text>Mật khẩu cũ không được bỏ trống</Text>}
      </View>
      <View
        style={{
          flex: 1,
          gap: 12,
          alignItems: 'flex-start',
        }}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputItem
              labelPosition="top"
              labelNumber={5}
              type="password"
              placeholder="Điền mật khẩu mới"
              style={styles.text}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={COLORS.gray}>
              <Text style={styles.text}>Mật khẩu mới:</Text>
            </InputItem>
          )}
          name="newPassword"
        />
        {errors.newPassword && <Text>Mật khẩu mới không được bỏ trống</Text>}
      </View>
      <View
        style={{
          flex: 1,
          gap: 12,
          alignItems: 'flex-start',
        }}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputItem
              labelNumber={5}
              labelPosition="top"
              type="password"
              placeholder="Điền lại mật khẩu mới"
              style={[styles.text]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={COLORS.gray}>
              <Text style={[styles.text]}>Nhập lại mật khẩu mới:</Text>
            </InputItem>
          )}
          name="confirmPassword"
        />
      </View>
      {/* {errors.password && <Text></Text>} */}

      <Button
        style={{
          marginTop: 20,
          width: '60%',
          alignSelf: 'center',
          borderRadius: SIZES.radius,
          // backgroundColor
        }}
        onPress={handleSubmit(onSubmit)}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <IconOutline name="save" size={20} color={COLORS.black} />
          <Text style={styles.text}>Lưu</Text>
        </View>
      </Button>
      <View
        style={{
          height: 120,
        }}></View>
    </ScrollView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'transparent',
    padding: SIZES.padding / 2,
  },
  text: {
    color: COLORS.black,
  },
});
