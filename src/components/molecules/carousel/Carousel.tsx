'use client';

import { TEducation } from '@/data/education';
import styles from './Carousel.module.scss';
import { FC } from 'react';
import { CompoundCard } from '@/components/atoms/cards/compound-card/CompoundCard';

interface CarouselProps {
  list: TEducation[];
}

export const Carousel: FC<CarouselProps> = ({ list }) => {
  return (
    <ul className={styles.carousel}>
      {list.map(e => (
        <li key={e.id}>
          <CompoundCard content={e} size="sm">
            <CompoundCard.Header />
            <CompoundCard.Body />
            <CompoundCard.Footer />
          </CompoundCard>
        </li>
      ))}
    </ul>
  );
};
