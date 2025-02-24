import { Divider } from '@/components/Divider';

import { CharacterContent } from './AnalysisContent/CharacterContent';
import { ChartContent } from './AnalysisContent/ChartContent';
import { InfoContent } from './AnalysisContent/InfoContent';
import styles from './AnalysisTab.module.scss';

interface ReportAnalysisTabProps {
  characterId: string;
  bundleId: string;
}
export default function ReportAnalysisTab({ characterId, bundleId }: ReportAnalysisTabProps) {
  return (
    <div className={styles.container}>
      <CharacterContent characterId={characterId} />
      <Divider className={styles.divider} />
      <InfoContent characterId={characterId} />
      <Divider className={styles.divider} />
      <ChartContent characterId={characterId} />
      {/* <Diver className={styles.divider} /> */}
      {/* <RetrospectiveContent bundleId={bundleId} /> */}
    </div>
  );
}
