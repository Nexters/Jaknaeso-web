import type { PropsWithChildren } from 'react';
import { useState } from 'react';


import { FooterLayout } from '@/components/Layout/Footer';

import styles from './layout.module.scss';

export default function ReportLayout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const [characters, setCharacters] = useState<Character[]>(MOCK_CHARACTERS);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(MOCK_CHARACTER1);

  const handleCharacter = (character: Character) => {
    setSelectedCharacter(character);
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <FooterLayout>{children}</FooterLayout>
    </div>
  );
}
