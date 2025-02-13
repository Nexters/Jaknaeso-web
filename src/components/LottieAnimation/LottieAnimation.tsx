import Lottie, { type LottieProps } from 'react-lottie-player';

import animations, { type AnimationKeys } from './Lottiekeys';

type LottieAnimationProps = LottieProps & {
  type: AnimationKeys;
  width?: string;
  height?: string;
};

export default function LottieAnimation({
  type,
  play = true,
  loop = true,
  width = '100px',
  height = '100px',
  ...options
}: LottieAnimationProps) {
  return <Lottie play={play} loop={loop} animationData={animations[type]} style={{ width, height }} {...options} />;
}
