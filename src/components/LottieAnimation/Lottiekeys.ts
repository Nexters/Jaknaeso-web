import LoadingAnimation from '@/assets/lottie/loading.json';
import WarningAnimation from '@/assets/lottie/warning.json';

const animations = {
  warning: WarningAnimation,
  loading: LoadingAnimation,
};

export type AnimationKeys = keyof typeof animations;
export default animations;
