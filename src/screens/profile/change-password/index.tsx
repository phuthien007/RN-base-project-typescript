import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';

const ChangePassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ChangePassword</Text>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLORS.primary,
  },
  text: {
    color: COLORS.primary,
  },
});
