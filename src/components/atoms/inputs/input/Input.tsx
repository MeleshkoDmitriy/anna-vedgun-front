import { ComponentPropsWithRef } from 'react';
import styles from './Input.module.scss';

interface InputProps extends ComponentPropsWithRef<'input'> {
  id: string;
  type: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input = ({ type, onChange, id, name, placeholder }: InputProps) => {
  return (
    <input
      className={styles.input}
      type={type}
      onChange={onChange}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
};
