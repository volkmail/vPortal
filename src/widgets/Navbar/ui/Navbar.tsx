import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation('navbar');
  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>/</div>
    </nav>
  );
};

export { Navbar };
