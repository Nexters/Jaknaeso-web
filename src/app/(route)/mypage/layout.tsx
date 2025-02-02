import type { PropsWithChildren } from 'react';

import { FooterLayout } from '@/components/layout/Footer';

export default function MyPageLayout({ children }: PropsWithChildren) {
  return <FooterLayout>{children}</FooterLayout>;
}
