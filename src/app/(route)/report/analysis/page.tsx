import characterKeys from '@/query-hooks/useCharacter/keys';
import characterServerApis from '@/query-hooks/useCharacter/api.server';

import { PrefetchHydration } from '@/components/ReactQuery';
import ReportAnalysisPage from './components/Page';
import { getMemberIdToken } from '@/libs/cookie/manageCookie.server';

export default async function ReportAnalysis() {
  const memberId = getMemberIdToken();
  return (
    <PrefetchHydration
      queryKey={characterKeys.lists()}
      queryFn={() => characterServerApis.getCharacters({ memberId: Number(memberId) })}
    >
      <ReportAnalysisPage />
    </PrefetchHydration>
  );
}
