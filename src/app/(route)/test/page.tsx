import PrefetchHydration from '@/providers/PrefetchHydration';
import testApis from '@/query-hooks/useTest/api';

import { Test } from './components/Test';

export default function TestPage() {
  return (
    <div>
      테스트용 페이지
      <PrefetchHydration queryKey={['test']} queryFn={testApis.getTest}>
        <Test />
        <h3 className="title2">타이포 적용</h3>
      </PrefetchHydration>
    </div>
  );
}
