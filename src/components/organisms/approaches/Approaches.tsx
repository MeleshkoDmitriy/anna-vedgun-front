import { BlockList } from '@/components/molecules/block-list/BlockList';
import { PageSection } from '@/components/molecules/page-section/PageSection';
import { psychologyApproaches } from '@/data/psychology';

export const Approaches = () => {
  return (
    <PageSection title="Направления">
      <BlockList items={psychologyApproaches} />
    </PageSection>
  );
};
