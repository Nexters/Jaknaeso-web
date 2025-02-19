import { getBundleIdToken, getCharacterId } from '@/libs/cookie/manageCookie.server';

import { ReportClientPage } from './components/ReportClientPage';

export default async function ReportPage() {
  const bundleId = await getBundleIdToken();
  const characterId = await getCharacterId();

  return (
    // <PrefetchMultipleHydration
    //   queries={[
    //     { queryFn: characterServerApis.getCharacters, queryKey: characterKeys.lists() },
    //     {
    //       queryFn: () => surveyServerApis.getSubmissions({ bundleId: Number(bundleId) }),
    //       queryKey: surveyKeys.list(['retrospective', bundleId]),
    //     },
    //     {
    //       queryFn: () => characterServerApis.getCharacterAnalysis(String(characterId)),
    //       queryKey: characterKeys.detail(['analysis', characterId]),
    //     },
    //     {
    //       queryFn: () => characterServerApis.getCharacterReportInfo(String(characterId)),
    //       queryKey: characterKeys.detail(['info', characterId]),
    //     },
    //   ]}
    // >
    <ReportClientPage bundleId={Number(bundleId)!} characterId={Number(characterId)!} />
    // </PrefetchMultipleHydration>
  );
}
