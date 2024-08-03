import React, {
  InputHTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  autofocus?: boolean;
}

const Input = memo((props: InputProps) => {
  const {
    onChange,
    className,
    value,
    placeholder,
    autofocus,
    type = 'text',
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const onToggleIsFocusedHandler = () => {
    setIsFocused(!isFocused);
  };

  const onSelectHandler = (e: any) => {
    setCaretPosition(e.target.selectionStart || 0);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  return (
    <div className={classNames(styles.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={styles.caretWrapper}>
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={styles.input}
          onFocus={onToggleIsFocusedHandler}
          onBlur={onToggleIsFocusedHandler}
          onSelect={onSelectHandler}
          {...otherProps}
        />
        {isFocused && (
          <span className={styles.caret} style={{ left: caretPosition * 9 }} />
        )}
      </div>
    </div>
  );
});

export { Input };
