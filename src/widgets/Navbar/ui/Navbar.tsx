import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation('navbar');

  const onToggleModalHandler = useCallback(
    () => setIsModalOpen(!isModalOpen),
    [isModalOpen],
  );

  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <Button
        className={styles.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onToggleModalHandler}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isModalOpen} onClose={onToggleModalHandler}>
        AUTHORIZATION
      </Modal>
    </nav>
  );
};

export { Navbar };
