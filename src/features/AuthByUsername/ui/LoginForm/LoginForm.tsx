import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.LoginForm, {}, [props.className])}>
      <Input
        type='text'
        className={styles.input}
        placeholder={t('Логин')}
        autofocus
      />
      <Input type='text' className={styles.input} placeholder={t('Пароль')} />
      <Button className={styles.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};

export { LoginForm };
