import { Skeleton } from '@radix-ui/themes';

import { Chip } from '@/components/Chip';
import { LottieAnimation } from '@/components/LottieAnimation';
import { CHARACTERS } from '@/constants';
import { useGetCharacterReportInfo } from '@/query-hooks/useCharacter';

import styles from './CharacterContent.module.scss';

interface CharacterContentProp {
  characterId: string;
}
export default function CharacterContent({ characterId }: CharacterContentProp) {
  const { data, isLoading } = useGetCharacterReportInfo(characterId);

  const character = data?.characterType ? CHARACTERS[data?.characterType] : null;
  return (
    <div className={styles.container}>
      {isLoading ? (
        <Skeleton loading={isLoading} width="280px" height="280px" />
      ) : (
        <LottieAnimation type={character?.type ?? 'none'} width="280px" height="280px" />
      )}

      <div className={styles.content}>
        <Skeleton loading={isLoading} width="290px">
          <h2 className="title03">{data?.name ?? ''}</h2>
        </Skeleton>

        {isLoading ? (
          <Skeleton loading={isLoading} width="150px" height="26px" />
        ) : (
          <Chip size="sm" color="neutral">
            {`${data?.startDate ?? ''} - ${data?.endDate ?? ''}`}
          </Chip>
        )}
        <Skeleton loading={isLoading}>
          <h5>{data?.description}</h5>
        </Skeleton>
      </div>
    </div>
  );
}
