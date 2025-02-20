'use client';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button';
import { LottieAnimation } from '@/components/LottieAnimation';
import { ROUTES } from '@/constants';

import styles from './page.module.scss';

export default function GameComplete() {
  const router = useRouter();

  const onClick = () => {
    router.replace(ROUTES.home);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className="title2">
          오늘의 질문
          <br />
          답변을 완료했어요!
        </h3>
        <p className={styles.subTitle}>내일도 답변을 완료해 내 캐릭터를 완성해 보세요</p>
      </div>
      <div className={styles.content}>
        <LottieAnimation type="celebrate" width="300px" height="300px" />
      </div>
      <div className={styles.footer}>
        <Button color="primary" onClick={onClick}>
          완료
        </Button>
      </div>
    </div>
  );
}
