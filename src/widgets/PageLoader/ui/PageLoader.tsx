import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = (props) => (
  <div className={classNames(styles.PageLoader, {}, [props.className])}>
    <Loader />
  </div>
);

export { PageLoader };
