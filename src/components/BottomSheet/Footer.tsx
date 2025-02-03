import type { PropsWithChildren } from 'react';

import style from './BottomSheet.module.scss';

export default function BottomSheetFooter({ children }: PropsWithChildren) {
  return <div className={style.footer}>{children}</div>;
}
