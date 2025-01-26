import {
  QueryKey,
  QueryFunction,
  QueryClient,
  dehydrate,
  HydrationBoundary as HydrateOnClient,
} from '@tanstack/react-query';
import { cache, PropsWithChildren } from 'react';

type Props = {
  queryKey: QueryKey;
  queryFn: QueryFunction;
};

const PrefetchHydration = async ({ queryKey, queryFn, children }: PropsWithChildren<Props>) => {
  const getQueryClient = cache(() => new QueryClient());
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });
  const dehydratedState = dehydrate(queryClient);

  return <HydrateOnClient state={dehydratedState}>{children}</HydrateOnClient>;
};

export default PrefetchHydration;
