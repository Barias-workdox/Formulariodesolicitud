import type { DesignSystemTheme } from '../../../../themes';
import type { StyleObject } from 'styletron-standard';

/** Last update wrapper styles */
export const styles = {
  alertContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    padding: `0 ${theme.spacing.spacingXl} ${theme.spacing.spacingMd}`,
  }),
  alertTitleContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    // Add `1A` at the end to indicate the opacity 10%
    borderBottom: `solid 1px ${theme.colors.warningStrong}1A`,
  }),
};
