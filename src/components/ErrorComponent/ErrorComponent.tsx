import { Button } from '../Button';
import { LottieAnimation } from '../LottieAnimation';

import styles from './ErrorComponent.module.scss';

interface ErrorComponentProps {
  reset: VoidFunction;
  redirect: VoidFunction;
}

export default function ErrorComponent({ reset, redirect }: ErrorComponentProps) {
  return (
    <div className={styles.container}>
      <LottieAnimation type="warning" />
      <div className={styles.content}>
        <h3 className="title2">오류가 발생했어요!</h3>
        <p className="subtitle3">
          일시적인 오류가 발생했어요. <br />
          화면을 새로고침 해주세요
        </p>
      </div>
      <div className={styles.buttons}>
        <Button size="sm" className={styles.reset} onClick={reset}>
          화면 새로고침
        </Button>
        <Button size="sm" className={styles.redirect} onClick={redirect}>
          홈으로
        </Button>
      </div>
    </div>
  );
}
