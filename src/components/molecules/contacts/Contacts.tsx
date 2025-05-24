import styles from './Contacts.module.scss';
import { IconLink } from '@/components/atoms/icon-link/IconLink';
import { B17Icon, InstagramIcon, TelegramIcon } from '@/components/atoms/icons';
import { contacts } from '@/constants/contacts';
import { iconInlineStyles } from '@/styles/inline-styles';

export const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <IconLink
        icon={<TelegramIcon style={iconInlineStyles} />}
        link={contacts.Telegram}
        text="Telegram"
      />
      <IconLink
        icon={<InstagramIcon style={iconInlineStyles} />}
        link={contacts.Instagram}
        text="Instagram"
      />
      <IconLink icon={<B17Icon style={iconInlineStyles} />} link={contacts.B17} text="B17" />
    </section>
  );
};
