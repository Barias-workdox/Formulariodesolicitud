import type { DesignSystemTheme } from '../../../../themes';
import type { TitleLayoutProps } from '../../../layouts';
import type { InputOverrides } from 'baseui/input';
import type { StyleObject } from 'styletron-react';

/** Overrides styles for the baseInput component */
export const inputStyledOverrides = (): InputOverrides => ({
  Input: {
    style: ({ $theme }): StyleObject => ({
      backgroundColor: 'transparent',
      padding: '10px 0px',
      ...$theme.typography.ParagraphSmall,
    }),
  },
  InputContainer: {
    style: {
      backgroundColor: 'transparent',
    },
  },
  Root: {
    style: {
      border: 'none',
      backgroundColor: 'transparent',
      padding: 0,
    },
  },
  StartEnhancer: {
    style: {
      backgroundColor: 'transparent',
      paddingLeft: 0,
    },
  },
});

/** Overrides styles for the TitleLayout component */
export const popoverStyledOverrides = (): TitleLayoutProps['overrides'] => ({
  TitleContainer: {
    overflow: 'auto',
    whiteSpace: 'unset',
    wordBreak: 'break-all',
  },
});

export const userListStyles = {
  wrapper: (theme: DesignSystemTheme): StyleObject => ({
    background: theme.colors.bgBase,
  }),
  inputWrapper: (theme: DesignSystemTheme): StyleObject => ({
    padding: `0px ${theme.spacing.spacingMd}`,
    borderBottomColor: theme.colors.neutralWashed,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
  }),
  bodyStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    height: '157px',
    rowGap: theme.spacing.spacingMd,
    padding: theme.spacing.spacingMd,
    overflowY: 'auto',
  }),
  noResultsWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as StyleObject,
  footerStyles: (theme: DesignSystemTheme): StyleObject => ({
    borderTopColor: theme.colors.neutralSubtle,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    padding: theme.spacing.spacingMd,
    display: 'flex',
    flexDirection: 'column',
  }),
};
