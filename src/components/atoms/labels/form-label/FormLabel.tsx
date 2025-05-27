import { ComponentPropsWithRef } from 'react';
import styles from './FormLabel.module.scss';

interface FormLabelProps extends ComponentPropsWithRef<'label'> {
  children: React.ReactNode;
  label: string;
}

export const FormLabel = ({ children, label, ...props }: FormLabelProps) => {
  return (
    <label {...props} className={styles.label}>
      <span className={styles.text}>{label}</span>
      {children}
    </label>
  );
};
