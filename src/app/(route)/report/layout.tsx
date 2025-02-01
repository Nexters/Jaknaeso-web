import type { PropsWithChildren } from 'react';

import { TopBar } from '@/components/layout/topBar';

export default function ReportLayout({ children }: PropsWithChildren) {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
}
