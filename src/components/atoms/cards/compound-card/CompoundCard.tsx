'use client';

import Image from 'next/image';
import styles from './CompoundCard.module.scss';
import { TEducation } from '@/data/education';
import { createContext, PropsWithChildren, useContext } from 'react';
import clsx from 'clsx';

type TSize = 'sm' | 'md';

interface CompoundCardProps extends PropsWithChildren {
  content: TEducation;
  size: TSize;
}

type TCompoundCardContext = {
  content: TEducation;
};

const CompoundCardContext = createContext<TCompoundCardContext | undefined>(undefined);

const useCompoundCardContext = () => {
  const context = useContext(CompoundCardContext);
  if (!context) {
    throw new Error('useCompoundCardContext must be used within a CompoundCard');
  }
  return context;
};

export const Header = function CompoundCardHeader() {
  const { content } = useCompoundCardContext();
  const { title, img } = content;

  return (
    <div className={styles.header}>
      <Image className={styles.image} src={img} alt={title} fill quality={90} />
    </div>
  );
};

export const Body = function CompoundCardBody() {
  const { content } = useCompoundCardContext();
  const { title, description } = content;

  return (
    <div className={styles.body}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export const Footer = function CompoundCardFooter() {
  const { content } = useCompoundCardContext();
  const { date } = content;

  return (
    <div className={styles.footer}>
      <p className={styles.date}>{date}</p>
    </div>
  );
};

function CompoundCard({ size, content, children }: CompoundCardProps) {
  const cardStyles = clsx(styles.card, {
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
  });

  return (
    <CompoundCardContext.Provider value={{ content }}>
      <div className={cardStyles}>{children}</div>
    </CompoundCardContext.Provider>
  );
}

CompoundCard.Header = Header;
CompoundCard.Body = Body;
CompoundCard.Footer = Footer;

export { CompoundCard };
