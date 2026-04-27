import { themedWithStyle } from '../../themes';
import { SectionedModalBody } from '../modal';

import type { DesignSystemTheme } from '../../themes';
import type { BackgroundIconShape } from '@components/background-icon';
import type { ModalOverrides } from 'baseui/modal';
import type { StyleObject } from 'styletron-react';

/**
 * Styles for the suiteAI background gradient.
 */
export const getSuiteAIBackgroundGradient = ({
  shape = 'round',
  isLoading = false,
}: {
  shape?: BackgroundIconShape;
  isLoading?: boolean;
} = {}): StyleObject => ({
  '::before': {
    //  Some colors used in the gradient are not tokenized as they are exclusively used for animation purposes.
    background: `conic-gradient(from 130.7deg at 50% 50%, #F6F2F8 0deg, #C5C7FE 140.4deg, #87EECF 295.44deg, #F6F2F8 360deg)`,
    content: '""',
    height: '100%',
    width: '100%',
    borderRadius: shape === 'round' ? '50%' : '0',

    ...(isLoading && {
      animationDuration: '2s',
      animationDelay: '0s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',

      animationName: {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(720deg)',
        },
      },
    }),
  },
});

export const chatBotModalStyles = {
  formContainerStyles: {
    maxHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
  } as StyleObject,
};

/** Modal overrides */
export const modalOverrides = (): ModalOverrides => ({
  Dialog: {
    style: chatBotModalStyles,
  },
});

/** Used inside the webdox AI forms body */
export const StyledSectionedModalBody = themedWithStyle(SectionedModalBody, ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.spacing.spacingMd,
  flexGrow: 1,
  overflow: 'auto',
}));

export const styledChatBotGenerativeTextStyles = {
  textStyles: (theme: DesignSystemTheme): StyleObject => ({
    color: theme.colors.neutralSubdued,
  }),
};
