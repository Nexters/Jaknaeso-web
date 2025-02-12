import characterKeys from '@/query-hooks/useCharacter/keys';
import characterServerApis from '@/query-hooks/useCharacter/api.server';

import { PrefetchHydration } from '@/components/ReactQuery';
import ReportAnalysisPage from './components/Page';

export default function ReportAnalysis({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const memberId = Number(searchParams.memberId ?? 0);
  return (
    <PrefetchHydration queryKey={characterKeys.lists()} queryFn={() => characterServerApis.getCharacters({ memberId })}>
      <ReportAnalysisPage />
    </PrefetchHydration>
  );
}
