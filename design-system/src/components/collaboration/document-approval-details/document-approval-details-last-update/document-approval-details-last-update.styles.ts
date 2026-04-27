import { commonTitleLayoutTextStyles } from '../../../layouts';

import type { DesignSystemTheme } from '../../../../themes';
import type { TitleLayoutProps } from '../../../layouts';
import type { StyleObject } from 'styletron-standard';

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

/** Last update wrapper styles */
export const styles = {
  lastUpdateWrapperStyles: (theme: DesignSystemTheme): StyleObject => ({
    padding: `0 ${theme.spacing.spacingXl} ${theme.spacing.spacingMd}`,
  }),
};
