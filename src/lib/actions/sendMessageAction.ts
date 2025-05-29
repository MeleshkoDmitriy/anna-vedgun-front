'use server';

import { api_paths } from '@/navigation/api';
import { getDate } from '../utils/getDate';

export const sendMessageAction = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;
  const date = getDate();

  const BOT_URL = process.env.NEXT_TELEGRAM_BOT_URL;
  const API_URL = process.env.NEXT_MOKKY_API_URL;

  if (!BOT_URL || !API_URL) {
    throw new Error('API URLs are not configured');
  }

  let telegramSuccess = false;
  let apiSuccess = false;
  const errors: string[] = [];

  try {
    const botResponse = await fetch(BOT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        message,
        date,
      }),
    });

    if (!botResponse.ok) {
      throw new Error('Failed to send message to Telegram');
    }
    telegramSuccess = true;
  } catch (error) {
    console.error('Telegram error:', error);
    errors.push('Failed to send to Telegram');
  }

  try {
    const apiResponse = await fetch(`${API_URL}${api_paths.messages}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        message,
        date,
      }),
    });

    if (!apiResponse.ok) {
      throw new Error('Failed to send message to Mokky');
    }
    apiSuccess = true;
  } catch (error) {
    console.error('API error:', error);
    errors.push('Failed to send to API');
  }

  if (telegramSuccess || apiSuccess) {
    return {
      success: true,
      partial: !(telegramSuccess && apiSuccess),
      errors: errors,
    };
  }

  return {
    success: false,
    errors: errors,
  };
};
