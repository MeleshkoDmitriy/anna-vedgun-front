import { TNavigation } from '@/navigation/paths';
import styles from './NavList.module.scss';
import Link from 'next/link';
import { FC } from 'react';
import { TextLabel } from '@/components/atoms/labels';

interface NavListProps {
  list: TNavigation[];
  pathname: string;
}

export const NavList: FC<NavListProps> = ({ pathname, list }) => {
  return (
    <ul className={styles.list}>
      {list.map(item => (
        <li key={item.path} className={styles.item}>
          <Link href={item.path} className={styles.link}>
            <TextLabel text={item.title} isActive={pathname === item.path} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
