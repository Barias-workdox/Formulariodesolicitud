import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Close } from '@carbon/icons-react';

import { Text } from '@components/text';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { TruncatedText } from '@components/truncated-text';
import { useTranslation } from '@components/utils';
import { ariaKeyDownHandler } from '@components/utils/accessibility.utils';
import { useObserver } from '@components/utils/hooks/use-observer.hook';
import { getStringFromReactNode } from '@utils/react.utils';

import {
  DEFAULT_SHAPE,
  DEFAULT_SIZE,
  ELLIPSIS_THRESHOLD,
  TOOLTIP_THRESHOLD,
} from './tag.constants';
import {
  StyledActionButton,
  StyledIconWrapper,
  StyledTag,
  StyledTagEllipsisText,
} from './tag.styled-components';

import type { TagProps } from './tag.interfaces';

/**
 * Tag component renders a tag with a background color and font color based on the variant and kind
 */
export const Tag = ({
  'data-testid': dataTestId = 'design-system-tag',
  kind,
  variant,
  shape = DEFAULT_SHAPE,
  disabled = false,
  size = DEFAULT_SIZE,
  icon: Icon,
  showAction = false,
  actionIcon: ActionIcon = Close,
  zIndex = 1,
  children,
  $style,
  onClick,
}: TagProps): JSX.Element => {
  const { t } = useTranslation();

  const hasOnClick = typeof onClick !== 'undefined';

  // Tag is clickable when showAction is false (action button handles clicks when showAction is true)
  const clickable = !showAction && hasOnClick;

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  // Extract text content from children for aria-label
  const tagLabel = useMemo(() => getStringFromReactNode(children) || '', [children]);

  // Generate aria-label for the action button
  const actionButtonAriaLabel = useMemo(
    () => (tagLabel ? `${t('general.delete')} ${tagLabel}` : t('general.delete')),
    [tagLabel, t],
  );

  const handleResize = useCallback((entries: ResizeObserverEntry[]): void => {
    const entry = entries?.[0];
    const width = entry?.contentRect?.width;
    if (typeof width === 'number') {
      setContainerWidth(width);
    }
  }, []);

  useObserver({
    element: containerRef as unknown as React.RefObject<HTMLElement>,
    callback: handleResize,
  });

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const showForcedTooltip = containerWidth > TOOLTIP_THRESHOLD;
  const forceEllipsis = containerWidth > ELLIPSIS_THRESHOLD;

  /**
   * Decides how to render the Tag's text content based on container width:
   * - ELLIPSIS_THRESHOLD: enforce ellipsis and always show tooltip
   * - TOOLTIP_THRESHOLD: always show tooltip (no truncation)
   * - otherwise: overflow-only tooltip via TruncatedText
   */
  const renderContent = (): JSX.Element | null => {
    if (!children) return null;

    if (forceEllipsis) {
      return (
        <StatefulTooltipNext
          content={children}
          ignoreBoundary
          zIndex={zIndex}
          showArrow
        >
          <StyledTagEllipsisText
            variant="microCopy"
            margin={0}
            color="inherit"
          >
            {children}
          </StyledTagEllipsisText>
        </StatefulTooltipNext>
      );
    }

    if (showForcedTooltip) {
      return (
        <StatefulTooltipNext
          content={children}
          ignoreBoundary
          zIndex={zIndex}
          showArrow
        >
          <Text
            variant="microCopy"
            margin={0}
            color="inherit"
          >
            {children}
          </Text>
        </StatefulTooltipNext>
      );
    }

    return (
      <TruncatedText
        textProps={{ variant: 'microCopy', margin: 0, color: 'inherit' }}
        tooltipProps={{ content: children, showArrow: true }}
        zIndex={zIndex}
      >
        {children}
      </TruncatedText>
    );
  };

  return (
    <StyledTag
      ref={containerRef}
      data-testid={dataTestId}
      $variant={variant}
      $kind={kind}
      $shape={shape}
      $size={size}
      $disabled={disabled}
      $clickable={clickable}
      $style={$style}
      role={clickable && !disabled ? 'button' : undefined}
      tabIndex={clickable && !disabled ? 0 : undefined}
      aria-disabled={disabled || undefined}
      aria-label={clickable && !disabled && tagLabel ? tagLabel : undefined}
      onClick={clickable && !disabled ? onClick : undefined}
      onKeyDown={clickable && !disabled ? ariaKeyDownHandler(onClick) : undefined}
    >
      {Icon && (
        <StyledIconWrapper
          $kind={kind}
          $variant={variant}
          $disabled={disabled}
        >
          <Icon
            size={12}
            height={12}
          />
        </StyledIconWrapper>
      )}
      {renderContent()}
      {showAction && hasOnClick && (
        <StyledActionButton
          data-testid={`${dataTestId}__action-button`}
          role="button"
          aria-label={actionButtonAriaLabel}
          $kind={kind}
          $variant={variant}
          disabled={disabled}
          onClick={onClick}
        >
          <ActionIcon size={12} />
        </StyledActionButton>
      )}
    </StyledTag>
  );
};
