import type { TooltipNextSize } from './tooltip-next.interfaces';
import type { ZIndexType } from '@interfaces/common.interfaces';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { Font } from 'baseui/themes';
import type { PopoverOverrides } from 'baseui/tooltip';
import type { StyleObject } from 'styletron-react';

type GetOverridesParams = {
  size: TooltipNextSize;
  zIndex?: ZIndexType;
  hasPointerEventsEnabled?: boolean;
};

/**
 * Generates custom style overrides for the StatefulTooltip component based on the provided size.
 *
 * This function allows customization of the tooltip's arrow, body, and inner content styles
 * by applying theme-based styles and size-specific paddings and typography.
 */
export const getOverrides = ({
  size = 'sm',
  zIndex,
  hasPointerEventsEnabled,
}: GetOverridesParams): PopoverOverrides => ({
  Arrow: {
    style: ({ $theme }: StyleOverrideProps) => ({
      backgroundColor: $theme.colors.neutral,
    }),
  },
  Body: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => {
      const PADDING_MAP: Record<TooltipNextSize, string> = {
        sm: $theme.spacing.spacingSm,
        md: $theme.spacing.spacingMd,
      };
      const padding = PADDING_MAP[size];

      return {
        zIndex,
        borderRadius: '4px',
        padding,
        backgroundColor: $theme.colors.neutral,
        pointerEvents: hasPointerEventsEnabled ? 'all' : 'none',
      };
    },
  },
  Inner: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => {
      const FONT_MAP: Record<TooltipNextSize, Font> = {
        sm: $theme.typography.ParagraphXSmall,
        md: $theme.typography.ParagraphSmall,
      };
      const fontStyles = FONT_MAP[size];

      return {
        padding: 0,
        textTransform: 'unset',
        background: 'transparent',
        color: $theme.colors.textBase,
        maxWidth: '280px',
        overflowWrap: 'break-word',
        ...fontStyles,
      };
    },
  },
});
