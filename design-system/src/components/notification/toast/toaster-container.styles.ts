import { PLACEMENT } from './toast.interface';

import type { ToasterOverrides, ToasterSharedStylePropsArg } from './toast.interface';
import type { StyleOverrideProps } from '../../../themes';
import type { StyleObject } from 'styletron-react';

/**
 * Override props for the Toast Container component with responsive support
 * Uses mobile-first approach: base styles for mobile, placement margins for desktop (small breakpoint and up)
 */
export const toastOverrides = ({
  zIndex,
  marginX,
  marginY,
}: {
  zIndex: number;
  marginX?: string | number;
  marginY?: string | number;
}): ToasterOverrides => {
  return {
    Root: {
      style: ({
        $theme,
        $placement,
      }: StyleOverrideProps<ToasterSharedStylePropsArg>): StyleObject => {
        const finalMarginX = marginX ?? $theme.spacing.spacingMd;
        const finalMarginY = marginY ?? $theme.spacing.spacingMd;

        const placementMargins = {
          [PLACEMENT.topLeft]: {
            marginTop: finalMarginY,
            marginLeft: finalMarginX,
          },
          [PLACEMENT.top]: {
            marginTop: finalMarginY,
          },
          [PLACEMENT.topRight]: {
            marginTop: finalMarginY,
            marginRight: finalMarginX,
          },
          [PLACEMENT.bottomRight]: {
            marginBottom: finalMarginY,
            marginRight: finalMarginX,
          },
          [PLACEMENT.bottom]: {
            marginBottom: finalMarginY,
          },
          [PLACEMENT.bottomLeft]: {
            marginBottom: finalMarginY,
            marginLeft: finalMarginX,
          },
        }[$placement] as StyleObject;

        return {
          zIndex,
          ...placementMargins,
        };
      },
    },
  };
};
