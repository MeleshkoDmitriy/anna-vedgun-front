import { CompoundCard } from '@/components/atoms/cards';
import styles from './EducationPage.module.scss';
import { education } from '@/data/education';

export const EducationPage = () => {
  return (
    <div className={styles.page}>
      <h1>EducationPage</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {education.map(e => (
          <CompoundCard content={e} size="sm" key={e.id} />
        ))}
      </div>
    </div>
  );
};
