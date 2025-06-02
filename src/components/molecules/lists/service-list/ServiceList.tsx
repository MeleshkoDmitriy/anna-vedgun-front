import { TPsychologyService } from '@/data/psychology';
import { ColorLabel, TColorLabel } from '@/components/atoms/labels/color-label/ColorLabel';
import styles from './ServiceList.module.scss';

interface ServiceListProps {
  services: TPsychologyService[];
  color: TColorLabel;
}

export const ServiceList = ({ services, color }: ServiceListProps) => {
  return (
    <ul className={styles.list}>
      {services.map(service => (
        <ColorLabel key={service.title} color={color} text={service.title} />
      ))}
    </ul>
  );
};
