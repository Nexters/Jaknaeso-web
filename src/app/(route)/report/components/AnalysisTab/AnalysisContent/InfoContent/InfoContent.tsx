import { Diver } from '@/components/Diver';

import styles from './InfoContent.module.scss';
import InfoContentItem from './InfoContentItem';
export default function InfoContent() {
  return (
    <>
      <InfoContentItem title="주요 특징" />
      <Diver className={styles.divider} />
      <InfoContentItem title="강점" />
      <Diver className={styles.divider} />
      <InfoContentItem title="단점" />
    </>
  );
}
