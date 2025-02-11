'use client';

import { useEffect, useState } from 'react';
import CharacterSelectLayout from '../components/CharacterSelectLayout';
import { useGetCharacters } from '@/query-hooks/useCharacter';
import { useMemberStore } from '@/stores';

type Character = {
  bundleId: number;
  ordinalNumber: number;
};

export default function ReportAnalysis() {
  const { data: characterData = { characters: [] } } = useGetCharacters({ memberId: useMemberStore().getMemberId() });
  const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>({ ordinalNumber: 0, bundleId: 0 });

  const handleCharacter = (character: Character) => {
    setSelectedCharacter(character);
    setOpen(false);
  };

  useEffect(() => {
    if (characterData && characterData.characters.length > 0) {
      setSelectedCharacter(characterData.characters[0]);
    }
  }, [characterData]);

  return (
    <CharacterSelectLayout
      open={open}
      selectedCharacter={selectedCharacter}
      characters={characterData.characters}
      onButtonClick={() => setOpen(true)}
      onCloseSheet={() => setOpen(false)}
      onSelect={handleCharacter}
    ></CharacterSelectLayout>
  );
}
