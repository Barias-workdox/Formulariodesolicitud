import type { DesignSystemTheme } from '../../../../themes';
import type { TitleLayoutProps } from '../../../layouts';
import type { StyleObject } from 'styletron-standard';

/** Select wrapper styles */
export const styles = {
  selectWrapperStyles: (theme: DesignSystemTheme): StyleObject => ({
    padding: theme.spacing.spacingXl,
  }),
};

/** Label styles for a single option */
export const optionLabelStyles = (theme: DesignSystemTheme): TitleLayoutProps['overrides'] => ({
  Root: {
    columnGap: theme.spacing.spacingXs,
  },
  TitleContainer: {
    color: theme.colors.neutralSubdued,
    margin: 0,
    whiteSpace: 'normal',
    fontWeight: 500,
  },
});
