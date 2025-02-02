'use client';

import { useState } from 'react';

import { BottomSheet } from '@/components/BottomSheet';
import { Button } from '@/components/Button';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      홈 페이지
      <Button label="클릭" onClick={() => setOpen(true)} />
      <BottomSheet isOpen={open} closeSheet={() => setOpen(false)} />
    </div>
  );
}
