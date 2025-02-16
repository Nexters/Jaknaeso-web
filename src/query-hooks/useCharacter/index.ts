import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import characterApis from './api.client';
import characterKeys from './keys';
import type { CharacterAnalysisResponse, CharacterResponse, LatestCharacterResponse } from './types';

const useGetCharacters = (options?: UseQueryOptions<CharacterResponse, Error>) => {
  return useQuery<CharacterResponse, Error>({
    queryKey: characterKeys.lists(),
    queryFn: () => characterApis.getCharacters(),
    ...options,
  });
};

const useGetLatestCharacter = (options?: UseQueryOptions<LatestCharacterResponse, Error>) => {
  return useQuery<LatestCharacterResponse, Error>({
    queryKey: characterKeys.detail(['latest']),
    queryFn: () => characterApis.getLatestCharacter(),
    ...options,
  });
};

const useGetCharacterAnalysis = (characterId: string, options?: UseQueryOptions<CharacterAnalysisResponse, Error>) => {
  return useQuery<CharacterAnalysisResponse, Error>({
    queryKey: characterKeys.detail(['analysis', characterId]),
    queryFn: () => characterApis.getCharacterAnalysis(characterId),
    ...options,
  });
};
export { useGetCharacterAnalysis, useGetCharacters, useGetLatestCharacter };
