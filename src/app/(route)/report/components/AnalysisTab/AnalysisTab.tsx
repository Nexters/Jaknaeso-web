import { Diver } from '@/components/Diver';

import { CharacterContent } from './AnalysisContent/CharacterContent';
import { ChartContent } from './AnalysisContent/ChartContent';
import { InfoContent } from './AnalysisContent/InfoContent';
import { RetrospectiveContent } from './AnalysisContent/RetrospectiveContent';
import styles from './AnalysisTab.module.scss';

interface ReportAnalysisTabProps {
  characterId: string;
  bundleId: string;
}
export default function ReportAnalysisTab({ characterId, bundleId }: ReportAnalysisTabProps) {
  return (
    <div className={styles.container}>
      <CharacterContent />
      <Diver className={styles.divider} />
      <InfoContent />
      <Diver className={styles.divider} />
      <ChartContent characterId={characterId} />
      <Diver className={styles.divider} />
      <RetrospectiveContent bundleId={bundleId} />
    </div>
  );
}
