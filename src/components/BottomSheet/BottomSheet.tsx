import { type PropsWithChildren } from 'react';
import { Dialog } from 'radix-ui';

import style from './BottomSheet.module.scss';

import '@radix-ui/themes/styles.css';

interface BottomSheetProps {
  isOpen: boolean;
  closeSheet: VoidFunction;
  height?: number;
}

const BOTTOM_SHEET_HEIGHT = 261;

export default function BottomSheet({
  isOpen,
  closeSheet,
  height = BOTTOM_SHEET_HEIGHT,
  children,
}: PropsWithChildren<BottomSheetProps>) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={closeSheet}>
      {/* <Dialog.Trigger asChild>
      </Dialog.Trigger> */}
      <Dialog.Portal>
        <Dialog.Overlay className={style.overlay} />
        <Dialog.Content className={style.content} style={{ height: `${height}px` }}>
          <Dialog.Title>title</Dialog.Title>
          <Dialog.Description>description</Dialog.Description>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
