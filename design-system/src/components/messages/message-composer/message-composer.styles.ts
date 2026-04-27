import { themedStyled } from '@themes/utilities';

import type { StyleProps as StylePropsBase } from './message-composer.interfaces';
import type { DesignSystemTheme, StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-standard';

type StyleProps = StyleOverrideProps & StylePropsBase;

export const styles = {
  userMentionStyles: (theme: DesignSystemTheme): StyleObject => ({
    color: theme.colors.neutral,
    fontWeight: 500,
  }),
};

export const StyledRoot = themedStyled('div', ({ $theme, $isEditing }: StyleProps) => ({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  padding: $isEditing ? 'none' : `${$theme.spacing.spacingMd} ${$theme.spacing.spacingXl}`,
}));
