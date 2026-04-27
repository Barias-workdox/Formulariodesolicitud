import { SectionedModalFooter, SectionedModalHeader, SectionedModalBody } from '@components/modal';
import { themedWithStyle } from '@themes/utilities';

import type { StyleObject } from 'styletron-react';

export const DeleteModalHeader = themedWithStyle<
  typeof SectionedModalHeader,
  { $style?: StyleObject }
>(SectionedModalHeader, ({ $style }) => ({
  border: 'none',
  ...$style,
}));

export const DeleteModalBody = themedWithStyle<typeof SectionedModalBody, { $style?: StyleObject }>(
  SectionedModalBody,
  ({ $style }) => ({
    lineHeight: '200%',
    overflowY: 'auto',
    maxHeight: '60vh',
    ...$style,
  }),
);

export const DeleteModalFooter = themedWithStyle<
  typeof SectionedModalFooter,
  { $style?: StyleObject }
>(SectionedModalFooter, ({ $style }) => ({
  border: 'none',
  ...$style,
}));
