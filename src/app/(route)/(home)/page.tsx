import PrefetchHydration from '@/providers/PrefetchHydration';
import testApis from '@/query-hooks/useTest/api';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Chip } from '@/components/Chip';

import { Test } from './components/Test';

export default async function Home() {
  return (
    <PrefetchHydration queryKey={['test']} queryFn={testApis.getTest}>
      <Test />
      <Button label="button" size="large" />
      <Card
        title="Q. 커리어를 향상시킬 수 있는 일자리이지만 가까운 사람들과 멀어져야한다면, 이 일자리를 선택하실 건가요?"
        chipContents="1월 8일 1회차"
        useCollapse
      >
        <div className="body2">
          가까운 사람들과 물리적으로 멀어지더라도 그 관계가 사라지진 않음. 내 노력에 따라 관계는 달라질 수 있지만 커리어
          기회는 원할 때 오는게 아님
        </div>
      </Card>
      <Chip size="md" color="brand">
        Text
      </Chip>
      {/* <h3 className="title2">타이포 적용</h3> */}
    </PrefetchHydration>
  );
}
