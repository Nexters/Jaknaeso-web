import { Test } from './components/Test';

import testApis from '@/query-hooks/useTest/api';
import PrefetchHydration from '@/providers/PrefetchHydration';

export default async function Home() {
  return (
    <PrefetchHydration queryKey={['test']} queryFn={testApis.getTest}>
      <Test />
    </PrefetchHydration>
  );
}
