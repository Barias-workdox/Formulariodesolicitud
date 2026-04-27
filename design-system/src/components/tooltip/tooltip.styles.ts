import type { StatefulTooltipProps } from './stateful-tooltip';
import type { DesignSystemTheme, StyleOverrideProps } from '../../themes/theme.interfaces';
import type { PopoverOverrides } from 'baseui/popover';
import type { StyleObject } from 'styletron-standard';

/** Caption styles that should be used by every tooltip caption */
export const tooltipCaptionStyles = (theme: DesignSystemTheme): StyleObject => ({
  color: theme.colors.textBase,
  textTransform: 'none',
  marginTop: 0,
  marginBottom: 0,
  letterSpacing: 0,
  wordBreak: 'break-word',
});

/** Overrides for the tooltip stateful popover */
export const tooltipCaptionOverridesStyles = (
  maxWidth?: string,
  innerStyles?: StyleObject,
  zIndex?: StatefulTooltipProps['zIndex'],
): PopoverOverrides => ({
  Body: {
    style: {
      zIndex,
    },
  },
  Inner: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      maxWidth: maxWidth ?? '60vw',
      backgroundColor: $theme.colors.neutral,
      ...innerStyles,
    }),
  },
});
