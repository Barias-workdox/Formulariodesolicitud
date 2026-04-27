import { getKindBackgroundColor } from '@components/input/next';

import type { SharedProps, Size } from '@components/input/next';
import type { DesignSystemTheme, StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/** Gets style properties by input size */
export const getSizeProperties = (size: Size, theme: DesignSystemTheme): StyleObject => {
  const compact: StyleObject = {
    ...theme.typography.ParagraphSmall,
    paddingTop: theme.spacing.spacing2xs,
    paddingBottom: theme.spacing.spacing2xs,
    paddingLeft: theme.spacing.spacingXs,
    paddingRight: theme.spacing.spacingXs,
  };

  const defaultS: StyleObject = {
    ...theme.typography.ParagraphMedium,
    paddingTop: theme.spacing.spacingXs,
    paddingBottom: theme.spacing.spacingXs,
    paddingLeft: theme.spacing.spacingMd,
    paddingRight: theme.spacing.spacingMd,
  };

  return (
    {
      compact,
      '32px': compact,
      default: defaultS,
      '44px': defaultS,
    }[size] ?? defaultS
  );
};

/** Textarea input override styles */
export const textareaInputStyles = ({
  $theme,
  $size,
  $kind,
  $resize,
}: StyleOverrideProps<SharedProps>): StyleObject => ({
  ...getSizeProperties($size, $theme),
  color: $theme.colors.neutralStrong,
  backgroundColor: getKindBackgroundColor({ $kind, $theme }),
  // This values are important to override the default textarea styles
  // when the resize prop is set to 'both', 'horizontal' or 'vertical'
  width: !$resize ? '100% !important' : undefined,
  height: !$resize ? 'auto !important' : undefined,
  ':disabled': {
    backgroundColor: getKindBackgroundColor({ $kind, $theme }),
  },
});
