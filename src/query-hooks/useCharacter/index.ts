import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import type { CharacterResponse, CharacterSearchParam } from './types';
import characterKeys from './keys';
import characterApis from './api.client';

export const useGetCharacters = (
  params: CharacterSearchParam,
  options?: UseQueryOptions<CharacterResponse[], Error>,
) => {
  return useQuery<CharacterResponse[], Error>({
    queryKey: [characterKeys.lists(), params],
    queryFn: characterApis.getCharacters,
    ...options,
  });
};
