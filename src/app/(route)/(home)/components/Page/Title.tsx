'use client';

import { Chip } from '@/components/Chip';

import styles from './Page.module.scss';

export default function HomeTitle() {
  return (
    <>
      <div className={styles.content}>
        <Chip size="md" color="brand">
          첫번째 캐릭터
        </Chip>
        <h1 className="title01">절묘한 균형 추구자 유형</h1>
      </div>
    </>
  );
}
