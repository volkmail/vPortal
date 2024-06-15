import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.NotFoundPage, {}, [props.className])}>
      {t('Страница не найдена')}
    </div>
  );
};

export { NotFoundPage };
