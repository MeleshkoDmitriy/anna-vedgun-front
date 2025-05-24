import { FC } from 'react';
import { ButtonProps } from '../Button';
import styles from './ButtonOutline.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

export const ButtonOutline: FC<Omit<ButtonProps, 'variant'>> = ({ text, onClick, size, link }) => {
  const buttonStyles = clsx(styles.button, {
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
  });

  return link ? (
    <Link href={link} target="_blank" className={styles.link}>
      <button className={buttonStyles} onClick={onClick}>
        <span className={styles.text}>{text}</span>
      </button>
    </Link>
  ) : (
    <button className={buttonStyles} onClick={onClick}>
      <span className={styles.text}>{text}</span>
    </button>
  );
};
