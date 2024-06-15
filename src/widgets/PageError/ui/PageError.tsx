import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = (props) => {
  const { t } = useTranslation();

  const reloadPage = () => window.location.reload();

  return (
    <div className={classNames(styles.PageError, {}, [props.className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};

export { PageError };
