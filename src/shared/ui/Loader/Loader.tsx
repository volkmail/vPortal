import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = (props) => (
  <div className={classNames('ldsEllipsis', {}, [props.className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export { Loader };
