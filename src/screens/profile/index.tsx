import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLORS.primary,
  },
  text: {
    color: COLORS.primary,
  },
});
