import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/services/stores';
import RootNavigation from './src/routes/rootNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        <RootNavigation />
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
