import Image, { StaticImageData } from 'next/image';
import styles from './AvatarWrapper.module.scss';
import { FC } from 'react';

interface AvatarWrapperProps {
  avatar: StaticImageData;
}

export const AvatarWrapper: FC<AvatarWrapperProps> = ({ avatar }) => {
  return (
    <div className={styles.wrapper}>
      <Image src={avatar} alt="avatar" fill className={styles.avatar} priority quality={100} />
    </div>
  );
};
