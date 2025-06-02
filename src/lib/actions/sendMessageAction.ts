'use server';

import { api_paths } from '@/navigation/api';
import { getDate } from '../utils/getDate';
import {
  FormState,
  TFeedbackFormErrors,
} from './../../components/molecules/forms/feedback-form/Feedback.types';

export const sendMessageAction = async (state: FormState | undefined, formData: FormData) => {
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;
  const date = getDate();

  const BOT_URL = process.env.NEXT_TELEGRAM_BOT_URL;
  const API_URL = process.env.NEXT_MOKKY_API_URL;

  const errors: TFeedbackFormErrors = {};

  if (!message.trim()) {
    errors.message = 'Поле с сообщением является обязательным!';
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  if (!BOT_URL || !API_URL) {
    throw new Error('API URLs are not configured');
  }

  try {
    const botResponse = await fetch(BOT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name || 'Аноним',
        message,
        date,
      }),
    });

    if (!botResponse.ok) {
      throw new Error('Failed to send message to Telegram');
    }
  } catch (error) {
    console.error('Telegram error:', error);
  }

  try {
    const apiResponse = await fetch(`${API_URL}${api_paths.messages}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name || 'Аноним',
        message,
        date,
      }),
    });

    if (!apiResponse.ok) {
      throw new Error('Failed to send message to Mokky');
    }
  } catch (error) {
    console.error('API error:', error);
  }
};
