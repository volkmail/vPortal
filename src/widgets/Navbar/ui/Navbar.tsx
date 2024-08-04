import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const authData = useSelector(getUserAuthData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation('navbar');
  const dispatch = useDispatch();

  const onToggleModalHandler = useCallback(
    () => setIsModalOpen(!isModalOpen),
    [isModalOpen],
  );

  const onLogoutButtonHandler = useCallback(() => {
    dispatch(userActions.logout());
    setIsModalOpen(false);
  }, [dispatch]);

  if (authData) {
    return (
      <nav className={classNames(styles.Navbar, {}, [className])}>
        <Button
          className={styles.links}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onLogoutButtonHandler}
        >
          {t('Выйти')}
        </Button>
      </nav>
    );
  }

  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <Button
        className={styles.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onToggleModalHandler}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isModalOpen} onClose={onToggleModalHandler} />
    </nav>
  );
};

export { Navbar };
