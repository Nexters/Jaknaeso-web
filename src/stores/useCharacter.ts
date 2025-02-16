import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CharacterState {
  characterNo: string;
  characterId: number;
}

interface CharacterStoreState {
  character: CharacterState;
  setCharacter: (character: CharacterState) => void;
  //getBundleId: () => number;
}

export const useCharacterStore = create(
  persist<CharacterStoreState>(
    (set, get) => ({
      character: {
        bundleId: 0,
        characterId: 0,
        characterNo: '',
      },
      setCharacter: (character) => {
        set({ character });
        //setBundleIdToken(String(character.bundleId ?? 0));
      },
      //getBundleId: () => get().character.bundleId,
    }),
    {
      name: 'character',
    },
  ),
);
