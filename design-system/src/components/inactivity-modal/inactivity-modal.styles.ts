import type { DesignSystemTheme } from '../../themes';
import type { StyleObject } from 'styletron-standard';

/**
 * Generates the styles for the modal body wrapper.
 */
const bodyWrapperStyles = (theme: DesignSystemTheme): StyleObject => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing.spacing2xs8,
});

/**
 * Generates the base styles for icon wrappers.
 */
const iconWrapperStyles = (theme: DesignSystemTheme): StyleObject => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  padding: theme.spacing.spacingMd,
});

/**
 * Generates the styles for the warning icon wrapper.
 */
export const warningIconWrapperStyles = (theme: DesignSystemTheme): StyleObject => ({
  ...iconWrapperStyles(theme),
  backgroundColor: theme.colors.warningWashed,
});

/**
 * Generates the styles for the expired icon wrapper.
 */
export const expiredIconWrapperStyles = (theme: DesignSystemTheme): StyleObject => ({
  ...iconWrapperStyles(theme),
  backgroundColor: theme.colors.sweetWashed,
});

export const styles = {
  bodyWrapperStyles,
  warningIconWrapperStyles,
  expiredIconWrapperStyles,
};
