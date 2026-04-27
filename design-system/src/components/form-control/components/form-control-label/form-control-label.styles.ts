import type { DesignSystemTheme } from '../../../../themes';
import type { StyleObject } from 'styletron-react';

type StyleOptions = {
  $theme: DesignSystemTheme;
  labelWithHorizontalPadding?: boolean;
  isCharacterLabel?: boolean;
  hasMargin?: boolean;
};

/** Form control label styles */
export const labelFontStyle = ({
  $theme,
  labelWithHorizontalPadding = false,
  isCharacterLabel = false,
  hasMargin = true,
}: StyleOptions): StyleObject => ({
  color: $theme.colors.neutralStrong,
  paddingTop: $theme.spacing.spacing2xs,
  paddingBottom: $theme.spacing.spacing2xs,
  paddingLeft: labelWithHorizontalPadding ? $theme.spacing.spacing2xs : 0,
  paddingRight: labelWithHorizontalPadding ? $theme.spacing.spacing2xs : 0,
  fontSize: $theme.typography.ParagraphMedium.fontSize,
  fontStyle: 'normal',
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: '22px',
  wordBreak: 'break-word',
  marginTop: 0,
  marginBottom: hasMargin ? $theme.spacing.spacing2xs : 0,
  textAlign: 'left',
  flex: 1,

  ...(isCharacterLabel && {
    flex: 'none',
  }),
});

export const styles = {
  customLabelContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    gap: theme.spacing.spacingXs,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
    margin: 0,
  }),
  infoTooltipWrapperStyles: {
    display: 'flex',
    padding: '6px 0',
  } as StyleObject,
  labelTextContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    gap: theme.spacing.spacing2xs,
    alignItems: 'center',
  }),
};
