import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';

const DetailProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DetailProfile</Text>
    </View>
  );
};

export default DetailProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLORS.primary,
  },
  text: {
    color: COLORS.primary,
  },
});
