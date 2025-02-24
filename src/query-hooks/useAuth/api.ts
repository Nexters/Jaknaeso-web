import { withoutTokenApi } from '@/libs/api/api';
import { setTokens } from '@/libs/cookie/manageCookie.client';
import type { ResponseDTO } from '@/types';

import type { AuthParams, AuthReissueResponse, AuthResponse } from './types';

const postKakao = async (body: AuthParams['postKakao']) => {
  const res = await withoutTokenApi.post<ResponseDTO<AuthResponse>>(`/api/v1/auth/kakao-login`, body);
  return res.data.data;
};

const postApple = async (body: AuthParams['postApple']) => {
  const res = await withoutTokenApi.post<ResponseDTO<AuthResponse>>(`/api/v1/auth/apple-login`, body);
  return res.data.data;
};

const reissue = async (token: string) => {
  const { data } = await withoutTokenApi.post<ResponseDTO<AuthReissueResponse>>(
    `/api/v1/auth/reissue`,
    {},
    {
      headers: {
        'Refresh-Token': `Bearer ${token}`,
      },
    },
  );
  setTokens(data.data.accessToken, data.data.refreshToken);
  return data.data.accessToken;
};

const authApis = { postKakao, postApple, reissue };

export default authApis;
