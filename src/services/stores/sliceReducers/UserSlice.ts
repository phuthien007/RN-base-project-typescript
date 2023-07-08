/* eslint-disable @typescript-eslint/no-unused-vars */
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {UserState} from '../../models/Users';

const initialState: UserState = {
  id: '',
  name: '1',
  authorities: ['ROLE_ADMIN'],
  email: 'admin@gmail.com',
  avatar: '',
  partnerId: '',
  partnerName: 'CTY TNHH ABC',
  authorized: false, // false is default value
  loading: false,
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
    setState: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
    },
  },
});

export const {setLoading, setAuthorized, setState} = userSlice.actions;

export default userSlice.reducer;
