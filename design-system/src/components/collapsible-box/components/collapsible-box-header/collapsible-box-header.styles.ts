import { themedStyled } from '@themes/utilities';

import type { StyleOverride } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-standard';

export const CollapsibleBoxHeaderContainer = themedStyled<
  'div',
  { $expanded: boolean; $headerOverrides: StyleOverride<object> }
>('div', ({ $theme, $expanded, $headerOverrides }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingMd,
  padding: $theme.spacing.spacingXs,
  justifyContent: 'space-between',
  borderBottomWidth: $expanded === false ? '0' : '1px',
  ...$headerOverrides,
}));

export const SectionContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingMd,
}));

export const CollapsibleBoxIconContainer = themedStyled('div', () => ({
  display: 'flex',
  alignItems: 'center',
}));

/** Default styles for the title */
export const textStyles = (headerOverrides: StyleOverride<object>): StyleObject => ({
  flex: 1,
  fontWeight: 500,
  wordBreak: 'break-word',
  ...headerOverrides,
});
