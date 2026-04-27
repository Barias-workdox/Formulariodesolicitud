import type { ReactElement } from 'react';

import { TruncatedText } from '@components/truncated-text';

import type { TruncatedTextProps } from '@components/truncated-text';

export type StyledListItemContentTextProps = TruncatedTextProps;

/** Text content used in the Styled List Item */
export const StyledListItemContentText = ({
  children,
  tooltipProps,
  textProps,
}: StyledListItemContentTextProps): ReactElement => (
  <TruncatedText
    textProps={{
      color: 'inherit',
      margin: 0,
      ...textProps,
    }}
    tooltipProps={tooltipProps}
  >
    {children}
  </TruncatedText>
);
