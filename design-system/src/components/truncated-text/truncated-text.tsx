import { useRef } from 'react';
import type { ReactNode } from 'react';

import { Text } from '@components/text';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useElementOverflow } from '@components/utils/hooks/use-element-overflow';
import { themedStyled } from '@themes/utilities';

import type { TextProps } from '@components/text';
import type { StatefulTooltipNextProps } from '@components/tooltip-next';
import type { StyleObject } from 'styletron-react';

export interface TruncatedTextProps {
  /** The text that will be rendered as the text children. Can be a plain string, a trans node or anything */
  children: ReactNode;
  /** All text section props */
  textProps: Omit<TextProps, 'children'>;
  /** All tooltip section props */
  tooltipProps: Omit<StatefulTooltipNextProps, 'children'>;
  maxLines?: number;
  className?: string;
  zIndex?: number;
}

const StyledWrapper = themedStyled('span', { overflow: 'hidden' });

const truncatedTextStyles = {
  textContainerStyles: (maxLines: number): StyleObject => ({
    display: '-webkit-box',
    WebkitLineClamp: maxLines,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-all',
    whiteSpace: 'pre-wrap',
  }),
};

/**
 * A repetitive pattern containing a tooltip with a truncated text inside. The text has the
 * ellipsis style and the full text should render in the tooltip content
 */
export const TruncatedText = ({
  tooltipProps: { content, ...restTooltip },
  textProps: { $style, ...restText },
  maxLines = 1,
  zIndex,
  children,
  className,
}: TruncatedTextProps): JSX.Element => {
  const textRef = useRef();
  const { isOverflowing } = useElementOverflow({ ref: textRef, maxLines });

  return (
    <StatefulTooltipNext
      {...restTooltip}
      content={isOverflowing ? content : undefined}
      ignoreBoundary
      zIndex={zIndex}
    >
      <StyledWrapper className={className}>
        <Text
          {...restText}
          ref={textRef}
          $style={{ ...truncatedTextStyles.textContainerStyles(maxLines), ...$style }}
        >
          {children}
        </Text>
      </StyledWrapper>
    </StatefulTooltipNext>
  );
};
