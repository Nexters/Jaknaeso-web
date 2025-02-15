'use client';
import { useState } from 'react';

import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>클릭 시 모달 오픈</Button>
      <Modal
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
        title="정말 탈퇴하실 건가요?"
        description="회원 탈퇴 시 지금까지 기록한 정보가\n전부 삭제되고 복구가 불가능해요."
      >
        <Modal.Footer>
          <Button onClick={() => setIsOpen(false)}>닫기</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
