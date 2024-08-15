import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  };
  isCollapsed?: boolean;
}

const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, isCollapsed } = props;
  const { t } = useTranslation('sidebar');

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(styles.SidebarItem, {
        [styles.isCollapsed]: isCollapsed,
      })}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>{t(item.text)}</span>
    </AppLink>
  );
});

export { SidebarItem };
