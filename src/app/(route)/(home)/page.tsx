'use client';

import { LineIcon } from '@/assets/icons';
import { Button } from '@/components/Button';
import { Capsule } from '@/components/Capsule';
import { Chip } from '@/components/Chip';
import { LockBtn } from '@/components/LockBtn';

import { Drawer } from './components/Drawer';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Chip size="md" color="neutral">
          <h5>1번째 캐릭터</h5>
        </Chip>
        <h1 className="title01">valueType</h1>
      </div>
      <div className={styles.wrapper}>
        <Capsule className={styles.capsule}>
          <label>캐릭터 완성까지</label>
          <LineIcon color="#A9AEBA" />
          <label>15개</label>
        </Capsule>
      </div>
      <Drawer>
        <Drawer.Cotent>
          <div className={styles.grid}>
            <LockBtn label="1회차" className={styles.lock} />
            <LockBtn label="1회차" className={styles.lock} disabled />
            <LockBtn label="1회차" className={styles.lock} variant="completed" />
            <LockBtn label="1회차" className={styles.lock} variant="completedToday" />
            <LockBtn label="1회차" className={styles.lock} />

            <LockBtn label="1회차" className={styles.lock} />
            <LockBtn label="1회차" className={styles.lock} disabled />
            <LockBtn label="1회차" className={styles.lock} variant="completed" />
            <LockBtn label="1회차" className={styles.lock} variant="completedToday" />
            <LockBtn label="1회차" className={styles.lock} />

            <LockBtn label="1회차" className={styles.lock} />
            <LockBtn label="1회차" className={styles.lock} disabled />
            <LockBtn label="1회차" className={styles.lock} variant="completed" />
            <LockBtn label="1회차" className={styles.lock} variant="completedToday" />
            <LockBtn label="1회차" className={styles.lock} />
          </div>
        </Drawer.Cotent>
        <Drawer.Footer>
          <Button style={{ height: '58px' }}>오늘의 질문 답변하기</Button>
        </Drawer.Footer>
      </Drawer>
    </div>
  );
}
