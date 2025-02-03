import type { PropsWithChildren } from 'react';

import style from './BottomSheet.module.scss';
export default function BottomSheetContent({ children }: PropsWithChildren) {
  return <div className={style.description}>{children}</div>;
}
