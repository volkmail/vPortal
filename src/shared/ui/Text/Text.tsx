import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
  DEFAULT = 'text_default_theme',
  ERROR = 'text_error_theme',
}

interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
}

const Text = (props: TextProps) => {
  const { theme = TextTheme.DEFAULT, className, text, title } = props;

  return (
    <div
      className={classNames(styles.Text, { [styles[theme]]: true }, [
        className,
      ])}
    >
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export { Text };
