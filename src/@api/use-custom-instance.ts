/* eslint-disable */
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios, {AxiosRequestConfig} from 'axios';
import qs from 'qs';

let isRefreshing = false;
let refreshSubscribers = [];

const AXIOS_INSTANCE = Axios.create({
  baseURL: 'http://gateway-dev.wemove.com.vn/services/partner',
  paramsSerializer: (params: any) => {
    return qs.stringify(params, {
      skipNulls: true,
      arrayFormat: 'repeat',
      indices: false,
    });
  },
});

AXIOS_INSTANCE.interceptors.request.use(
  async config => {
    const accessToken = await AsyncStorage.getItem('token');
    console.log('accessToken', accessToken);
    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

AXIOS_INSTANCE.interceptors.response.use(undefined, error => {
  const originalRequest = error.config;
  if (
    ((error.response && error.response.status === 401) ||
      error.status === 401) &&
    originalRequest.url !== '/auth/api/authenticate'
  ) {
  }

  return Promise.reject(error);
});

// add a second `options` argument here if you want to pass extra options to each generated query
export const customInstance = AXIOS_INSTANCE;

export const useCustomInstance = <T>(): ((
  config: AxiosRequestConfig,
) => Promise<T>) => {
  return (config: AxiosRequestConfig) => {
    const source = Axios.CancelToken.source();
    const promise = AXIOS_INSTANCE({
      ...config,
      cancelToken: source.token,
    }).then(({data}) => data);

    // @ts-ignore
    promise.cancel = () => {
      source.cancel('Query was cancelled by React Query');
    };

    return promise;
  };
};

export default useCustomInstance;
