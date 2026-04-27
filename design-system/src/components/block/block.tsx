import { forwardRef } from 'react';
import type { PropsWithChildren } from 'react';

import { Block as BaseWebBlock } from 'baseui/block';

import { spacing } from '../utils/spacing';

import type { BlockComponentType } from 'baseui/block';

type BlockProps = React.ComponentProps<BlockComponentType<'div'>> &
  PropsWithChildren<{
    backgroundColor?: string;
    bg?: string;
    p?: number;
    px?: number;
    py?: number;
    pl?: number;
    pr?: number;
    pb?: number;
    pt?: number;
    m?: number;
    mx?: number;
    my?: number;
    ml?: number;
    mr?: number;
    mb?: number;
    mt?: number;
    paddingLeft?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingTop?: string;
    marginLeft?: string;
    marginRight?: string;
    marginBottom?: string;
    marginTop?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onMouseDown?(event: any): Promise<void>;
    onDragStart?(): boolean;
    onMouseEnter?(): void;
    onMouseLeave?(): void;
  }>;

export const Block = forwardRef<HTMLDivElement, BlockProps>(function _Block(props, ref) {
  const {
    backgroundColor,
    bg,
    p,
    px,
    py,
    pl,
    pr,
    pt,
    pb,
    m,
    mx,
    my,
    ml,
    mr,
    mt,
    mb,
    paddingLeft,
    paddingRight,
    paddingBottom,
    paddingTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    ...rest
  } = props;

  const _paddingLeft = paddingLeft ?? spacing(pl || px || p || 0);
  const _paddingRight = paddingRight ?? spacing(pr || px || p || 0);
  const _paddingBottom = paddingBottom ?? spacing(pb || py || p || 0);
  const _paddingTop = paddingTop ?? spacing(pt || py || p || 0);
  const _marginLeft = marginLeft ?? spacing(ml || mx || m || 0);
  const _marginRight = marginRight ?? spacing(mr || mx || m || 0);
  const _marginTop = marginTop ?? spacing(mt || my || m || 0);
  const _marginBottom = marginBottom ?? spacing(mb || my || m || 0);

  return (
    <BaseWebBlock
      {...rest}
      ref={ref}
      backgroundColor={backgroundColor || bg}
      paddingLeft={_paddingLeft}
      paddingRight={_paddingRight}
      paddingBottom={_paddingBottom}
      paddingTop={_paddingTop}
      marginLeft={_marginLeft}
      marginRight={_marginRight}
      marginTop={_marginTop}
      marginBottom={_marginBottom}
    >
      {props.children}
    </BaseWebBlock>
  );
});
