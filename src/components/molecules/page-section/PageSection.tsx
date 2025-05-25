import { TextLabel } from '@/components/atoms/labels';
import styles from './PageSection.module.scss';

interface PageSectionProps {
  title: string;
  children: React.ReactNode;
}

export const PageSection = ({ title, children }: PageSectionProps) => {
  return (
    <section className={styles.section}>
      <TextLabel text={title} isActive={false} />
      <div className={styles.content}>{children}</div>
    </section>
  );
};
