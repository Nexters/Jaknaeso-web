import { ArrowDown2Icon } from '@/assets/icons';
import { TextButton } from '@/components/TextButton';

import styles from './CharacterSelectButton.module.scss';
import { formatToKoreanOrder } from '@/utils';
import type { CharacterItem } from '@/query-hooks/useCharacter/types';

type Props = {
  selectedCharacter: CharacterItem;
  onClick: () => void;
};

const CharacterSelectButton = ({ onClick, selectedCharacter }: Props) => {
  return (
    <TextButton className={styles.characterButton} onClick={onClick}>
      {selectedCharacter.ordinalNumber
        ? `${formatToKoreanOrder(selectedCharacter.ordinalNumber)} 캐릭터`
        : '캐릭터 선택'}{' '}
      <ArrowDown2Icon className={styles.characterButtonIcon} width={24} height={24} />
    </TextButton>
  );
};

export default CharacterSelectButton;
