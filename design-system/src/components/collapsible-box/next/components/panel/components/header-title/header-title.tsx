import type { PropsWithChildren, ReactNode } from 'react';

import { isElement } from 'react-is';

import { useCollapsibleBoxContext } from '@components/collapsible-box/next/collapsible-box.context';
import { TruncatedText } from '@components/truncated-text';

import type { Size } from '../../../../collapsible-box.interfaces';
import type { TextProps } from '@components/text';

export type HeaderTitleProps = PropsWithChildren<{
  $expanded?: boolean;
  collapsedTitle?: string | ReactNode;
  size?: Size;
}>;

const textVariantBySize: Record<Size, TextProps['variant']> = {
  small: 'bodySmall',
  large: 'body',
};

/**
 * Component that displays a title for a header, which can dynamically switch between
 * expanded and collapsed states.
 */
export const HeaderTitle = ({
  $expanded,
  children,
  collapsedTitle = children,
}: HeaderTitleProps): JSX.Element => {
  const { size } = useCollapsibleBoxContext();

  const textVariant = textVariantBySize[size];

  const textProps: Omit<TextProps, 'children'> = {
    variant: textVariant,
    color: 'neutralMedium',
    fontWeight: 'bold',
    margin: 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  };

  if ($expanded) {
    if (isElement(collapsedTitle)) {
      return collapsedTitle;
    }

    return (
      <TruncatedText
        textProps={textProps}
        tooltipProps={{
          content: collapsedTitle,
        }}
      >
        {collapsedTitle}
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
