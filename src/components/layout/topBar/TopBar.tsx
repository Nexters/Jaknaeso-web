'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

import { ROUTES } from '@/constants';

import style from './TopBar.module.scss';

const TABS = [
  { href: ROUTES.reportAnalysis, label: '리포트' },
  { href: ROUTES.reportQuestions, label: '질문 다시보기' },
];

export default function TopBar() {
  const pathname = usePathname();

  return (
    <div className={style.container}>
      {TABS.map((tab) => (
        <Link key={tab.href} href={tab.href}>
          <h1 className={classNames(style.header, { [style.active]: tab.href === pathname })}>{tab.label}</h1>
        </Link>
      ))}
    </div>
  );
}
