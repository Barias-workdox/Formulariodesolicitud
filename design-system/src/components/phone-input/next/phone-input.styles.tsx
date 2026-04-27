import { COMMON_ICON_SIZE_16, COMMON_ICON_SIZE_20 } from '@constants/common.constants';

import type { SharedProps } from '@components/input/next';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/** Flag container styles override */
export const rootStyles = (): StyleObject => ({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
});

/** Flag container styles override */
export const flagContainerStyles = ({ $size }: StyleOverrideProps<SharedProps>): StyleObject => ({
  height: $size === 'sm' ? COMMON_ICON_SIZE_16 : COMMON_ICON_SIZE_20,
  display: 'block',
  margin: 0,
});

/** Dial code styles override */
export const dialCodeStyles = ({
  $theme,
  $disabled,
  $size,
}: StyleOverrideProps<SharedProps>): StyleObject => ({
  ...($size === 'md' ? $theme.typography.ParagraphMedium : $theme.typography.ParagraphSmall),
  color: $disabled ? $theme.colors.neutralDepressed : $theme.colors.neutral,
  margin: 0,
  paddingRight: $theme.spacing.spacingXs,
  lineHeight: 1,
});

/** Country select dropdown list item styles override */
export const countrySelectDropdownListItemStyles = ({
  $theme,
}: StyleOverrideProps<SharedProps>): StyleObject => ({
  height: 'auto',
  borderBottom: `1px solid ${$theme.colors.neutralSubtle}`,
});

/** Country select dropdown name column styles override */
export const countrySelectDropdownNameColumnStyles = ({
  $theme,
  $size,
}: StyleOverrideProps<SharedProps>): StyleObject => ({
  padding: `0 ${$theme.spacing.spacingXs}`,
  color: $theme.colors.neutralSubdued,
  ...($size === 'md' ? $theme.typography.ParagraphMedium : $theme.typography.ParagraphSmall),
});

/** Country select dropdown dial code styles override */
export const countrySelectDropdownDialcodeColumnStyles = ({
  $theme,
  $size,
}: StyleOverrideProps<SharedProps>): StyleObject => ({
  color: $theme.colors.neutralSubdued,
  ...($size === 'md' ? $theme.typography.ParagraphSmall : $theme.typography.ParagraphXSmall),
});

/** Country select dropdown flag column styles override */
export const countrySelectDropdownFlagColumnStyles = (): StyleObject => ({
  paddingLeft: 0,
});
