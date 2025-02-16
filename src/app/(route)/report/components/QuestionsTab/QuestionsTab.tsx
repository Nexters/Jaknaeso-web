'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import dayjs from 'dayjs';

import { Card } from '@/components/Card';
import { useGetSubmissions } from '@/query-hooks/useSurvey';

import styles from './QuestionsTab.module.scss';

export default function QuestionsTab({ bundleId }: { bundleId: number }) {
  const searchParams = useSearchParams();
  const focusIndex = searchParams.get('focus') ? Number(searchParams.get('focus')) - 1 : null;
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { data: submissionData = { surveyRecords: [] } } = useGetSubmissions(String(bundleId));

  useEffect(() => {
    if (focusIndex !== null && cardRefs.current[focusIndex]) {
      cardRefs.current[focusIndex]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [focusIndex]);

  const formatDate = (date: string) => {
    const format = 'M월 D일';
    return dayjs(date, 'YYYY.MM.DD').format(format);
  };

  return (
    <div className={styles.contentContainer}>
      {submissionData.surveyRecords.map((question, index) => (
        <Card
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
          key={question.submissionId}
          count={index + 1}
          date={formatDate(question.submittedAt)}
          question={question.question}
          answer={question.answer}
          isOpen={focusIndex === index}
          retrospective={question.retrospective}
          className={styles.card}
        />
      ))}
    </div>
  );
}
