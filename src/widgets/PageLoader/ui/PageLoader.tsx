import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = (props) => (
  <div className={classNames(styles.PageLoader, {}, [props.className])}>
    <div className={classNames(styles.ldsEllipsis, {}, [])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export { PageLoader };
