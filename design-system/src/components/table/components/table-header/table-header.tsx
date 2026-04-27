import type { PropsWithChildren, ReactElement } from 'react';

import { ParagraphXSmall } from 'baseui/typography';

import { themedUseStyletron } from '../../../../themes';

import { tableHeaderCaptionStyles } from './table-header.styles';

/** Styled Header Cell for Workflows Table */
export const TableHeader = ({ children }: PropsWithChildren<object>): ReactElement => {
  const [, theme] = themedUseStyletron();

  return <ParagraphXSmall $style={tableHeaderCaptionStyles(theme)}>{children}</ParagraphXSmall>;
};
