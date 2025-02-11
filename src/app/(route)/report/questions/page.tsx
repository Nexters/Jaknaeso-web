'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { Card } from '@/components/Card';
import styles from './page.module.scss';
import CharacterSelectLayout from '../components/CharacterSelectLayout';
import { useGetCharacters } from '@/query-hooks/useCharacter';
import { useMemberStore } from '@/stores';

type Character = {
  bundleId: number;
  ordinalNumber: number;
};

type Question = {
  date: string;
  question: string;
  answer: string;
  retrospective: string;
};

const mockQuestions: Question[] = [];

export default function ReportQuestions() {
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState(mockQuestions);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  const { data: characters } = useGetCharacters({ memberId: useMemberStore().getMemberId() });

  const handleCharacter = (character: Character) => {
    setSelectedCharacter(character);
    setOpen(false);
  };

  const formatDate = (date: string) => {
    const format = 'M월 D일';
    return dayjs(date).format(format);
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
    >
      <div className={styles.contentContainer}>
        {questions.map((question, index) => (
          <Card
            key={index}
            count={index + 1}
            date={formatDate(question.date)}
            question={question.question}
            answer={question.answer}
            retrospective={question.retrospective}
            className={styles.card}
          />
        ))}
      </div>
    </CharacterSelectLayout>
  );
}
