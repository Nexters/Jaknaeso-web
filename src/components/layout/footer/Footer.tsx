'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FileDocumentIcon, HomeIcon, ProfileIcon } from '@/assets/icons';
import { ROUTES } from '@/constants';

import styles from './Footer.module.scss';

const TABS = [
  { href: ROUTES.home, icon: HomeIcon, focus: ROUTES.home },
  { href: ROUTES.reportAnalysis, icon: FileDocumentIcon, focus: ROUTES.report },
  { href: ROUTES.mypage, icon: ProfileIcon, focus: ROUTES.mypage },
];

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      {TABS.map((tab) => {
        const isActive = tab.focus === ROUTES.home ? pathname === tab.focus : pathname.startsWith(tab.focus);
        return (
          <Link key={tab.href} href={tab.href}>
            <tab.icon width={28} height={28} color={isActive ? 'black' : '#a9aeba'} />
          </Link>
        );
      })}
    </div>
  );
}
