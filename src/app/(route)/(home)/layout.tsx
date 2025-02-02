import type { PropsWithChildren } from 'react';

import { FooterLayout } from '@/components/layout/Footer';

export default function HomeLayout({ children }: PropsWithChildren) {
  return <FooterLayout>{children}</FooterLayout>;
}
