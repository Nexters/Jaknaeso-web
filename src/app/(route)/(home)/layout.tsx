import type { PropsWithChildren } from 'react';

import { FooterLayout } from '@/components/layout/footer';

export default function HomeLayout({ children }: PropsWithChildren) {
  return <FooterLayout>{children}</FooterLayout>;
}
