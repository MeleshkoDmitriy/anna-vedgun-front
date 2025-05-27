import { ComponentPropsWithRef } from 'react';
import styles from './Textarea.module.scss';

interface TextareaProps extends ComponentPropsWithRef<'textarea'> {
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({ id, name, onChange }: TextareaProps) => {
  return <textarea className={styles.textarea} id={id} name={name} onChange={onChange} />;
};
