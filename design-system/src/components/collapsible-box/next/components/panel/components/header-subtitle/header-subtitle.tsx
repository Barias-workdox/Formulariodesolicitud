import type { PropsWithChildren, ReactNode } from 'react';

import { isElement } from 'react-is';

import { TruncatedText } from '@components/truncated-text';

import type { TextProps } from '@components/text';

export type HeaderSubtitleProps = PropsWithChildren<{
  collapsedSubtitle?: string | ReactNode;
  $expanded?: boolean;
}>;

/**
 * Component that displays a subtitle for a header, which can dynamically switch between
 * expanded and collapsed states.
 */
export const HeaderSubtitle = ({
  $expanded,
  children,
  collapsedSubtitle = children,
}: HeaderSubtitleProps): JSX.Element => {
  const textProps: Omit<TextProps, 'children'> = {
    variant: 'microCopy',
    color: 'neutral',
    margin: 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  };

  if ($expanded) {
    if (isElement(collapsedSubtitle)) {
      return collapsedSubtitle;
    }

    return (
      <TruncatedText
        textProps={textProps}
        tooltipProps={{ content: collapsedSubtitle }}
      >
        {collapsedSubtitle}
      </TruncatedText>
    );
  }

  if (isElement(children)) {
    return children;
  }

  return (
    <TruncatedText
      textProps={textProps}
      tooltipProps={{ content: children }}
    >
      {children}
    </TruncatedText>
  );
};
