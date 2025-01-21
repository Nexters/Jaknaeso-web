import { Test } from '@/components/Test/Test';

import { QueryClient, dehydrate, HydrationBoundary as Hydrate } from '@tanstack/react-query';
import testApis from './query-hooks/useTest/api';
import { cache } from 'react';

export const getQueryClient = cache(() => new QueryClient());

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey: ['test'], queryFn: testApis.getTest });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Test />
    </Hydrate>
  );
}
