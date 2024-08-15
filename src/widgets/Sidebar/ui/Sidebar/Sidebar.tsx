import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

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
        {SidebarItemsList.map((item) => (
          <SidebarItem key={item.path} item={item} isCollapsed={isCollapsed} />
        ))}
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} short={isCollapsed} />
      </div>
    </div>
  );
};
