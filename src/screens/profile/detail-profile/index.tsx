/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../constants';
import {Controller, useForm} from 'react-hook-form';
import {Button, InputItem, TextareaItem} from '@ant-design/react-native';
import {RootState, useAppSelector} from '../../../services/stores';
import {IconOutline} from '@ant-design/icons-react-native';

const DetailProfile = () => {
  const users = useAppSelector((state: RootState) => state.users);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      ...users,
      roles: users?.authorities
        ? users?.authorities.map(item => item.split('_')[1]).join(', ')
        : '',
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <ScrollView style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <InputItem
            placeholder="Email"
            style={styles.text}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={COLORS.gray}>
            <Text style={styles.text}>Email:</Text>
          </InputItem>
        )}
        name="email"
      />
      {errors.name && <Text>Email không được bỏ trống.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <InputItem
            style={styles.text}
            placeholder="Họ và tên"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={COLORS.gray}>
            <Text style={styles.text}>Họ và tên:</Text>
          </InputItem>
        )}
        name="name"
      />
      {/* số điện thoại  */}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <InputItem
            style={styles.text}
            placeholder="Số điện thoại"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={COLORS.gray}>
            <Text style={styles.text}>Số điện thoại:</Text>
          </InputItem>
        )}
        name="telephone"
      />
      {/* vai trò  */}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <InputItem
            style={styles.text}
            placeholder="Vai trò"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={COLORS.gray}>
            <Text style={styles.text}>Vai trò:</Text>
          </InputItem>
        )}
        name="roles"
      />
      {/* công ty  */}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <InputItem
            style={styles.text}
            placeholder="Công ty"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={COLORS.gray}>
            <Text style={styles.text}>Công ty:</Text>
          </InputItem>
        )}
        name="partnerName"
      />
      {/* ghi chú */}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View
            style={[
              styles.text,
              {
                padding: SIZES.padding / 2,
              },
            ]}>
            <Text style={[styles.text]}>Ghi chú</Text>
            <TextareaItem
              autoHeight
              rows={4}
              style={[
                styles.text,
                {
                  backgroundColor: 'transparent',
                },
              ]}
              placeholder="Điền ghi chú"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={COLORS.gray}
            />
          </View>
        )}
        name="note"
      />

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
          <Text style={styles.text}>Cập nhật</Text>
        </View>
      </Button>
      <View
        style={{
          height: 120,
        }}></View>
    </ScrollView>
  );
};

export default DetailProfile;

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
