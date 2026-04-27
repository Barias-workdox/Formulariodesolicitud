import { commonTitleLayoutTextStyles } from '../../layouts';

import type { DesignSystemTheme } from '../../../themes';
import type { TitleLayoutProps } from '../../layouts';
import type { StyleObject } from 'styletron-react';

export const styles = {
  wrapper: (): StyleObject => ({ overflowY: 'auto', overflowX: 'hidden' }),
  lastUpdateWrapperStyles: (theme: DesignSystemTheme): StyleObject => ({
    padding: `${theme.spacing.spacingMd} ${theme.spacing.spacingXl}`,
  }),
};

/** Last update title and i18n date time */
export const lastUpdateTitleLayoutOverridesStyles = (
  theme: DesignSystemTheme,
): TitleLayoutProps['overrides'] => ({
  Root: {
    rowGap: '1px',
    columnGap: theme.spacing.spacingMd,
  },
  StartEnhancer: {
    width: '24px',
    height: '24px',
  },
  TitleContainer: {
    ...commonTitleLayoutTextStyles(theme),
    ...theme.typography.ParagraphSmall,
    fontWeight: 500,
    color: theme.colors.neutral,
  },
  SubtitleContainer: {
    ...commonTitleLayoutTextStyles(theme),
    ...theme.typography.ParagraphXSmall,
  },
});
