import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginFormLazy } from 'features/AuthByUsername/ui/LoginForm';
import { Loader } from 'shared/ui/Loader';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const LoginModal: FC<LoginModalProps> = (props) => (
  <Modal
    isOpen={props.isOpen}
    onClose={props.onClose}
    className={classNames('', {}, [props.className])}
    lazy
  >
    <Suspense fallback={<Loader />}>
      <LoginFormLazy />
    </Suspense>
  </Modal>
);

export { LoginModal };
