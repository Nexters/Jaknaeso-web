import type { PropsWithChildren } from 'react';

import { FooterLayout } from '@/components/layout/Footer';
import { TopBar } from '@/components/layout/TopBar';

export default function ReportLayout({ children }: PropsWithChildren) {
  return (
    <FooterLayout>
      <TopBar />
      {children}
    </FooterLayout>
  );
}
