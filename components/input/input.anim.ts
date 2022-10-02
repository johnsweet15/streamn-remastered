import { Variants } from 'framer-motion';

const FOCUSED_X_OFFSET = '0px';
const BLURRED_X_OFFSET = '16px';
const FOCUSED_Y_OFFSET = '-26px';
const BLURRED_Y_OFFSET = '11px';

export const getVariants = (
  focused: boolean,
  inputValue: string,
  defaultValue: string
): Variants => {
  const hasContent = inputValue.length > 0 || defaultValue.length > 0;
  return {
    animate: () => ({
      opacity: focused ? 1 : 0.7,
      top: focused
        ? FOCUSED_Y_OFFSET
        : hasContent
        ? FOCUSED_Y_OFFSET
        : BLURRED_Y_OFFSET,
      left: focused
        ? FOCUSED_X_OFFSET
        : hasContent
        ? FOCUSED_X_OFFSET
        : BLURRED_X_OFFSET,
      fontSize: focused || hasContent ? '14px' : '16px',
    }),
    initial: {
      opacity: 0.7,
    },
  };
};
