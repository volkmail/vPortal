import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError';
import { getProfileData } from '../../model/selectors/getProfileData';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profileCard');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(styles.ProfileCard, {}, [props.className])}>
      <div className={styles.header}>
        <Text title={t('Профиль')} />
        <Button theme={ButtonTheme.OUTLINE} className={styles.editBtn}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          value={data?.first}
          placeholder={t('Имя')}
          className={styles.input}
        />
        <Input
          value={data?.lastName}
          placeholder={t('Фамилия')}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export { ProfileCard };
