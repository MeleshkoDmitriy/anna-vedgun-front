import { PageSection } from '@/components/molecules/page-section/PageSection';
import { FeedbackForm } from '@/components/molecules/forms/index';

export const Feedback = () => {
  return (
    <PageSection title="Обратная связь">
      <p>Если вы хотите оставить отзыв или предложение, пожалуйста, используйте форму ниже.</p>
      <FeedbackForm />
    </PageSection>
  );
};
