import { themedStyled } from '@themes/utilities';

import type { CollapsibleBoxProps } from '@components/collapsible-box';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/** Custom collapsible box overrides */
export const collapsibleBoxOverrides = (
  theme: DesignSystemTheme,
): CollapsibleBoxProps['overrides'] => ({
  Content: { style: { backgroundColor: theme.colors.neutralWashed } as StyleObject },
  Title: { style: { fontSize: theme.typography.ParagraphMedium.fontSize } },
});

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  display: 'grid',
  gap: $theme.spacing.spacingXs,
}));
