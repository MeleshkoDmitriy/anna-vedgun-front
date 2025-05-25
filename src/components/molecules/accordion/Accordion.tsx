'use client';

import { FC, useCallback, useState } from 'react';
import styles from './Accordion.module.scss';
import clsx from 'clsx';
import { ChevronIcon } from '@/components/atoms/icons';
import { iconBigInlineStyles } from '@/styles/inline-styles';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  headerIcon: React.ReactNode;
  defaultCollapsed?: boolean;
}

export const Accordion: FC<AccordionProps> = ({
  children,
  title,
  headerIcon,
  defaultCollapsed = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultCollapsed);

  const toggleAccordion = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  const accordionStyles = clsx(styles.accordion, {
    [styles.collapsed]: isCollapsed,
  });
  const inline = iconBigInlineStyles;

  return (
    <div className={accordionStyles}>
      <div className={styles.header} onClick={toggleAccordion}>
        <div className={styles.left}>
          <div className={styles.icon}>{headerIcon}</div>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.right}>
          <ChevronIcon className={styles.icon} style={inline} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
