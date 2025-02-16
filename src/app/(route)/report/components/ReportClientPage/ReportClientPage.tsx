'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { Tabs } from '@/components/Tabs';
import { ROUTES } from '@/constants';
import type { CharacterItem } from '@/query-hooks/useCharacter/types';

import { AnalysisTab } from '../AnalysisTab';
import { QuestionsTab } from '../QuestionsTab';

import CharacterBottomSheet from './CharacterBottomSheet';
import styles from './ReportClientPage.module.scss';

const TABS = [
  {
    href: ROUTES.reportAnalysis,
    label: '캐릭터 분석',
  },
  {
    href: ROUTES.reportQuestions,
    label: '나의 답변 모아보기',
  },
];

interface ReportProps {
  bundleId: number;
  characterId: number;
}

export type SelectCharacter = Omit<CharacterItem, 'characterNo'>;

export default function ReportClientPage({ bundleId, characterId }: ReportProps) {
  const searchParams = useSearchParams().get('type');
  const [selectCharacter, setSelectCharacter] = useState<SelectCharacter>({ characterId, bundleId });

  const onSelectCharacter = (character: SelectCharacter) => {
    setSelectCharacter(character);
  };
  // TODO: 완료 여부 서버로 받아 분기 처리 필요

  return (
    <div>
      <div className={styles.header}>
        <CharacterBottomSheet selectCharacter={selectCharacter} onSelectCharacter={onSelectCharacter} />
        <Tabs tabs={TABS} />
      </div>
      <div className={styles.content}>
        {searchParams === 'analysis' && <AnalysisTab />}
        {searchParams === 'questions' && <QuestionsTab bundleId={selectCharacter.bundleId} />}
      </div>
    </div>
  );
}
