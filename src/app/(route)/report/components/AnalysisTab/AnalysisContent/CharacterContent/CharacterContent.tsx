import { Skeleton } from '@radix-ui/themes';

import { Chip } from '@/components/Chip';
import { LottieAnimation } from '@/components/LottieAnimation';

import styles from './CharacterContent.module.scss';
export default function CharacterContent() {
  const isLoading = false;

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Skeleton loading={isLoading} width="280px" height="280px" />
      ) : (
        <LottieAnimation type="adventure" width="280px" height="280px" />
      )}

      <div className={styles.content}>
        <Skeleton loading={isLoading}>
          <h2 className="title03">valueType</h2>
        </Skeleton>
        <Skeleton loading={isLoading}>
          <Chip size="sm" color="neutral">
            24.01.02 - 24.04.12
          </Chip>
        </Skeleton>
        <Skeleton loading={isLoading}>
          <h5>캐릭서 설명을 최대 두줄, 간결하게 작성해주세요. 캐릭서 설명을 최대 두줄, 간결하게 작성해주세요.</h5>
        </Skeleton>
      </div>
    </div>
  );
}
