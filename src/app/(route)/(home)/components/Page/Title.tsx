'use client';

import { FreeImg } from '@/assets/illustration';
import { Chip } from '@/components/Chip';

import styles from './Page.module.scss';

export default function HomeTitle() {
  return (
    <>
      <div className={styles.content}>
        <Chip size="md" color="brand" className={styles.chip}>
          첫번째 캐릭터
        </Chip>
        <h1 className="title01">절묘한 균형 추구자 유형</h1>
      </div>
      <div className={styles.character}>
        <FreeImg width={340} height={340} />
        {/* <AchievementImg width={340} height={340} /> */}
        {/* <AdventureImg width={340} height={340} /> */}
        {/* <GeneralityImg width={340} height={340} /> */}
        {/* <PhilanthropyImg width={340} height={340} /> */}
        {/* <SafetyImg width={340} height={340} /> */}
        {/* <StabilityImg width={340} height={340} /> */}
      </div>
    </>
  );
}
