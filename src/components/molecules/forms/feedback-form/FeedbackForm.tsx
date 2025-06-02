'use client';

import { useId, useActionState } from 'react';
import styles from './FeedbackForm.module.scss';
import { Input, Textarea } from '@/components/atoms/inputs/index';
import { FormLabel } from '@/components/atoms/labels';
import Form from 'next/form';
import { Button } from '@/components/atoms/buttons/Button';
import { sendMessageAction } from '@/lib/actions/sendMessageAction';
import { initialFormState } from './Feedback.types';
import { FormError } from '@/components/atoms/errors';

export const FeedbackForm = () => {
  const nameId = useId();
  const messageId = useId();

  const [state, formAction] = useActionState(sendMessageAction, initialFormState);

  return (
    <Form className={styles.form} action={formAction}>
      <FormLabel label="Ваше имя">
        <Input id={nameId} type="text" name="name" placeholder="Остаться анонимным" />
      </FormLabel>
      <FormLabel label="Сообщение">
        <Textarea id={messageId} name="message" />
        <FormError errorText={state?.errors.message} />
      </FormLabel>
      <Button variant="form" size="md" text="Отправить" />
    </Form>
  );
};
