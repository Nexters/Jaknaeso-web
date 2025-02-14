import { cookies } from 'next/headers';

import characterKeys from '@/query-hooks/useCharacter/keys';
import characterServerApis from '@/query-hooks/useCharacter/api.server';

import { PrefetchHydration } from '@/components/ReactQuery';
import ReportAnalysisPage from './components/Page';
import { COOKIE_NAME } from '@/constants';

export default async function ReportAnalysis() {
  const serverCookie = await cookies();
  const memberId = (serverCookie.get(COOKIE_NAME.memberId) ?? '0') as string;
  return (
    <PrefetchHydration
      queryKey={characterKeys.lists()}
      queryFn={() => characterServerApis.getCharacters({ memberId: Number(memberId) })}
    >
      <ReportAnalysisPage />
    </PrefetchHydration>
  );
}
