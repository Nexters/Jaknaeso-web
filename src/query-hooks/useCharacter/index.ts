import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import type { CharacterSearchParam, CharactersResponse } from './types';
import characterKeys from './keys';
import characterApis from './api.client';

export const useGetCharacters = (
  params: CharacterSearchParam,
  options?: UseQueryOptions<CharactersResponse, Error>,
) => {
  return useQuery<CharactersResponse, Error>({
    queryKey: [characterKeys.lists(), params],
    queryFn: characterApis.getCharacters,
    ...options,
  });
};
