'use client';

import { useGetCharacters } from '@/query-hooks/useCharacter';
import { useMemberStore } from '@/stores';
import { useState } from 'react';
import type { CharacterItem } from '@/query-hooks/useCharacter/types';
import CharacterSelectLayout from '@/app/(route)/report/components/CharacterSelectLayout';

export default function ReportAnalysisPage() {
  const { data: characterData = { characters: [] } } = useGetCharacters({ memberId: useMemberStore().getMemberId() });
  const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterItem>(
    characterData.characters.at(0) ?? { ordinalNumber: 0, bundleId: 0 },
  );

  const handleCharacter = (character: CharacterItem) => {
    setSelectedCharacter(character);
    setOpen(false);
  };

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
