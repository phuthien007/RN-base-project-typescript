import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';
import HomeHeader from '../../components/Home/Header';
import MenuItem from '../../components/Menu/MenuItem';

const Home = ({navigation}: any) => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      {/* header  */}
      <View
        style={{
          height: 90,
          backgroundColor: COLORS.white,
        }}>
        <HomeHeader />
      </View>
      {/* body content */}
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGray,
          borderTopLeftRadius: SIZES.radius * 2,
          borderTopRightRadius: SIZES.radius * 2,
          // marginBottom: 180,
        }}>
        <View>
          <View>
            <Text
              style={{
                color: COLORS.black,
                fontSize: SIZES.h3,
                fontWeight: 'bold',
                paddingHorizontal: SIZES.base * 2,
                paddingTop: SIZES.base * 2,
              }}>
              Dành cho bạn
            </Text>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: SIZES.base,
                flexWrap: 'wrap',
                paddingTop: SIZES.base * 2,
                paddingHorizontal: SIZES.base * 2,
              }}>
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
            </View>
          </View>
        </View>
        <View>
          <View>
            <Text
              style={{
                color: COLORS.black,
                fontSize: SIZES.h3,
                fontWeight: 'bold',
                paddingHorizontal: SIZES.base * 2,
                paddingTop: SIZES.base * 2,
              }}>
              Dành cho bạn
            </Text>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: SIZES.base,
                flexWrap: 'wrap',
                paddingTop: SIZES.base * 2,
                paddingHorizontal: SIZES.base * 2,
              }}>
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
            </View>
          </View>
        </View>
        <View>
          <View>
            <Text
              style={{
                color: COLORS.black,
                fontSize: SIZES.h3,
                fontWeight: 'bold',
                paddingHorizontal: SIZES.base * 2,
                paddingTop: SIZES.base * 2,
              }}>
              Dành cho bạn
            </Text>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: SIZES.base,
                flexWrap: 'wrap',
                paddingTop: SIZES.base * 2,
                paddingHorizontal: SIZES.base * 2,
              }}>
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
            </View>
          </View>
        </View>
        <View
          style={{
            height: 80,
          }}></View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLORS.primary,
    backgroundColor: COLORS.white,
    marginBottom: 0,
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
