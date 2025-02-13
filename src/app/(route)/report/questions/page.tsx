import { cookies } from 'next/headers';

import surveyKeys from '@/query-hooks/useSurvey/keys';
import surveyServerApis from '@/query-hooks/useSurvey/api.server';

import { PrefetchHydration } from '@/components/ReactQuery';

import ReportQuestionsPage from './components/Page';

export default async function ReportQuestions() {
  const serverCookie = await cookies();
  const memberId = (serverCookie.get('memberId') ?? '0') as string;
  const bundleId = (serverCookie.get('bundleId') ?? '0') as string;
  return (
    <PrefetchHydration
      queryKey={surveyKeys.list([bundleId])}
      queryFn={() => surveyServerApis.getSubmissions(Number(memberId), { bundleId: Number(bundleId) })}
    >
      <ReportQuestionsPage />
    </PrefetchHydration>
  );
}
