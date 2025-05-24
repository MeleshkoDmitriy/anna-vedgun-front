import { FC } from 'react';
import styles from './TextLabel.module.scss';
import clsx from 'clsx';

interface TextLabelProps {
  text: string;
  isActive?: boolean;
}

export const TextLabel: FC<TextLabelProps> = ({ text, isActive }) => {
  const wrapperStyles = clsx(styles.wrapper, {
    [styles.active]: isActive,
  });

  return (
    <div className={wrapperStyles}>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
