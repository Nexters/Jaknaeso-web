'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Skeleton } from '@radix-ui/themes';

import { Card } from '@/components/Card';
import { LottieAnimation } from '@/components/LottieAnimation';
import { useGetSubmissions } from '@/query-hooks/useSurvey';

import { EmptyTab } from '../EmptyTab';

import styles from './QuestionsTab.module.scss';

export default function QuestionsTab({ bundleId }: { bundleId: number }) {
  const searchParams = useSearchParams();
  const focusIndex = searchParams.get('focus') ? Number(searchParams.get('focus')) - 1 : null;
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { data: submissionData = { surveyRecords: [] }, isLoading } = useGetSubmissions(String(bundleId));

  useEffect(() => {
    if (!isLoading && focusIndex !== null) {
      const cardElement = cardRefs.current[focusIndex];
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [focusIndex, isLoading, submissionData.surveyRecords]);

  if (submissionData.surveyRecords.length === 0 && !isLoading) {
    return <EmptyTab title={'아직 작성하신 회고가 없어요'} subTitle={'가치관 질문에 회고를 작성해보세요.'} />;
  }
  if (!submissionData.surveyRecords || isLoading) {
    return (
      <div className={styles.loading}>
        <LottieAnimation type="loading" width="200px" height="200px" />
      </div>
    );
  }

  return (
    <div className={styles.contentContainer}>
      {submissionData.surveyRecords.map((question, index) => (
        <Skeleton key={question.submissionId} loading={isLoading}>
          <Card
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            count={index + 1}
            date={question.submittedAt}
            question={question.question}
            answer={question.answer}
            isOpen={focusIndex === index}
            retrospective={question.retrospective}
            className={styles.card}
          />
        </Skeleton>
      ))}
    </div>
  );
}
