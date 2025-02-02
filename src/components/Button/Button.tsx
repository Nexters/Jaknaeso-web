import { type ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'neutral';
  label: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ color = 'primary', label, className, ...props }, ref) => {
  return (
    <button ref={ref} type="button" className={cn(styles.button, styles[`color-${color}`], className)} {...props}>
      {label}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
