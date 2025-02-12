import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CharacterState {
  bundleId: number;
  ordinalNumber: number;
}

interface CharacterStoreState {
  character: CharacterState;
  setCharacter: (character: CharacterState) => void;
  getBundleId: () => number;
}

export const useCharacterStore = create(
  persist<CharacterStoreState>(
    (set, get) => ({
      character: {
        bundleId: 0,
        ordinalNumber: 0,
      },
      setCharacter: (character) => set({ character }),
      getBundleId: () => get().character.bundleId,
    }),
    {
      name: 'character',
    },
  ),
);
