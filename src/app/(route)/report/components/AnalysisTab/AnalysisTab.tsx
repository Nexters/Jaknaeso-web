import { Diver } from '@/components/Diver';

import { CharacterContent } from './AnalysisContent/CharacterContent';
import { ChartContent } from './AnalysisContent/ChartContent';
import { RetrospectiveContent } from './AnalysisContent/RetrospectiveContent';
import styles from './AnalysisTab.module.scss';

export default function ReportAnalysisTab({ characterId }: { characterId: string }) {
  return (
    <div className={styles.container}>
      <CharacterContent />
      <Diver className={styles.divider} />
      <ChartContent characterId={characterId} />
      <Diver className={styles.divider} />
      <RetrospectiveContent />
    </div>
  );
}
