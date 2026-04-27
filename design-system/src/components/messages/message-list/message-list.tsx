import { useEffect, useRef, useState } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useIntersection } from 'react-use';

import { getCustomScrollBarStyles } from '@themes/custom-scroll-bar';

import { Spinner } from '../../spinner';
import { useCss } from '../../utils/hooks/use-css';
import { MessageEmptyState } from '../message-empty-state';

import { EmptyMessagesWrapper } from './message-list.styles';

import type { DesignSystemTheme } from '../../../themes';
import type { MessagesProps } from '../messages';
import type { StyleObject } from 'styletron-standard';

export interface MessageListOverrides {
  emptyMessageComponent?: ReactNode;
}

export interface MessageListProps extends Pick<
  MessagesProps,
  'direction' | 'isPaginated' | 'onPageEnd' | 'showBorder'
> {
  children: ReactNode[];
  isLoading: boolean;
  isSubmitting?: boolean;
  isAnimated?: boolean;
  emptyMessage?: ReactNode;
  overrides?: MessageListOverrides;
  setIsAnimated?(isAnimated: boolean): void;
}

type StylesParams = {
  direction: MessageListProps['direction'];
  showBorder: MessageListProps['showBorder'];
};

const styles = {
  listContainerStyles: (
    theme: DesignSystemTheme,
    { direction, showBorder }: StylesParams,
  ): StyleObject => ({
    display: 'flex',
    flex: 1,
    flexDirection: direction === 'reverse' ? 'column-reverse' : 'column',
    overflowY: 'auto',
    contentVisibility: 'auto',
    ...getCustomScrollBarStyles(theme),
    ...(showBorder && { borderBottom: `1px solid ${theme.colors.divisionLine}` }),
  }),
  listStyles: (_: DesignSystemTheme, { direction }: StylesParams): StyleObject => ({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: direction === 'reverse' ? 'flex-end' : 'flex-start',
  }),
  spinnerWrapperStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${theme.spacing.spacing3xl} ${theme.spacing.spacingXl}`,
  }),
};

/**
 * The message list container.
 * It's styled as a flex with column direction.
 * For every new message triggers a scroll animation
 * to move the scroll position to show the most recent message in the list.
 */
export const MessageList = ({
  isLoading,
  isSubmitting = false,
  isPaginated = false,
  setIsAnimated = (): void => {
    return;
  },
  isAnimated = true,
  children,
  direction = 'normal',
  showBorder = true,
  onPageEnd = (): void => {
    return;
  },
  emptyMessage,
  overrides = {},
}: MessageListProps): ReactElement => {
  const listRef = useRef<HTMLDivElement>(null);
  const [firstRender, setFirstRender] = useState(true);
  const { listStyles, listContainerStyles, spinnerWrapperStyles } = useCss(styles, {
    direction,
    showBorder,
  });
  const endOfPageRef = useRef(null);
  const endOfPageIntersection = useIntersection(endOfPageRef, {});

  const [parent] = useAutoAnimate();

  const { emptyMessageComponent } = overrides;

  /**
   * Listen for message array changes to animate the scroll position.
   * If it is the first render then will move to the most recent message in the list without animation.
   */
  useEffect(() => {
    if (!listRef?.current) {
      return;
    }

    if (firstRender) {
      setFirstRender(false);
    } else if (!isPaginated || isAnimated) {
      listRef.current.scrollTo({ left: 0, top: listRef.current.scrollHeight, behavior: 'smooth' });
      setIsAnimated(false);
    }
    // TODO: Evaluate if we can add the missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children?.length, firstRender, isAnimated, isPaginated]);

  /**
   * If paginated, evaluates whether the intersection observer is intersecting, that is, it is inside the browser window,
   * if it is intersecting then will trigger "onPageEnd".
   */
  useEffect(() => {
    if (isPaginated && !isLoading && endOfPageIntersection?.isIntersecting) {
      onPageEnd();
    }
    // TODO: Evaluate if we can add the missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endOfPageIntersection]);

  return (
    <div
      ref={listRef}
      className={listContainerStyles}
    >
      {children.length === 0 ? (
        emptyMessageComponent !== undefined ? (
          <EmptyMessagesWrapper>{emptyMessageComponent}</EmptyMessagesWrapper>
        ) : (
          <MessageEmptyState emptyMessage={emptyMessage} />
        )
      ) : (
        <div
          ref={parent}
          className={listStyles}
        >
          {children}
        </div>
      )}

      {isLoading && isPaginated && !isSubmitting && (
        <div
          className={spinnerWrapperStyles}
          data-testid="spinner"
        >
          <Spinner />
        </div>
      )}
      {isPaginated && <div ref={endOfPageRef} />}
    </div>
  );
};
