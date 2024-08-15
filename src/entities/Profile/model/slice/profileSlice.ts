import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    // setAuthData: (state, action: PayloadAction<User>) => {
    //   state.authData = action.payload;
    // },
    // initAuthData: (state) => {
    //   const user = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY));
    //
    //   if (user) {
    //     state.authData = user;
    //   }
    // },
    // logout: (state) => {
    //   state.authData = undefined;
    //   localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    // },
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
