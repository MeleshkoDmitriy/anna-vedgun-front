import { About } from '@/components/organisms/about/About';
import styles from './HomePage.module.scss';
import { Approaches } from '@/components/organisms/approaches/Approaches';
import { Services } from '@/components/organisms/services/Services';
import { Feedback } from '@/components/organisms/feedback/Feedback';

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <About />
      <Approaches />
      <Services />
      <Feedback />
    </div>
  );
};
