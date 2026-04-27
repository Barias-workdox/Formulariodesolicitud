import {
  ModalBody as BaseModalBody,
  ModalFooter as BaseModalFooter,
  ModalHeader as BaseModalHeader,
} from 'baseui/modal';

import { themedStyled, themedWithStyle } from '../../themes';

import { commonModalHeader, commonSpacing } from './common';

export const RegularModalHeader = themedWithStyle(BaseModalHeader, ({ $theme }) => ({
  ...commonModalHeader($theme),
  ...commonSpacing,
  paddingBottom: $theme.spacing.spacingXs,
  paddingTop: '50px',
}));

export const RegularModalLabel = themedStyled('span', ({ $theme }) => ({
  ...$theme.typography.LabelXSmall,
  display: 'block',
  marginBottom: '5px',
  color: $theme.colors.neutralSubdued,
}));

// Uses :last-of-type for the "passive" variant (no buttons)
export const RegularModalBody = themedWithStyle(BaseModalBody, ({ $theme }) => ({
  ...$theme.typography.ParagraphSmall,
  ...commonSpacing,
  paddingBottom: $theme.spacing.spacingXs,
  paddingTop: $theme.spacing.spacingXs,
  ':last-of-type': {
    paddingBottom: '40px',
  },
}));

export const RegularModalFooter = themedWithStyle(BaseModalFooter, () => ({
  ...commonSpacing,
  display: 'grid',
  gridAutoFlow: 'column',
  justifyContent: 'end',
  columnGap: '10px',
  paddingBottom: '20px',
  paddingTop: '10px',
}));
