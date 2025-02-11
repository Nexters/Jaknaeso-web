'use client';

import { useState } from 'react';
import dayjs from 'dayjs';

import { Card } from '@/components/Card';
import styles from './page.module.scss';
import CharacterSelectLayout from '../components/CharacterSelectLayout';

type Character = {
  id: number;
  name: string;
};

type Question = {
  date: string;
  question: string;
  answer: string;
  retrospective: string;
};

const mockQuestions: Question[] = [];

const MOCK_CHARACTER1 = {
  id: 1,
  name: '첫번째 캐릭터',
};
const MOCK_CHARACTERS = [MOCK_CHARACTER1];

export default function ReportQuestions() {
  const [open, setOpen] = useState(false);
  const [characters, setCharacters] = useState<Character[]>(MOCK_CHARACTERS);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(MOCK_CHARACTER1);
  const [questions, setQuestions] = useState(mockQuestions);

  const handleCharacter = (character: Character) => {
    setSelectedCharacter(character);
    setOpen(false);
  };

  const formatDate = (date: string) => {
    const format = 'M월 D일';
    return dayjs(date).format(format);
  };

  return (
    <CharacterSelectLayout
      open={open}
      selectedCharacter={selectedCharacter}
      characters={characters}
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
