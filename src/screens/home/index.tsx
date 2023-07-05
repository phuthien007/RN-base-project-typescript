import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {useDispatch} from 'react-redux';
import {RootState, useAppSelector} from '../../services/stores';
import {setMessage} from '../../services/stores/sliceReducers/MessageSlice';

const Home = () => {
  const dispatch = useDispatch();

  const {message} = useAppSelector((state: RootState) => state.message);

  const handlePress = (msg: string) => {
    dispatch(setMessage(msg));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello: {message}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handlePress('Hello world')}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLORS.primary,
  },
  text: {
    color: COLORS.primary,
  },
  btn: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
