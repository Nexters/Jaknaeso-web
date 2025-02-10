'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { Slider } from '@/components/Slider';
import { ROUTES } from '@/constants';
import { useGetTodaySurvey } from '@/query-hooks/useSurvey';

import FlipCard from '../FlipCard';
import GamePageLayout from '../GameLayout';

import styles from './GameClientPage.module.scss';

type SurveyType = 'BALANCE' | 'MULTIPLE_CHOICE';

const MultipleChoice = ({ initialValue, onSelect }: { initialValue: number; onSelect: (id: number) => void }) => (
  <div className={styles.sliderContainer}>
    <Slider value={initialValue} setValue={onSelect} />
  </div>
);

export default function Game() {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState(0);
  const router = useRouter();
  const { bundleId } = useParams();

  const { data = { contents: '', options: [], surveyType: 'BALANCE' }, isLoading } = useGetTodaySurvey(
    bundleId as string,
  );
  const surveyType = data ? (data.surveyType as SurveyType) : 'BALANCE';

  const goToResultPage = () => {
    router.push(ROUTES.gameComplete);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <GamePageLayout
      title={data.contents}
      isOpen={open}
      openSheet={() => setOpen(true)}
      closeSheet={() => setOpen(false)}
      goToResultPage={goToResultPage}
      className={surveyType === 'BALANCE' ? styles.container : ''}
      surveyType={surveyType}
    >
      {surveyType === 'BALANCE' ? (
        <FlipCard options={data.options} onSelect={setAnswer} />
      ) : (
        <MultipleChoice initialValue={answer} onSelect={setAnswer} />
      )}
    </GamePageLayout>
  );
}
