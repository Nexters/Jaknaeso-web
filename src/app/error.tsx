'use client';

import { useRouter } from 'next/navigation';

import { ErrorComponent } from '@/components/ErrorComponent';

import './globals.scss';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  };
  return (
    <div className="errorContainer">
      <ErrorComponent reset={reset} redirect={goHome} />
    </div>
  );
}
