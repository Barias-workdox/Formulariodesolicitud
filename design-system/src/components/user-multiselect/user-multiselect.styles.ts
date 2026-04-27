import type { DesignSystemTheme } from '../../themes';
import type { PopoverOverrides } from 'baseui/popover';
import type { StyleObject } from 'styletron-react';

/** Overrides styles for the basePopover component */
export const popoverStyledOverrides = (width: number): PopoverOverrides => ({
  Body: {
    style: {
      width: `${width}px`,
    },
  },
});

export const userMultiselectStyles = {
  containerWrapper: (
    theme: DesignSystemTheme,
    { disabled }: { disabled?: boolean },
  ): StyleObject => ({
    backgroundColor: theme.colors.neutralBase,
    borderWidth: '1px',
    outline: 'none',
    position: 'relative',
    borderColor: theme.colors.neutralBase,
    borderBottomColor: theme.colors.neutralSubdued,
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
  } as StyleObject,
  valueWrapper: (): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: `10px 0 10px 10px`,
    overflow: 'inherit',
  }),
  counterBadge: (theme: DesignSystemTheme, { disabled }: { disabled?: boolean }): StyleObject => ({
    backgroundColor: theme.colors.brandWashed,
    color: theme.colors.brandMedium,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '1000px',
    padding: `0 ${theme.spacing.spacingXs}`,
    fontSize: '12px',
    fontWeight: 500,
    margin: 0,
    marginRight: theme.spacing.spacing2xs,
    ...(disabled
      ? {
          backgroundColor: theme.colors.neutralSubtle,
          color: theme.colors.neutralDepressed,
        }
      : {}),
  }),
  contentWrapper: {
    flex: 1,
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
  } as StyleObject,
  textValueWrapper: (): StyleObject => ({
    overflow: 'inherit',
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
};
