import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/services/stores';
import RootNavigation from './src/routes/rootNavigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {showErrorMessage} from './src/services/utils/message';
import {navigationRef} from './src/routes/utils';

const handleError = (error: any) => {
  // Errors handling
  console.log('error in react-query');
  const {response} = error;
  const {data, status} = response;
  if (data) {
    let messageError;
    if (data.title) {
      messageError = data.title;
    } else if (data.errorMessage) {
      messageError = data.errorMessage;
    } else if (data.message) {
      messageError = data.message;
    } else if (data.fieldErrors) {
      messageError = data.fieldErrors[0].message;
    } else {
      messageError = data.title || 'Có lỗi xảy ra';
    }

    if (status === 403) {
      showErrorMessage('Bạn không có quyền truy cập');
      navigationRef.navigate('Login');
      // history.push("/error/403");
    } else if (status === 401) {
      showErrorMessage('Vui lòng đăng nhập lại');
      navigationRef.navigate('Login');
    } else if (status === 400) {
      showErrorMessage(messageError);
    } else if (status >= 400 && status <= 410) {
      showErrorMessage(messageError);
    } else if (status !== 200 && status !== 201 && status !== 204) {
      showErrorMessage(messageError);
    }
  }
};
const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error: any) => {
        handleError(error);
      },
    },
    queries: {
      enabled: false,
      onError: (error: any) => {
        handleError(error);
      },
      retry: (failureCount: number, error: any) => {
        const {status} = error.response;
        if (status === 401 || status === 403) {
          return false;
        }

        return failureCount <= 3;
      },
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider style={styles.container}>
          <RootNavigation />
        </SafeAreaProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;

const styles = {
  container: {
    flex: 1,
  },
};
