import { serverApi } from '@/libs/api/api.server';
import { getMemberIdToken, setCharacterId } from '@/libs/cookie/manageCookie.server';
import type { ResponseDTO } from '@/types';

import type { CharacterResponse, LatestCharacterResponse } from './types';

const getCharacters = async () => {
  const memberId = await getMemberIdToken();
  const { data } = await serverApi.get<ResponseDTO<CharacterResponse>>('/api/v1/characters', {
    params: { memberId },
  });
  return data.data;
};

const getLatestCharacter = async () => {
  const memberId = await getMemberIdToken();
  const { data } = await serverApi.get<ResponseDTO<LatestCharacterResponse>>('/api/v1/characters/latest', {
    params: { memberId },
  });
  setCharacterId(String(data.data.characterId));
  return data.data;
};
const characterServerApis = { getCharacters, getLatestCharacter };

export default characterServerApis;
