import styles from './EducationPage.module.scss';
import { education } from '@/data/education';
import { Carousel } from '@/components/molecules/carousel/Carousel';

export const EducationPage = () => {
  return (
    <div className={styles.page}>
      <h1>EducationPage</h1>
      <Carousel list={education} />
    </div>
  );
};
