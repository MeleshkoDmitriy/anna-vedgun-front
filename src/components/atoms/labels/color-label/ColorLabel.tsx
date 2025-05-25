import clsx from 'clsx';
import styles from './ColorLabel.module.scss';

export type TColorLabel = 'red' | 'green';

interface ColorLabelProps {
  color: TColorLabel;
  text: string;
}

export const ColorLabel = ({ color, text }: ColorLabelProps) => {
  const colorStyles = clsx(styles.label, {
    [styles.red]: color === 'red',
    [styles.green]: color === 'green',
  });

  return (
    <li className={colorStyles}>
      <span className={styles.text}>{text}</span>
    </li>
  );
};
