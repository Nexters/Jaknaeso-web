import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import { ROUTES } from '@/constants';
import { setTokens } from '@/libs/cookie/manageCookie.client';
import { useMemberStore } from '@/stores';

import memberApis from '../useMember/api.client';

import authApis from './api';

export const useAuthMutation = () => {
  const router = useRouter();
  const { setMember } = useMemberStore();
  const postKakaoAuth = useMutation({
    mutationFn: authApis.postKakao,
    onSuccess: (res) => {
      setTokens(res.data.data.accessToken, res.data.data.refreshToken);
      router.push(ROUTES.home);
      memberApis.get(res.data.data.memberId).then((member) => {
        setMember({
          ...member,
          memberId: res.data.data.memberId,
        });
      });
    },
  });
  const postAppleAuth = useMutation({
    mutationFn: authApis.postApple,
    onSuccess: (res) => {
      setTokens(res.data.data.accessToken, res.data.data.refreshToken);
      router.push(ROUTES.home);
      memberApis.get(res.data.data.memberId).then((member) => {
        setMember({
          ...member,
          memberId: res.data.data.memberId,
        });
      });
    },
  });

  return { postKakaoAuth, postAppleAuth };
};
