import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutSVG from 'shared/assets/icons/about-20-20.svg';
import MainSVG from 'shared/assets/icons/main-20-20.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { t } = useTranslation('sidebar');

  const onToggle = () => setIsCollapsed((prevState) => !prevState);

  return (
    <div
      data-testid='sidebar_test'
      className={classNames(
        styles.Sidebar,
        { [styles.isCollapsed]: isCollapsed },
        [className],
      )}
    >
      <Button
        data-testid='sidebar__toggle-btn_test'
        type='button'
        onClick={onToggle}
        className={styles.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={styles.item}
        >
          <MainSVG className={styles.icon} />
          <span className={styles.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={styles.item}
        >
          <AboutSVG className={styles.icon} />
          <span className={styles.link}>{t('О сайте')}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} short={isCollapsed} />
      </div>
    </div>
  );
};
