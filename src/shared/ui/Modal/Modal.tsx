import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 150;

const Modal: FC<ModalProps> = (props) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [styles.isOpen]: props.isOpen,
    [styles.isClosing]: isClosing,
  };

  const onCloseHandler = useCallback(() => {
    if (props.onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        setIsClosing(false);
        props.onClose();
      }, ANIMATION_DELAY);
    }
  }, [props.onClose]);

  const onKeyDownHandler = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        onCloseHandler();
      }
    },
    [onCloseHandler],
  );

  useEffect(() => {
    if (props.isOpen) {
      window.addEventListener('keydown', onKeyDownHandler);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDownHandler);
    };
  }, [props.isOpen, onKeyDownHandler]);

  useEffect(() => {
    if (props.isOpen) {
      setIsMounted(true);
    }
  }, [props.isOpen]);

  const onContentClickHandler = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation();
  };

  if (props.lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [props.className])}>
        <div className={styles.overlay} onClick={onCloseHandler}>
          <div className={styles.content} onClick={onContentClickHandler}>
            {props.children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export { Modal };
