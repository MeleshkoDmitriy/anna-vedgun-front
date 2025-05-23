import styles from './Aside.module.scss';
import { Profile } from '@/components/molecules/profile/Profile';
import { Contacts } from '@/components/molecules/contacts/Contacts';

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.content}>
        <Profile />
        <Contacts />
      </div>
    </aside>
  );
};
