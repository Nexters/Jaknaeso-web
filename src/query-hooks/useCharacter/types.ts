import type { CharacterKeys } from '@/constants/enums';

export type CharacterParams = {
  get: {
    memberId: number;
  };
};

export type CharacterResponse = {
  characters: CharacterItem[];
};

export type CharacterItem = {
  characterNo: string;
  characterId: number;
  bundleId: number;
};

export type LatestCharacterResponse = {
  characterId: number;
  characterNo: string;
  characterType: CharacterKeys;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
};
