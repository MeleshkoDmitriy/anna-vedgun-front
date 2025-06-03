import { AvatarWrapper } from '@/components/atoms/avatar-wrapper/AvatarWrapper';
import styles from './Profile.module.scss';
import avatar from '@/assets/images/user/avatar.jpg';
import { IconLink } from '@/components/atoms/icon-link/IconLink';
import { iconInlineStyles } from '@/styles/inline-styles';
import { LocationIcon } from '@/components/atoms/icons';

export const Profile = () => {
  return (
    <section className={styles.profile}>
      <AvatarWrapper avatar={avatar} />
      <h1 className={styles.title}>Анна Ведьгун</h1>
      <p className={styles.subtitle}>Психолог</p>
      <p className={styles.paragraph}>Онлайн и оффлайн консультации</p>
      <IconLink icon={<LocationIcon style={iconInlineStyles} />} text="Гомель, Беларусь" />
    </section>
  );
};
