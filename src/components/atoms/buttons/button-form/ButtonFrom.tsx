import clsx from 'clsx';
import styles from './ButtonFrom.module.scss';
import { ButtonProps } from '../Button';
import { FC } from 'react';

export const ButtonFrom: FC<Omit<ButtonProps, 'variant'>> = ({ text, onClick, size }) => {
  const buttonStyles = clsx(styles.button, {
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
  });

  return (
    <button className={buttonStyles} onClick={onClick}>
      <span className={styles.text}>{text}</span>
    </button>
  );
};
