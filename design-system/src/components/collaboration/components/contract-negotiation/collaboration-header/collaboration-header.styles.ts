import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

const TEXT_MAX_WIDTH = '332px';

export const styles = {
  headerContainerStyles: (): StyleObject => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  }),
  headerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    gap: theme.spacing.spacingMd,
  }),
  textStyles: (): StyleObject => ({
    maxWidth: TEXT_MAX_WIDTH,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
  actionContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    paddingRight: theme.spacing.spacingXs,
  }),
};
