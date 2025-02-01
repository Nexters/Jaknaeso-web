import type { PropsWithChildren } from 'react';

import { FooterLayout } from '@/components/layout/footer';

export default function MyPageLayout({ children }: PropsWithChildren) {
  return <FooterLayout>{children}</FooterLayout>;
}
