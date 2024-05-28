import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => (
  <nav className={classNames(styles.Navbar, {}, [className])}>
    <div className={styles.links}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to='/'
        className={styles.mainLink}
      >
        Главная
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
        О сайте
      </AppLink>
    </div>
  </nav>
);

export { Navbar };
