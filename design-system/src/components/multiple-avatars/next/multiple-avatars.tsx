import { useMemo } from 'react';

import { Avatar } from '@components/avatar/next';
import { Tag } from '@components/tag/next';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';
import { useResponsiveProps } from '@utils/use-responsive-props.util';

import {
  DEFAULT_APPEARANCE,
  DEFAULT_KIND,
  DEFAULT_MAX_COUNT,
  DEFAULT_SIZES,
  EMPTY_AVATARS,
  multipleAvatarsKindMap,
} from './multiple-avatars.constants';
import { multipleAvatarsTagKindMap } from './multiple-avatars.interfaces';
import { getMultipleAvatarsAvatarOverrides } from './multiple-avatars.overrides';
import {
  MultipleAvatarItemWrapper,
  MultipleAvatarsRoot,
  MultipleAvatarsTooltipAnchor,
} from './multiple-avatars.styles';
import {
  getCounterText,
  getCounterTooltipContent,
  getOverlapPxFromSize,
  shouldRenderImage,
} from './multiple-avatars.utils';

import type { MultipleAvatarsProps, MultipleAvatarsSizes } from './multiple-avatars.interfaces';
import type { TagSize } from '@components/tag/next/tag.interfaces';

/**
 * MultipleAvatars
 *
 * - Renders a row of avatars with overlap derived from `sizes` (24px: 4px, 32px: 8px)
 * - Shows a +N counter when items exceed maxCount
 * - Supports click callbacks for avatars and the counter
 * - Responsive: forces 24px below 1024px, uses `sizes` on 1024px and up
 * - Special rule: when there are 4 or more avatars, only the first avatar is shown and the rest go into the counter
 */
export const MultipleAvatars = ({
  avatars,
  dataTestId = 'multiple-avatars',
  sizes = DEFAULT_SIZES,
  kind = DEFAULT_KIND,
  appearance = DEFAULT_APPEARANCE,
  maxCount = DEFAULT_MAX_COUNT,
  onAvatarClick,
  onCounterClick,
  disabled = false,
}: MultipleAvatarsProps): JSX.Element | null => {
  const { t } = useTranslation();
  const safeAvatars = avatars ?? EMPTY_AVATARS;

  const safeMaxCount = Math.max(0, maxCount);

  const responsiveSize = useResponsiveProps<MultipleAvatarsSizes>(
    {
      extralarge: sizes,
      large: sizes,
      medium: '24px',
      small: '24px',
      extrasmall: '24px',
    },
    '24px',
  );

  const overlapPx = getOverlapPxFromSize(responsiveSize ?? '24px');

  const { visibleAvatars, overflowAvatars, overflowCount } = useMemo(() => {
    const shouldCollapseToSingle = safeAvatars.length >= 4;
    const visibleCount =
      safeMaxCount === 0
        ? 0
        : shouldCollapseToSingle
          ? 1
          : Math.min(safeMaxCount, safeAvatars.length);

    const visible = visibleCount === 0 ? [] : safeAvatars.slice(0, visibleCount);
    const overflow = visibleCount === 0 ? safeAvatars : safeAvatars.slice(visibleCount);

    return {
      visibleAvatars: visible,
      overflowAvatars: overflow,
      overflowCount: Math.max(0, overflow.length),
    };
  }, [safeAvatars, safeMaxCount]);

  const avatarKind = multipleAvatarsKindMap[kind];
  const isAvatarClickable = Boolean(onAvatarClick) && !disabled;
  const isCounterClickable = Boolean(onCounterClick) && !disabled;

  const avatarBorderOverrides = useMemo(() => getMultipleAvatarsAvatarOverrides(), []);

  /**
   * Creates a stable onClick handler for a given avatar id.
   */
  const handleAvatarClick = (id: string) => (): void => {
    onAvatarClick?.(id);
  };

  if (safeAvatars.length === 0) return null;

  const counterText = getCounterText(overflowCount);

  const counterTagSize: TagSize = responsiveSize === '32px' ? 'lg' : 'md';
  const counterTooltipContent = getCounterTooltipContent(overflowAvatars, t);
  const counterTagKind = multipleAvatarsTagKindMap[kind];

  const counterComponent = overflowCount ? (
    <StatefulTooltipNext
      content={counterTooltipContent}
      showArrow
      placement="bottom"
      zIndex={99}
    >
      <MultipleAvatarsTooltipAnchor
        type="button"
        $isClickable={isCounterClickable && !disabled}
        aria-label={counterTooltipContent}
        aria-disabled={disabled || !isCounterClickable || undefined}
        tabIndex={isCounterClickable && !disabled ? 0 : -1}
        onClick={isCounterClickable && !disabled ? onCounterClick : undefined}
      >
        <Tag
          data-testid={`${dataTestId}--counter`}
          kind={counterTagKind}
          variant="light"
          size={counterTagSize}
          disabled={disabled}
        >
          {counterText}
        </Tag>
      </MultipleAvatarsTooltipAnchor>
    </StatefulTooltipNext>
  ) : null;

  return (
    <MultipleAvatarsRoot data-testid={dataTestId}>
      {visibleAvatars.map((item, index) => {
        const useImage = shouldRenderImage({ item, appearance, kind });
        const src = useImage ? item.src : undefined;

        const itemZIndex = visibleAvatars.length - index + 1;

        return (
          <MultipleAvatarItemWrapper
            key={item.id}
            $overlapPx={overlapPx}
            $zIndex={itemZIndex}
            $isFirst={index === 0}
          >
            <Avatar
              dataTestId={`${dataTestId}--avatar-${item.id}`}
              name={item.name}
              initials={item.initials}
              src={src}
              size={responsiveSize}
              kind={avatarKind}
              appearance={useImage ? 'image' : 'filled'}
              clickable={isAvatarClickable}
              onClick={isAvatarClickable ? handleAvatarClick(item.id) : undefined}
              disabled={disabled}
              overrides={avatarBorderOverrides}
              zIndex={99}
            />
          </MultipleAvatarItemWrapper>
        );
      })}

      {overflowCount ? (
        <MultipleAvatarItemWrapper
          $overlapPx={overlapPx}
          $zIndex={0}
          $isFirst={visibleAvatars.length === 0}
        >
          {counterComponent}
        </MultipleAvatarItemWrapper>
      ) : null}
    </MultipleAvatarsRoot>
  );
};
