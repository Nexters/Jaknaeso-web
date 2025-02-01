import type { PropsWithChildren } from 'react';

import { FooterLayout } from '@/components/layout/footer';
import { TopBar } from '@/components/layout/topBar';

export default function ReportLayout({ children }: PropsWithChildren) {
  return (
    <FooterLayout>
      <TopBar />
      {children}
    </FooterLayout>
  );
}
