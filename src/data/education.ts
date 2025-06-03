import { StaticImageData } from 'next/image';

import diploma_1 from '@/assets/images/diplomas/diploma1.jpg';
import diploma_2 from '@/assets/images/diplomas/diploma2.jpg';
import diploma_3 from '@/assets/images/diplomas/diploma3.jpg';
import diploma_4 from '@/assets/images/diplomas/diploma4.jpg';
import diploma_5 from '@/assets/images/diplomas/diploma5.jpg';
import diploma_6 from '@/assets/images/diplomas/diploma6.jpg';
import diploma_7 from '@/assets/images/diplomas/diploma7.jpg';
import diploma_8 from '@/assets/images/diplomas/diploma8.jpg';
import diploma_9 from '@/assets/images/diplomas/diploma9.jpg';
import diploma_10 from '@/assets/images/diplomas/diploma10.jpg';
import diploma_11 from '@/assets/images/diplomas/diploma11.jpg';
import diploma_12 from '@/assets/images/diplomas/diploma12.jpg';
import diploma_13 from '@/assets/images/diplomas/diploma13.jpg';
import diploma_14 from '@/assets/images/diplomas/diploma14.jpg';
import diploma_15 from '@/assets/images/diplomas/diploma15.png';
import diploma_16 from '@/assets/images/diplomas/diploma16.jpg';

export type TEducation = {
  id: number;
  img: StaticImageData;
  title: string;
  description: string;
  date: string;
};

export const education: TEducation[] = [
  {
    id: 1,
    img: diploma_1,
    title: 'Диплом о высшем образовании',
    description: 'Гомельский Государственный Университет имени Франциска Скорины',
    date: 'Июнь 2020',
  },
  {
    id: 2,
    img: diploma_2,
    title: 'Диплом магистра',
    description: 'Гомельский Государственный Университет имени Франциска Скорины',
    date: 'Январь 2022',
  },
  {
    id: 3,
    img: diploma_3,
    title: 'Теория и практика психологического консультирования и психотерапии',
    description: 'Описание',
    date: 'Май 2021',
  },
  {
    id: 4,
    img: diploma_4,
    title: 'Психологическая помощь в кризисной ситуации',
    description: 'Описание',
    date: 'Январь 2022',
  },
  {
    id: 5,
    img: diploma_5,
    title: 'Основы когнитивно-поведенческой терапии',
    description: 'Описание',
    date: 'Январь 2022',
  },
  {
    id: 6,
    img: diploma_6,
    title: 'Удостоверение',
    description: 'Описание',
    date: 'Декабрь 2023',
  },
  {
    id: 7,
    img: diploma_7,
    title: 'Когнитивно-поведенческая терапия',
    description: 'Описание',
    date: 'Февраль 2024',
  },
  {
    id: 8,
    img: diploma_8,
    title: 'Cognitive-behavior therapy',
    description: 'Описание',
    date: 'Февраль 2024',
  },
  {
    id: 9,
    img: diploma_9,
    title: 'Техники по работе с самооценкой клиента',
    description: 'Описание',
    date: 'Ноябрь 2023',
  },
  {
    id: 10,
    img: diploma_10,
    title: 'Техники кризисного консультирования',
    description: 'Описание',
    date: 'Декабрь 2023',
  },
  {
    id: 11,
    img: diploma_11,
    title: 'Методы экспозиции в КПТ',
    description: 'Описание',
    date: 'Март 2024',
  },
  {
    id: 12,
    img: diploma_12,
    title: 'Основы психодиагностики',
    description: 'Описание',
    date: 'Декабрь 2023',
  },
  {
    id: 13,
    img: diploma_13,
    title: 'Сертификат',
    description: 'Описание',
    date: 'Май 2024',
  },
  {
    id: 14,
    img: diploma_14,
    title: 'Методики работы с прокрастинацией и выученной беспомощностью клиента',
    description: 'Описание',
    date: 'Апрель 2024',
  },
  {
    id: 15,
    img: diploma_15,
    title: 'Удостоверение о повышении квалификации',
    description: 'Описание',
    date: 'Февраль 2025',
  },
  {
    id: 16,
    img: diploma_16,
    title: 'Сертификат',
    description: 'Терапевтическое мышление в КПТ: концептуализация шаг за шагом',
    date: 'Май 2025',
  },
];
