export type CharacterSearchParam = {
  memberId: number;
};

export type CharactersResponse = {
  characters: CharacterResponse[];
};

export type CharacterResponse = {
  ordinalNumber: number;
  bundleId: number;
};
