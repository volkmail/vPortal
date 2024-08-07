import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const loginFormReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onChangeUsernameHandler = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePasswordHandler = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginButtonClickHandler = () => {
    dispatch(loginByUsername({ username, password }));
  };

  return (
    <DynamicModuleLoader reducers={loginFormReducers} removeAfterUnmount>
      <div className={classNames(styles.LoginForm, {}, [props.className])}>
        <Text title={t('Форма авторизации')} />
        {error && (
          <Text title={t('Ошибка')} text={error} theme={TextTheme.ERROR} />
        )}
        <Input
          value={username}
          type='text'
          className={styles.input}
          placeholder={t('Логин')}
          onChange={onChangeUsernameHandler}
          autofocus
        />
        <Input
          value={password}
          type='text'
          className={styles.input}
          placeholder={t('Пароль')}
          onChange={onChangePasswordHandler}
        />
        <Button
          className={styles.loginBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onLoginButtonClickHandler}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
