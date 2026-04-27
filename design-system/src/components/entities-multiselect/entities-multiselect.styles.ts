import { COMMON_ICON_SIZE_24 } from '@constants/common.constants';

import type { DesignSystemTheme } from '../../themes';
import type { TitleLayoutProps } from '@components/layouts';
import type { PopoverOverrides } from 'baseui/popover';
import type { StyleObject } from 'styletron-react';

/** Overrides styles for the basePopover component */
export const popoverStyledOverrides = (width: number): PopoverOverrides => ({
  Body: {
    style: {
      width: `${width}px`,
      zIndex: 4,
    },
  },
});

export const entitiesMultiselectStyles = {
  containerWrapper: (
    theme: DesignSystemTheme,
    { disabled, $hasError }: { disabled?: boolean; $hasError?: boolean },
  ): StyleObject => ({
    backgroundColor: theme.colors.neutralBase,
    borderWidth: '1px',
    outline: 'none',
    position: 'relative',
    borderColor: $hasError ? theme.colors.negativeSubdued : theme.colors.neutralSubtle,
    borderRadius: theme.borders.borderSm,
    borderStyle: 'solid',
    ...(disabled
      ? {
          pointerEvents: 'none',
          backgroundColor: theme.colors.neutralWashed,
        }
      : {}),
  }),
  contentStyles: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '42px',
  } as StyleObject,
  contentWrapper: (theme: DesignSystemTheme): StyleObject => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    overflowY: 'hidden',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    gap: theme.spacing.spacingXs,
    padding: `0 ${theme.spacing.spacingSm}`,
  }),
  leadingWrapper: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    height: '100%',
    borderRadius: theme.borders.borderSm,
    padding: '0 0.5rem',
  }),
  textValue: (theme: DesignSystemTheme, { disabled }: { disabled?: boolean }): StyleObject => ({
    overflow: 'inherit',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: theme.colors.neutralStrong,
    margin: 0,
    ...(disabled
      ? {
          color: theme.colors.neutralDepressed,
        }
      : {}),
  }),
  placeholderWrapper: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.spacingXs,
    paddingLeft: `${theme.spacing.spacing2xs}`,
  }),
  endIconWrapper: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: `0 ${theme.spacing.spacingSm}`,
    minWidth: COMMON_ICON_SIZE_24,
  }),
};

export const entitiesMultiSelectListStyles = {
  wrapper: (theme: DesignSystemTheme): StyleObject => ({
    background: theme.colors.bgBase,
    zIndex: 4,
  }),
  inputWrapper: (theme: DesignSystemTheme): StyleObject => ({
    padding: `0px ${theme.spacing.spacingSm} 0 ${theme.spacing.spacingMd}`,
    borderBottomColor: theme.colors.neutralWashed,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
  }),
  bodyStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '84px',
    boxSizing: 'content-box',
    rowGap: theme.spacing.spacingMd,
    padding: theme.spacing.spacingMd,
    overflowY: 'auto',
  }),
  noResultsWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '84px',
  } as StyleObject,
  separatorStyle: (theme: DesignSystemTheme): StyleObject => ({
    width: '100%',
    height: '1px',
    backgroundColor: theme.colors.neutralSubtle,
    margin: `${theme.spacing.spacingXs} 0`,
  }),
  optionsListHeaderStyle: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: `${theme.spacing.spacingMd} ${theme.spacing.spacingMd} ${theme.spacing.spacing2xs} ${theme.spacing.spacingMd} `,
  }),
  optionsListHeaderLabelStyle: (_theme: DesignSystemTheme): StyleObject => ({
    textTransform: 'uppercase',
    letterSpacing: '1px',
  }),
  listOptionStyle: (_theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  }),
};

/** Overrides styles for the TitleLayout component */
export const titleLayoutStyledOverrides = (): TitleLayoutProps['overrides'] => ({
  TitleContainer: {
    overflow: 'auto',
    whiteSpace: 'unset',
    wordBreak: 'break-all',
  },
});
