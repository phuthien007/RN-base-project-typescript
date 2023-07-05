import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import messageReducer from './sliceReducers/MessageSlice';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

// optional, refetch on focus (disabled by default)
setupListeners(store.dispatch);
// get root state and appdispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
