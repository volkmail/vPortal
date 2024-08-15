import { lazy } from 'react';

const ProfilePageLazy = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => resolve(import('./ProfilePage')), 1000);
    }),
);

export { ProfilePageLazy };
