'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';

import { Slider } from '@/components/Slider';
import { useGetTodaySurvey } from '@/query-hooks/useSurvey';

import FlipCard from '../FlipCard';
import GamePageLayout from '../GameLayout';

import styles from './GameClientPage.module.scss';

type SurveyType = 'BALANCE' | 'MULTIPLE_CHOICE';
type Option = {
  id: number;
  optionContents: string;
};

const MultipleChoice = ({
  options,
  value,
  onSelect,
}: {
  options: Option[];
  value: number;
  onSelect: (id: number) => void;
}) => (
  <div className={styles.sliderContainer}>
    <Slider options={options} value={value} setValue={onSelect} />
  </div>
);

export default function Game() {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState(0);
  const { bundleId } = useParams();

  const { data = { contents: '', options: [], surveyType: 'BALANCE' }, isLoading } = useGetTodaySurvey(
    bundleId as string,
  );
  const surveyType = data ? (data.surveyType as SurveyType) : 'BALANCE';

  if (isLoading) return <div>Loading...</div>;

  return (
    <GamePageLayout
      title={data.contents}
      isOpen={open}
      openSheet={() => setOpen(true)}
      closeSheet={() => setOpen(false)}
      className={surveyType === 'BALANCE' ? styles.container : ''}
      surveyType={surveyType}
      answer={answer}
    >
      {surveyType === 'BALANCE' ? (
        <FlipCard options={data.options} onSelect={setAnswer} />
      ) : (
        <MultipleChoice options={data.options} value={answer} onSelect={setAnswer} />
      )}
    </GamePageLayout>
  );
}
