'use client';

import { NavList } from '@/components/molecules/lists';
import styles from './Navbar.module.scss';
import { navigation } from '@/navigation/paths';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.navbar}>
      <NavList list={Object.values(navigation)} pathname={pathname} />
    </nav>
  );
};
