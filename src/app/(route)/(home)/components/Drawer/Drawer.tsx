'use client';

import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import styles from './Drawer.module.scss';
import DrawerHandle from './Handle';
import { useDrawer } from './useDrawer';

export const WINDOW_HEIGHT = window.innerHeight;
export const BOTTOM_SHEET_MAX_HEIGHT = window.innerHeight - 261;
export const BOTTOM_SHEET_MIN_HEIGHT = window.innerHeight - 487;

export default function DrawerMain({ children }: PropsWithChildren) {
  const { onDragEnd, controls, isOpen } = useDrawer();
  return (
    <motion.div
      drag="y"
      onDragEnd={onDragEnd}
      initial="hidden"
      animate={controls}
      variants={{
        /**
         * 아예 스크롤해서 닫게하고 싶은 경우 : { top: WINDOW_HEIGHT }
         */
        visible: { top: BOTTOM_SHEET_MAX_HEIGHT, bottom: '4.25rem' },
        hidden: { top: BOTTOM_SHEET_MIN_HEIGHT, bottom: '4.25rem' },
      }}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.2}
      className={styles.container}
    >
      <DrawerHandle isOpen={isOpen} />
      <div className={styles.layout}>{children}</div>
    </motion.div>
  );
}
