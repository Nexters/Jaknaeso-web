import { BottomSheet } from '@/components/BottomSheet';
import { CheckIcon } from '@/assets/icons';

import styles from './CharacterSelectBottomSheet.module.scss';
import { formatToKoreanOrder } from '@/utils';

type Props = {
  open: boolean;
  characters: Character[];
  selectedCharacter: Character;
  onCloseSheet: () => void;
  onSelect: (character: Character) => void;
};

type Character = {
  bundleId: number;
  ordinalNumber: number;
};

const CharacterSelectBottomSheet = ({ open, characters = [], selectedCharacter, onCloseSheet, onSelect }: Props) => {
  return (
    <BottomSheet title="가치관 캐릭터 선택하기" isOpen={open} height={380} closeSheet={onCloseSheet} closeIcon>
      <BottomSheet.Content className={styles.characterList}>
        {Array.isArray(characters) &&
          characters.map((character) => (
            <div key={character.bundleId} className={styles.characterItem} onClick={() => onSelect(character)}>
              <span>{formatToKoreanOrder(character.ordinalNumber)} 캐릭터</span>
              {character.bundleId === selectedCharacter.bundleId && (
                <CheckIcon className={styles.checkIcon} width={24} height={24} />
              )}
            </div>
          ))}
      </BottomSheet.Content>
    </BottomSheet>
  );
};

export default CharacterSelectBottomSheet;
