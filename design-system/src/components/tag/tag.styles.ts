import { Text } from '../text';

import type { ColorGroup, SupportedKind, SupportedVariant } from './tag.interface';
import type { TagOverrides } from 'baseui/tag';
import type { StyleObject } from 'styletron-react';

export const tagStyles = {
  iconContainerStyles: (): StyleObject => ({
    marginRight: '6px',
    display: 'inline-flex',
    maxWidth: '12px',
    maxHeight: '12px',
    alignItems: 'center',
  }),
};

/**
 * The default colors for the background and text
 */
const defaultColors: ColorGroup = {
  background: 'brandSubdued',
  fontColor: 'base',
};

/**
 * The background and font color setup for each variant and kind based in the theme colors.
 */
const allColorsByVariant: Record<SupportedVariant, Record<SupportedKind, ColorGroup>> = {
  overlay: {
    primary: {
      background: 'brandSubtle',
      fontColor: 'brandMedium',
    },
    accent: {
      background: 'peaceSubtle',
      fontColor: 'peaceMedium',
    },
    positive: {
      background: 'positiveSubtle',
      fontColor: 'positiveMedium',
    },
    negative: {
      background: 'sweetSubtle',
      fontColor: 'sweetMedium',
    },
    warning: {
      background: 'warningSubtle',
      fontColor: 'warningMedium',
    },
    neutral: {
      background: 'neutralWashed',
      fontColor: 'neutralMedium',
    },
  },
  solid: {
    primary: {
      background: 'brandSubtle',
      fontColor: 'brandMedium',
    },
    accent: {
      background: 'peaceSubtle',
      fontColor: 'peaceMedium',
    },
    positive: {
      background: 'positiveSubtle',
      fontColor: 'positiveMedium',
    },
    negative: {
      background: 'sweetSubtle',
      fontColor: 'sweetMedium',
    },
    warning: {
      background: 'warningSubtle',
      fontColor: 'warningMedium',
    },
    neutral: {
      background: 'neutralWashed',
      fontColor: 'neutralMedium',
    },
  },
};

/** Reusable utility to get the selected color by variant and kind */
export const getColors = (variant: SupportedVariant, kind: SupportedKind): ColorGroup =>
  allColorsByVariant[variant][kind] ?? defaultColors;

/** Styled tag overrides */
export const tagOverrides = ({
  dataTestId,
  $variant,
  $kind,
}: {
  $variant: SupportedVariant;
  $kind: SupportedKind;
  dataTestId: string;
}): TagOverrides => {
  const { fontColor, background } = getColors($variant, $kind);

  return {
    Root: {
      style: ({ $theme }) => ({
        margin: 0,
        borderRadius: '24px',
        backgroundColor: $theme.colors[background],
      }),
      props: {
        'data-testid': dataTestId,
      },
    },
    Text: {
      props: {
        variant: 'microCopy',
        margin: 0,
      },
      component: Text,
      style: ({ $theme }) => ({
        display: 'flex',
        alignItems: 'center',
        color: $theme.colors[fontColor],
        maxWidth: '100%',
        textWrap: 'nowrap',
      }),
    },
    Action: {
      style: ({ $theme }) => ({
        color: $theme.colors[fontColor],
      }),
    },
  };
};
