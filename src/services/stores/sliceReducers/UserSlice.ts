/* eslint-disable @typescript-eslint/no-unused-vars */
import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {UserState} from '../../models/Users';
import {
  useAuthorizeHook,
  useGetAccount,
  useGetAccountHook,
} from '../../../@api/partner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AdminUserDTO} from '../../../@api/partner.schemas';

const initialState: Partial<
  AdminUserDTO & {
    authorized: boolean;
    loading: boolean;
  }
> = {
  authorized: false, // false is default value
  loading: true,
};

// api redux thunk

export const loginThunk = createAsyncThunk(
  'users/login',
  async (params: {username: string; password: string}, thunkAPI) => {
    const {username, password} = params;
    const response = await useAuthorizeHook()({
      username,
      password,
      rememberMe: true,
    });
    return response.id_token;
  },
);

export const getMe = createAsyncThunk(
  'users/getMe',
  async (_, thunkAPI): Promise<AdminUserDTO> => {
    const response = await useGetAccountHook()();
    return response;
  },
);
const storeData = async (value: string) => {
  AsyncStorage.setItem('token', value);
};
const userSlice = createSlice({
  name: 'users',
  initialState: {
    ...initialState,
  },
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setAuthorized: (state, action: PayloadAction<boolean>) => {
      state.authorized = action.payload;
    },
    setState: (state, action: PayloadAction<UserState>) => {},
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.authorized = true;
        state.loading = false;
        if (action.payload) {
          storeData(action.payload);
        }
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.authorized = false;
        state.loading = false;
      })
      .addCase(loginThunk.pending, (state, action) => {
        state.authorized = false;
        state.loading = true;
      });
    builder
      .addCase(getMe.fulfilled, (state, action) => {
        state.authorized = true;
        state.loading = false;
        state = {
          ...action.payload,
          authorized: true,
          loading: false,
        };
      })
      .addCase(getMe.rejected, (state, action) => {
        state.authorized = false;
        state.loading = false;
      })
      .addCase(getMe.pending, (state, action) => {
        state.authorized = false;
        state.loading = true;
      });
  },
});

export const {setLoading, setAuthorized, setState} = userSlice.actions;

export default userSlice.reducer;
