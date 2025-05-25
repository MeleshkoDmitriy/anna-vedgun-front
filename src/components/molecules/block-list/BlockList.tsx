import { TPsychologyApproach } from '@/data/psychology';
import styles from './BlockList.module.scss';
import { BlockLabel } from '@/components/atoms/labels';

interface BlockListProps {
  items: TPsychologyApproach[];
}

export const BlockList = ({ items }: BlockListProps) => {
  return (
    <div className={styles.list}>
      {items.map(item => (
        <BlockLabel key={item.title} title={item.title} />
      ))}
    </div>
  );
};
