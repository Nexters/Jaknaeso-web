'use client';

import { Chip } from '@/components/Chip';
import { LottieAnimation } from '@/components/LottieAnimation';
import { CHARACTERS } from '@/constants';
import { useGetLatestCharacter } from '@/query-hooks/useCharacter';

import styles from './Page.module.scss';

export default function HomeTitle() {
  const {
    data = {
      characterNo: '',
      characterType: '',
    },
  } = useGetLatestCharacter();

  const character = data?.characterType ? CHARACTERS[data?.characterType] : null;

  return (
    <>
      {character && (
        <>
          <div className={styles.content}>
            <Chip size="md" color="brand" className={styles.chip}>
              {`${data.characterNo} 캐릭터`}
            </Chip>
            <h1>{character?.content}</h1>
          </div>
          <div className={styles.character}>
            <LottieAnimation type={character?.type} width="240px" height="240px" />
          </div>
        </>
      )}
    </>
  );
}
