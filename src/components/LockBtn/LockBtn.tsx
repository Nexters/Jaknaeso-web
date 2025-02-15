import type { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import { CheckIcon, LockIcon } from '@/assets/icons';

import styles from './LockBtn.module.scss';

const OPTIONS = {
  disabled: {
    icon: LockIcon,
    iconColor: '#D4D7E2',
  },
  completed: {
    icon: CheckIcon,
    iconColor: '#8C909C',
  },
  default: {
    icon: LockIcon,
    iconColor: '#3F78FF',
  },
  completedToday: {
    icon: CheckIcon,
    iconColor: '#3F78FF',
  },
};
export type LockBtnVariant = keyof typeof OPTIONS;

interface LockBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: LockBtnVariant;
}

export default function LockBtn({ label, variant = 'default', className, disabled, ...props }: LockBtnProps) {
  const type = disabled ? 'disabled' : variant;
  const item = OPTIONS[type];
  return (
    <div className={cn(styles[`container-${type}`], styles.container, className)}>
      <button className={cn(styles[`color-${type}`], styles.button)} {...props}>
        <item.icon width={28} height={28} color={item.iconColor} />
      </button>
      <span>{label}</span>
    </div>
  );
}
