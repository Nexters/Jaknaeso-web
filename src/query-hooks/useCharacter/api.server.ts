import { serverApi } from '@/libs/api/api.server';
import type { ResponseDTO } from '@/types';
import type { CharacterSearchParam, CharactersResponse } from './types';
import type { QueryFunctionContext } from '@tanstack/react-query';

const getCharacters = async ({ queryKey }: QueryFunctionContext) => {
  const [, params] = queryKey as [string, CharacterSearchParam];
  const res = await serverApi.get<ResponseDTO<CharactersResponse>>(`/api/v1/characters`, { params });
  return res.data.data;
};

const characterServerApis = { getCharacters };

export default characterServerApis;
