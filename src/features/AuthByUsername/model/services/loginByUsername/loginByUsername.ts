import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'i18next';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';

interface LoginByUsername {
  username: string;
  password: string;
}

interface LoginByUsernameResponse extends User {
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsername,
  { rejectValue: string }
>('login/loginByUsername', async (loginData, thunkAPI) => {
  try {
    const response = await axios.post<LoginByUsernameResponse>(
      'http://localhost:8000/login',
      loginData,
    );

    if (!response.data) {
      throw new Error('loginByUsername/EMPTY_DATA');
    }

    const userResponseData = {
      id: response.data.id,
      username: response.data.username,
    };

    localStorage.setItem(
      USER_LOCALSTORAGE_KEY,
      JSON.stringify(userResponseData),
    );
    thunkAPI.dispatch(userActions.setAuthData(userResponseData));

    return userResponseData;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue(i18n.t('Введен неверный логин или пароль'));
  }
});
