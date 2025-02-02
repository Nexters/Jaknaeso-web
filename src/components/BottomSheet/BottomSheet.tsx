import { type PropsWithChildren } from 'react';
import { Dialog } from 'radix-ui';

import style from './BottomSheet.module.scss';

import '@radix-ui/themes/styles.css';

interface BottomSheetProps {
  isOpen: boolean;
  closeSheet: VoidFunction;
}

export default function BottomSheet({ isOpen, closeSheet, children }: PropsWithChildren<BottomSheetProps>) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={closeSheet}>
      {/* <Dialog.Trigger asChild>
      </Dialog.Trigger> */}
      <Dialog.Portal>
        <Dialog.Overlay className={style.overlay} />
        <Dialog.Content className={style.content}>
          <div className={style.dragHandle}>드래그가 가능한 영역</div>
          <Dialog.Title>title</Dialog.Title>
          <Dialog.Description>description</Dialog.Description>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
