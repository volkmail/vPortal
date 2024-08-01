import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

const App = () => (
  <div className={classNames('app', {}, [])}>
    <Suspense fallback='LOADING TRANSLATE...'>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </Suspense>
  </div>
);

export { App };
