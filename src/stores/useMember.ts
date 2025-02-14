import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { setCookie } from 'cookies-next/client';
import { COOKIE_NAME } from '@/constants';

interface MemberState {
  name: string;
  email: string;
  memberId: number;
}

interface MemberStoreState {
  member: MemberState;
  setMember: (member: MemberState) => void;
  getMemberId: () => number;
}

export const useMemberStore = create(
  persist<MemberStoreState>(
    (set, get) => ({
      member: {
        name: '',
        email: '',
        memberId: 0,
      },
      setMember: (member) => {
        set({ member });
        setCookie(COOKIE_NAME.memberId, member.memberId, { maxAge: 60 * 60 * 24 * 15 });
      },
      getMemberId: () => get().member.memberId,
    }),
    {
      name: 'member',
    },
  ),
);
