'use client';

import { useRef, useId } from 'react';
import styles from './FeedbackForm.module.scss';
import { Input, Textarea } from '@/components/atoms/inputs/index';
import { FormLabel } from '@/components/atoms/labels';
import Form from 'next/form';
import { Button } from '@/components/atoms/buttons/Button';
import { sendMessageAction } from '@/lib/actions/sendMessageAction';

export const FeedbackForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameId = useId();
  const messageId = useId();

  const handleActionForm = async (formData: FormData) => {
    try {
      const result = await sendMessageAction(formData);
      if (result.success) {
        console.log('Message sent successfully');
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      formRef.current?.reset();
    }
  };

  // react hook form

  return (
    <Form className={styles.form} ref={formRef} action={handleActionForm}>
      <FormLabel label="Имя">
        <Input id={nameId} type="text" name="name" />
      </FormLabel>
      <FormLabel label="Сообщение">
        <Textarea id={messageId} name="message" />
      </FormLabel>
      <Button variant="form" size="md" text="Отправить" />
    </Form>
  );
};
