import {
  ModalBody as BaseModalBody,
  ModalFooter as BaseModalFooter,
  ModalHeader as BaseModalHeader,
} from 'baseui/modal';

import { themedWithStyle } from '../../themes';

import { commonModalHeader, commonSpacing } from './common';

export const SectionedModalHeader = themedWithStyle<
  typeof BaseModalHeader,
  { $paddingVertical?: string }
>(BaseModalHeader, ({ $theme, $paddingVertical }) => ({
  ...commonModalHeader($theme),
  padding: $paddingVertical ?? $theme.spacing.spacingMd,
  margin: 0,
  lineHeight: $theme.spacing.spacing3xl,
  borderBottomColor: $theme.colors.neutralSubtle,
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
}));

// Uses :last-of-type for the "passive" variant (no buttons)
export const SectionedModalBody = themedWithStyle(BaseModalBody, ({ $theme }) => ({
  ...$theme.typography.ParagraphSmall,
  margin: $theme.spacing.spacingMd,
  minHeight: '80px',
  ':last-of-type': {
    paddingBottom: '40px',
  },
}));

export const SectionedModalFooter = themedWithStyle(BaseModalFooter, ({ $theme }) => ({
  ...commonSpacing,
  display: 'grid',
  gridAutoFlow: 'column',
  justifyContent: 'end',
  columnGap: $theme.spacing.spacingMd,
  padding: $theme.spacing.spacingMd,
  borderTopColor: $theme.colors.neutralSubtle,
  borderTopWidth: '1px',
  borderTopStyle: 'solid',
}));
