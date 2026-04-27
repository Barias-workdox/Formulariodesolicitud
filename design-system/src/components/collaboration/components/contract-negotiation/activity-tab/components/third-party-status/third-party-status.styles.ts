import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

const TEXT_MAX_WIDTH = '250px';

export const styles = {
  textStyles: (theme: DesignSystemTheme): StyleObject => ({
    maxWidth: TEXT_MAX_WIDTH,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    paddingLeft: theme.spacing.spacingMd,
  }),
};
