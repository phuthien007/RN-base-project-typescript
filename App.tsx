import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/services/stores';
import Layout from './src/layouts';
import {COLORS} from './src/constants';
import {ScrollView} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        <Layout />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

const styles = {
  container: {
    flex: 1,
  },
};
