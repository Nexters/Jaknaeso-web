import surveyKeys from '@/query-hooks/useSurvey/keys';
import surveyServerApis from '@/query-hooks/useSurvey/api.server';

import { PrefetchHydration } from '@/components/ReactQuery';

import ReportQuestionsPage from './components/Page';

type Props = {
  searchParams: Promise<{ memberId: string; bundleId: string }>;
};

export default async function ReportQuestions({ searchParams }: Props) {
  const { memberId = '0', bundleId = '0' } = await searchParams;
  return (
    <PrefetchHydration
      queryKey={surveyKeys.list([bundleId])}
      queryFn={() => surveyServerApis.getSubmissions(Number(memberId), { bundleId: Number(bundleId) })}
    >
      <ReportQuestionsPage />
    </PrefetchHydration>
  );
}
