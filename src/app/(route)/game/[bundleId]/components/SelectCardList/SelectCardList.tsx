import { useEffect } from 'react';
import cn from 'classnames';

import { CheckIcon } from '@/assets/icons';
import type { SurveyOption } from '@/query-hooks/useSurvey/types';

import styles from './SelectCardList.module.scss';

interface SelectCardListProps {
  options: SurveyOption[];
  value: number;
  onSelect: (id: number) => void;
}

interface SelectCardProps {
  option: SurveyOption;
  onSelect: (id: number) => void;
  isChecked?: boolean;
}

const SelectCard = ({ option, onSelect, isChecked }: SelectCardProps) => {
  return (
    <div className={cn(styles.card, isChecked && styles.card__checked)} onClick={() => onSelect(option.id)}>
      <div className={cn(styles.icon, isChecked && styles.icon__checked)}>
        <CheckIcon width="1.125rem" height="1.125rem" />
      </div>
      <p>{option.optionContents}</p>
    </div>
  );
};

const SelectCardList = ({ options, value, onSelect }: SelectCardListProps) => {
  useEffect(() => {
    onSelect(options[0].id);
  }, [options, onSelect]);

  const isChecked = (id: number) => value === id;

  return (
    <div className={styles.cardListContainer}>
      {options.map((option: SurveyOption) => (
        <SelectCard key={option.id} option={option} onSelect={onSelect} isChecked={isChecked(option.id)} />
      ))}
    </div>
  );
};

export default SelectCardList;
