'use client';

import { useGetTest } from '@/app/query-hooks/useTest/index';

export function Test() {
  const data = useGetTest();
  console.log(data);

  return <div>test</div>;
}
