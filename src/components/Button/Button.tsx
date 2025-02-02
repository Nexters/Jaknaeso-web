import type { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'neutral';
  label: string;
}
/** Primary UI component for user interaction */
const Button = ({ color = 'primary', label, className, ...props }: ButtonProps) => {
  return (
    <button type="button" className={cn(styles.button, styles[`color-${color}`], className)} {...props}>
      {label}
    </button>
  );
};

export default Button;
