import { Chip } from '@/components/Chip';
import { LottieAnimation } from '@/components/LottieAnimation';

import styles from './CharacterContent.module.scss';
export default function CharacterContent() {
  return (
    <div className={styles.container}>
      <LottieAnimation type="adventure" width="280px" height="280px" />
      <div className={styles.content}>
        <h2 className="title03">valueType</h2>
        <Chip size="sm" color="neutral">
          24.01.02 - 24.04.12
        </Chip>
        <h5>캐릭서 설명을 최대 두줄, 간결하게 작성해주세요. 캐릭서 설명을 최대 두줄, 간결하게 작성해주세요.</h5>
      </div>
    </div>
  );
}
