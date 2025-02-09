import PrefetchHydration from '@/providers/PrefetchHydration';
import surveyServerApis from '@/query-hooks/useSurvey/api.server';
import surveyKeys from '@/query-hooks/useSurvey/keys';

import GameClientPage from './components/GameClientPage';

interface GamePageProps {
  params: {
    bundleId: string;
  };
}

export default async function Game({ params }: GamePageProps) {
  const { bundleId } = await params;
  return (
    <PrefetchHydration queryKey={surveyKeys.list([Number(bundleId)])} queryFn={surveyServerApis.getTodaySurvey}>
      <GameClientPage />
    </PrefetchHydration>
  );
}
