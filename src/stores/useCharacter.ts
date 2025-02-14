import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { setCookie } from 'cookies-next/client';
import { COOKIE_NAME } from '@/constants';

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
      setCharacter: (character) => {
        set({ character });
        setCookie(COOKIE_NAME.bundleId, character.bundleId, { maxAge: 60 * 60 * 24 * 15 });
      },
      getBundleId: () => get().character.bundleId,
    }),
    {
      name: 'character',
    },
  ),
);
