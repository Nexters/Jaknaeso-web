import { useState } from 'react';
import * as RadxSlider from '@radix-ui/react-slider';

import { ArrowDown2Icon, ArrowUp2Icon, CheckIcon } from '@/assets/icons';

import styles from './Slider.module.scss';

type Option = {
  id: number;
  optionContents: string;
};
interface SliderProps {
  options: Option[];
  value: number;
  setValue: (value: number) => void;
}

const Slider = ({ options, value, setValue }: SliderProps) => {
  const [sliderValue, setSliderValue] = useState(0);
  const onClick = (id: number, index: number) => {
    setValue(id);
    setSliderValue(index * 25);
  };

  return (
    <div className={styles.container}>
      <div className={styles.labels}>
        {options.map(({ id, optionContents }: Option, index) => (
          <div key={id} className={styles.label} onClick={() => onClick(id, index)}>
            {value === id && (
              <div className={styles.checkIcon}>
                <CheckIcon width="1.5rem" height="1.5rem" />
              </div>
            )}
            <span className={value === id ? styles.label__checked : ''}>{optionContents}</span>
          </div>
        ))}
      </div>
      <RadxSlider.Root
        className={styles.root}
        orientation="vertical"
        value={[sliderValue]}
        onValueChange={(val) => setSliderValue(val[0])}
        min={0}
        max={100}
        step={25}
      >
        <RadxSlider.Track className={styles.track} />
        <RadxSlider.Thumb className={styles.thumb}>
          <ArrowUp2Icon />
          <ArrowDown2Icon />
        </RadxSlider.Thumb>
      </RadxSlider.Root>
    </div>
  );
};

export default Slider;
