/* eslint-disable @typescript-eslint/no-unused-vars */
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {UserState} from '../../models/Users';

const initialState: UserState = {
  id: '',
  name: '',
  authorities: [],
  email: '',
  avatar: '',
  partnerId: '',
  partnerName: '',
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
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.authorities = action.payload.authorities;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.partnerId = action.payload.partnerId;
      state.partnerName = action.payload.partnerName;
    },
  },
});

export const {setLoading, setAuthorized, setState} = userSlice.actions;

export default userSlice.reducer;
