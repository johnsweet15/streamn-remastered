import { Variants } from 'framer-motion';

const FOCUSED_X_OFFSET = '0px';
const BLURRED_X_OFFSET = '16px';
const FOCUSED_Y_OFFSET = '-26px';
const BLURRED_Y_OFFSET = '13px';

export const getVariants = (focused: boolean, inputValue: string): Variants => {
  return {
    animate: () => ({
      opacity: focused ? 1 : 0.7,
      top: focused
        ? FOCUSED_Y_OFFSET
        : inputValue.length > 0
        ? FOCUSED_Y_OFFSET
        : BLURRED_Y_OFFSET,
      left: focused
        ? FOCUSED_X_OFFSET
        : inputValue.length > 0
        ? FOCUSED_X_OFFSET
        : BLURRED_X_OFFSET,
      fontSize: focused || inputValue.length > 0 ? '16px' : '18px',
    }),
    initial: {
      opacity: 0.7,
    },
  };
};
