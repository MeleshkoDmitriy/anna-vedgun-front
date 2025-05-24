import { FC } from 'react';
import styles from './IconLink.module.scss';
import Link from 'next/link';

interface IconLinkProps {
  icon: React.ReactNode;
  text: string;
  link?: string;
}

export const IconLink: FC<IconLinkProps> = ({ icon, text, link }) => {
  const content = (
    <>
      {icon}
      <span className={styles.text}>{text}</span>
    </>
  );

  return (
    <>
      {link ? (
        <Link href={link} target="_blank" className={styles.wrapper}>
          {content}
        </Link>
      ) : (
        <div className={styles.wrapper}>{content}</div>
      )}
    </>
  );
};
