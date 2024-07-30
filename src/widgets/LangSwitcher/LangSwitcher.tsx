import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const onToggleLangHandler = useCallback(
    () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru'),
    [],
  );

  return (
    <Button
      className={classNames(styles.LangSwitcher, {}, [props.className])}
      theme={ButtonTheme.CLEAR}
      onClick={onToggleLangHandler}
    >
      {t(props.short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};
