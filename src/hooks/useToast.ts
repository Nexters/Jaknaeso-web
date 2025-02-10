import { useState } from 'react';

export function useToast() {
  // TODO: 전역 상태 적용
  const [toast, setToast] = useState<{ open: boolean; message: string }>({
    open: false,
    message: '',
  });

  const showToast = (message: string, duration = 500) => {
    setToast({ open: true, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, open: false }));
    }, duration);
  };

  const updateToast = (open: boolean) => {
    setToast((prev) => ({ ...prev, open }));
  };

  return { toast, updateToast, showToast };
}
