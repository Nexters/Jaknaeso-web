import { clientApi } from '@/libs/api/api.client';
import { getMemberIdToken, setBundleIdToken, setCharacterId } from '@/libs/cookie/manageCookie.client';
import { useCharacterStore } from '@/stores';
import type { ResponseDTO } from '@/types';

import type {
  CharacterAnalysisResponse,
  CharacterReportInfoResponse,
  CharacterResponse,
  LatestCharacterResponse,
} from './types';
const getCharacters = async () => {
  const memberId = await getMemberIdToken();
  const { data } = await clientApi.get<ResponseDTO<CharacterResponse>>(`/api/v1/characters`, {
    params: { memberId },
  });
  const currentCharacter = data.data.characters[data.data.characters.length - 1];
  setCharacterId(String(currentCharacter.characterId));
  setBundleIdToken(String(currentCharacter.bundleId));
  useCharacterStore.getState().setCharacter({
    characterId: currentCharacter.characterId,
    characterNo: currentCharacter.characterNo,
    isCompleted: currentCharacter.isCompleted,
  });
  return data.data;
};

const getLatestCharacter = async () => {
  const memberId = await getMemberIdToken();
  const { data } = await clientApi.get<ResponseDTO<LatestCharacterResponse>>('/api/v1/characters/latest', {
    params: { memberId },
  });
  return data.data;
};

const getCharacterAnalysis = async (characterId: string) => {
  const memberId = await getMemberIdToken();
  const { data } = await clientApi.get<ResponseDTO<CharacterAnalysisResponse>>(
    `/api/v1/characters/${characterId}/report`,
    {
      params: { memberId },
    },
  );

  return data.data;
};

const getCharacterReportInfo = async (characterId: string) => {
  const memberId = await getMemberIdToken();
  const { data } = await clientApi.get<ResponseDTO<CharacterReportInfoResponse>>(`/api/v1/characters/${characterId}`, {
    params: { memberId },
  });
  return data.data;
};

const characterServerApis = { getCharacters, getLatestCharacter, getCharacterAnalysis, getCharacterReportInfo };

export default characterServerApis;
