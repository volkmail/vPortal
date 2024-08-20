import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('login/fetchProfileData', async (_, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.get('/profile');

    if (!response.data) {
      throw new Error('fetchProfileData/EMPTY_DATA');
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue(i18n.t('Введен неверный логин или пароль'));
  }
});
