'use client';

import { ContentTemplate } from '@/components/templates/content-template/ContentTemplate';

export default function Template({ children }: { children: React.ReactNode }) {
  return <ContentTemplate>{children}</ContentTemplate>;
}
