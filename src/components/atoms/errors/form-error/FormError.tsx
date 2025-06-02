import { FC } from 'react';
import styles from './FormError.module.scss';
import clsx from 'clsx';

interface FormErrorProps {
  errorText: string | undefined;
}

export const FormError: FC<FormErrorProps> = ({ errorText }) => {
  const textStyles = clsx(styles.text, {
    [styles.visible]: errorText,
  });

  return (
    <div className={styles.error}>
      <p className={textStyles}>{errorText}</p>
    </div>
  );
};
