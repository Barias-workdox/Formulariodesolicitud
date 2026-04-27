import { styles as captionInputStyles } from '@components/inline-edit-input/components/caption-input';

import type { InlineEditInputMode, InlineEditInputOverrides } from '@components/inline-edit-input';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

interface UseInlineEditInputOverridesReturn {
  getInlineEditInputOverrides(params?: {
    dataTestId?: string;
    mode?: InlineEditInputMode;
  }): InlineEditInputOverrides;
}

/** Custom hook for generating overrides for InlineEditInput component. */
export const useInlineEditInputOverrides = (): UseInlineEditInputOverridesReturn => {
  /** Retrieves overrides for Inline Edit Input. */
  const getInlineEditInputOverrides: UseInlineEditInputOverridesReturn['getInlineEditInputOverrides'] =
    ({ mode = 'caption', dataTestId } = {}) => ({
      Root: {
        style: ({ $theme }): StyleObject => ({
          padding: `${$theme.spacing.spacing2xs} ${$theme.spacing.spacingXs}`,
          height: 'unset',
          width: 'unset',
          backgroundColor: $theme.colors.neutralWashed,
          border: `solid 1px ${mode === 'input' ? $theme.colors.power : $theme.colors.neutralSubtle}`,
        }),
      },
      Caption: {
        props: {
          overrides: {
            Text: {
              style: ({ $theme }): StyleObject => ({
                ...captionInputStyles.captionTextStyles($theme),
                color: $theme.colors.neutral,
              }),
            },
            IconButton: {
              props: {
                overrides: {
                  BaseButton: {
                    props: {
                      'data-testid': `${dataTestId}--input-caption-edit-button`,
                    },
                    style: {
                      height: 'auto',
                      width: 'auto',
                    },
                  },
                },
              },
            },
          },
        },
      },
      EditInput: {
        props: {
          overrides: {
            Input: {
              props: {
                overrides: {
                  Root: {
                    style: (): StyleObject => ({
                      background: 'transparent',
                      border: 0,
                    }),
                  },
                  Input: {
                    style: (): StyleObject => ({
                      background: 'transparent',
                      padding: 0,
                    }),
                  },
                },
              },
            },
            SubmitIconButton: {
              props: {
                overrides: {
                  BaseButton: {
                    props: {
                      'data-testid': `${dataTestId}--submit-icon-button`,
                    },
                    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
                      height: 'auto',
                      width: 'auto',
                      marginRight: $theme.spacing.spacingXs,
                    }),
                  },
                },
              },
            },
            CancelIconButton: {
              props: {
                overrides: {
                  BaseButton: {
                    props: {
                      'data-testid': `${dataTestId}--cancel-icon-button`,
                    },
                    style: {
                      height: 'auto',
                      width: 'auto',
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

  return {
    getInlineEditInputOverrides,
  };
};
