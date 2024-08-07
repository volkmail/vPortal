import { FC, lazy } from 'react';
import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

const LoginFormLazy = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => resolve(import('./LoginForm')), 1000);
    }),
);

export { LoginFormLazy };
