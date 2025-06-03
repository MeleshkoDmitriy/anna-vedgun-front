import Image from 'next/image';
import styles from './CompoundCard.module.scss';
import { TEducation } from '@/data/education';
import { FC } from 'react';
import clsx from 'clsx';

type TSize = 'sm' | 'md';

interface CompoundCardProps {
  content: TEducation;
  size: TSize;
}

export const CompoundCard: FC<CompoundCardProps> = ({ content, size }) => {
  const { title, img, date, description } = content;

  const cardStyles = clsx(styles.card, {
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
  });

  return (
    <div className={cardStyles}>
      <div className={styles.header}>
        <Image className={styles.image} src={img} alt={title} fill quality={90} />
      </div>

      <div className={styles.body}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.footer}>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};
