'use client';

import { useRef, useId } from 'react';
import styles from './FeedbackForm.module.scss';
import { Input, Textarea } from '@/components/atoms/inputs/index';
import { FormLabel } from '@/components/atoms/labels';
import Form from 'next/form';

export const FeedbackForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameId = useId();
  const messageId = useId();

  return (
    <Form className={styles.form} ref={formRef} action={() => {}}>
      <FormLabel label="Имя">
        <Input id={nameId} type="text" name="name" onChange={() => {}} />
      </FormLabel>
      <FormLabel label="Сообщение">
        <Textarea id={messageId} name="message" onChange={() => {}} />
      </FormLabel>
    </Form>
  );
};
