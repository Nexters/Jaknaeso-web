import { NoneImg } from '@/assets/illustration';

import styles from './EmptyTab.module.scss';

interface EmptyCardProps {
  title: string;
  subTitle: string;
}
export default function EmptyCard({ title, subTitle }: EmptyCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <NoneImg width={200} height={200} />
        <h2>{title}</h2>
        <h5>{subTitle}</h5>
      </div>
    </div>
  );
}
