import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const LoginModal: FC<LoginModalProps> = (props) => (
  <Modal
    isOpen={props.isOpen}
    onClose={props.onClose}
    className={classNames(styles.LoginModal, {}, [props.className])}
    lazy
  >
    <LoginForm />
  </Modal>
);

export { LoginModal };
