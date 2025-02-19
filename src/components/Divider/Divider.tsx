import type { HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Divider.module.scss';

export default function Divider({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className, styles.container)} {...props} />;
}
