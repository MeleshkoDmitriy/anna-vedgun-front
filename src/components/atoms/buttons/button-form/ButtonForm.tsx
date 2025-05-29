'use client';

import clsx from 'clsx';
import styles from './ButtonForm.module.scss';
import { ButtonProps } from '../Button';
import { FC } from 'react';
import { useFormStatus } from 'react-dom';
import { Spinner } from '../../spinner/Spinner';

export const ButtonForm: FC<Omit<ButtonProps, 'variant'>> = ({ text, onClick, size }) => {
  const { pending } = useFormStatus();

  const buttonStyles = clsx(styles.button, {
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
  });

  return (
    <button className={buttonStyles} onClick={onClick} disabled={pending}>
      {pending ? <Spinner color="white" /> : <span className={styles.text}>{text}</span>}
    </button>
  );
};
