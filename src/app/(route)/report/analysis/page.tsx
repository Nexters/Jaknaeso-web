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
  const { data: characters } = useGetCharacters({ memberId: useMemberStore().getMemberId() });
  const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  const handleCharacter = (character: Character) => {
    setSelectedCharacter(character);
    setOpen(false);
  };

  useEffect(() => {
    if (characters && characters.characters.length > 0) {
      setSelectedCharacter(characters.characters[0]);
    }
  }, [characters]);

  return (
    <CharacterSelectLayout
      open={open}
      selectedCharacter={selectedCharacter}
      characters={characters?.characters}
      onButtonClick={() => setOpen(true)}
      onCloseSheet={() => setOpen(false)}
      onSelect={handleCharacter}
    ></CharacterSelectLayout>
  );
}
