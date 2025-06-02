import { MinusIcon, PlusIcon } from '@/components/atoms/icons';
import { Accordion } from '@/components/molecules/accordion/Accordion';
import { ServiceList } from '@/components/molecules/lists';
import { PageSection } from '@/components/molecules/page-section/PageSection';
import { psychologyServices } from '@/data/psychology';
import { iconBigInlineStyles } from '@/styles/inline-styles';

export const Services = () => {
  const inline = iconBigInlineStyles;

  return (
    <PageSection title="Работа">
      <Accordion headerIcon={<PlusIcon style={inline} />} title="С какими запросами я работаю?">
        <ServiceList services={psychologyServices.on} color="green" />
      </Accordion>
      <Accordion headerIcon={<MinusIcon style={inline} />} title="С чем я не работаю">
        <ServiceList services={psychologyServices.off} color="red" />
      </Accordion>
    </PageSection>
  );
};
