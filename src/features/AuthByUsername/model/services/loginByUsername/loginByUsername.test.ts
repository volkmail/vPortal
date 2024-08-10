import axios from 'axios';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { StateSchema } from 'app/providers/StoreProvider';
import { Dispatch } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('loginByUserName.test', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  const testUserData = { id: '1', username: 'admin' };

  test('Successful auth', async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        data: testUserData,
      }),
    );
    const action = loginByUsername({ username: 'admin', password: 'admin' });
    const result = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(testUserData),
    );
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(testUserData);
  });

  test('Error auth', async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        status: 403,
      }),
    );
    const action = loginByUsername({
      username: 'not_existing_user_name',
      password: 'mega_password',
    });
    const result = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
