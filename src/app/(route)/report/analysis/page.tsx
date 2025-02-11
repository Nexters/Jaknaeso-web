'use client';

import { useState } from 'react';
import CharacterSelectLayout from '../components/CharacterSelectLayout';

type Character = {
  id: number;
  name: string;
};

const MOCK_CHARACTER1 = {
  id: 1,
  name: '첫번째 캐릭터',
};
const MOCK_CHARACTER2 = {
  id: 2,
  name: '두번째 캐릭터',
};
const MOCK_CHARACTERS = [MOCK_CHARACTER1, MOCK_CHARACTER2];

export default function ReportAnalysis() {
  const [open, setOpen] = useState(false);
  const [characters, setCharacters] = useState<Character[]>(MOCK_CHARACTERS);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(MOCK_CHARACTER1);

  const handleCharacter = (character: Character) => {
    setSelectedCharacter(character);
    setOpen(false);
  };

  return (
    <CharacterSelectLayout
      open={open}
      selectedCharacter={selectedCharacter}
      characters={characters}
      onButtonClick={() => setOpen(true)}
      onCloseSheet={() => setOpen(false)}
      onSelect={handleCharacter}
    ></CharacterSelectLayout>
  );
}
