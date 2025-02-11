import { ArrowDown2Icon } from '@/assets/icons';
import { TextButton } from '@/components/TextButton';

import styles from './CharacterSelectButton.module.scss';

type Props = {
  selectedCharacterName: string;
  onClick: () => void;
};

const CharacterSelectButton = ({ onClick, selectedCharacterName }: Props) => {
  return (
    <TextButton className={styles.characterButton} onClick={onClick}>
      {selectedCharacterName} <ArrowDown2Icon className={styles.characterButtonIcon} width={24} height={24} />
    </TextButton>
  );
};

export default CharacterSelectButton;
