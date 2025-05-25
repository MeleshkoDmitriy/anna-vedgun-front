import styles from './BlockLabel.module.scss';

interface BlockLabelProps {
  title: string;
}

export const BlockLabel = ({ title }: BlockLabelProps) => {
  return (
    <div className={styles.block}>
      <span className={styles.label}>{title}</span>
    </div>
  );
};
