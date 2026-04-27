import { themedStyled } from '@themes/utilities';

import { INFORMATION_POPOVER_WIDTH } from '../../constants/webdox-ai.constants';

import type { InformationPopoverOverrides } from '@components/information-popover/information-popover.interfaces';
import type { DesignSystemTheme, StyleOverrideProps } from '@themes/theme.interfaces';
import type { ButtonOverrides } from 'baseui/button';
import type { StyleObject } from 'styletron-react';

export const styles = {
  boldTextStyles: (theme: DesignSystemTheme): StyleObject => ({
    fontWeight: '500',
    color: theme.colors.neutral,
  }),
  popoverContentStyles: (theme: DesignSystemTheme): StyleObject => ({
    fontWeight: '500',
    color: theme.colors.neutral,
  }),
};

/** Styled component to wrap an Emoji. */
export const StyledEmoji = themedStyled(
  'span',
  ({ $theme }): StyleObject => ({
    fontSize: $theme.typography.HeadingXSmall.fontSize,
  }),
);

/** Styled component to wrap the InformationPopover content. */
const StyledPopoverWithActionsContent = themedStyled(
  'div',
  ({ $theme }): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    gap: $theme.spacing.spacingMd,
  }),
);

/** Styled component to wrap Action Buttons. */
export const StyledActionsContainer = themedStyled(
  'div',
  ({ $theme }): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    gap: $theme.spacing.spacingXs,
  }),
);

export const informationPopoverOverrides: InformationPopoverOverrides = {
  Body: {
    style: {
      maxWidth: INFORMATION_POPOVER_WIDTH,
    },
  },
  PopoverContent: {
    props: {
      overrides: {
        Header: {
          props: {
            overrides: {
              CloseButton: {
                props: {
                  overrides: {
                    BaseButton: {
                      style: ({ $theme }): StyleObject => ({
                        color: $theme.colors.neutralSubdued,

                        ':hover': {
                          backgroundColor: $theme.colors.powerSubtle,
                          borderColor: $theme.colors.powerSubtle,
                          color: $theme.colors.neutralSubdued,
                        },
                        ':focus': {
                          borderColor: $theme.colors.power,
                          color: $theme.colors.neutralSubdued,
                        },
                      }),
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export const legalWhisperInformationPopoverOverrides: InformationPopoverOverrides = {
  Body: {
    style: {
      maxWidth: INFORMATION_POPOVER_WIDTH,
    },
  },
  PopoverContent: {
    props: {
      overrides: {
        Header: {
          props: {
            overrides: {
              CloseButton: {
                props: {
                  overrides: {
                    BaseButton: {
                      style: ({ $theme }): StyleObject => ({
                        color: $theme.colors.neutralSubdued,

                        ':hover': {
                          backgroundColor: $theme.colors.sweetSubtle,
                          borderColor: $theme.colors.sweetSubtle,
                          color: $theme.colors.neutralSubdued,
                        },
                        ':focus': {
                          borderColor: $theme.colors.sweet,
                          color: $theme.colors.neutralSubdued,
                        },
                      }),
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export const informationPopoverWithActionsOverrides: InformationPopoverOverrides = {
  ...informationPopoverOverrides,
  PopoverContent: {
    props: {
      overrides: {
        Content: {
          component: StyledPopoverWithActionsContent,
        },
      },
    },
  },
};

export const actionButtonOverrides: ButtonOverrides = {
  BaseButton: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      borderColor: $theme.colors.neutralSubtle,
      padding: `${$theme.spacing.spacingXs} ${$theme.spacing.spacingSm}`,
      height: 'fit-content',
      justifyContent: 'flex-start',
      ...$theme.typography.ParagraphSmall,
    }),
  },
};
