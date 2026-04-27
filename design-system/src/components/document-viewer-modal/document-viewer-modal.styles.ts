import type { DesignSystemTheme } from '../../themes';
import type { ModalOverrides } from 'baseui/modal';
import type { StyleObject } from 'styletron-react';

/** Overrides styles for the Modal component */
export const modalStyledOverrides = (): ModalOverrides => ({
  Dialog: {
    style: ({ $theme }: { $theme: DesignSystemTheme }): StyleObject => ({
      backgroundColor: $theme.colors.neutralBase,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
    }),
  },
  Close: {
    style: {
      display: 'none',
    },
  },
  DialogContainer: {
    style: (): StyleObject => ({
      overflow: 'hidden',
    }),
  },
});

export const documentViewerModalStyles = {
  modalHeaderStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.spacingMd} ${theme.spacing.spacingXl}`,
    backgroundColor: theme.colors.bgBase,
    margin: 0,
    borderBottom: `1px solid ${theme.colors.neutralWashed}`,
  }),
  documentNameWrapper: { display: 'flex', alignItems: 'center' } as StyleObject,
  documentNameStyles: (theme: DesignSystemTheme): StyleObject => ({
    margin: 0,
    marginLeft: theme.spacing.spacingMd,
  }),
  modalBodyStyles: (theme: DesignSystemTheme): StyleObject => ({
    flex: '1',
    backgroundColor: theme.colors.neutralBase,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
};
