import type { PropsWithChildren } from 'react';

import CharacterSelectButton from '../CharacterSelectButton';
import CharacterSelectBottomSheet from '../CharacterSelectBottomSheet';
import CharacterTabNav from '../CharacterTabNav';

import styles from './CharacterSelectLayout.module.scss';

type Props = {
  open: boolean;
  selectedCharacter?: Character;
  characters?: Character[];
  onButtonClick: () => void;
  onCloseSheet: () => void;
  onSelect: (character: Character) => void;
};

type Character = {
  bundleId: number;
  ordinalNumber: number;
};

export default function CharacterSelectLayout({
  children,
  open,
  selectedCharacter,
  characters = [],
  onButtonClick,
  onCloseSheet,
  onSelect,
}: PropsWithChildren<Props>) {
  return (
    <div>
      <CharacterSelectButton selectedCharacter={selectedCharacter} onClick={onButtonClick} />
      <CharacterTabNav />
      <div className={styles.content}>{children}</div>
      <CharacterSelectBottomSheet
        open={open}
        characters={characters}
        selectedCharacter={selectedCharacter}
        onCloseSheet={onCloseSheet}
        onSelect={onSelect}
      />
    </div>
  );
}
