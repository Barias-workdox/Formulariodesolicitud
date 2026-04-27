import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactElement } from 'react';

import { Button } from '@components/button';
import { StatelessPopover } from '@components/popover/stateless-popover';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useRefCallback } from '@components/utils/hooks/use-ref-callback';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { FilterEndEnhancer } from './components/filter-end-enhancer';
import { FilterTag } from './components/filter-tag';
import { FilterValueText } from './components/filter-value-text';
import {
  FILTER_MAX_WIDTH,
  FILTER_MIN_WIDTH,
  FILTER_TOTAL_WIDTH_WITHOUT_TEXT,
} from './filter.constants';
import { getOverrides } from './filter.styles';

import type { FilterProps } from './filter.interfaces';
import type { KindType } from '@components/button';

/**
 * A customizable filter component that displays a button with optional tags and a popover for additional content.
 * The filter supports single and multi-selection modes, and its appearance can be customized via overrides.
 */
export const Filter = ({
  'data-testid': testId = 'filter',
  size = '32px',
  kind = 'filled',
  tooltipText,
  label,
  content,
  value = [],
  disabled,
  disabledReason,
  startEnhancer,
  overrides,
  hasInteractions,
  initialIsOpen,
  minWidth = FILTER_MIN_WIDTH,
  maxWidth = FILTER_MAX_WIDTH,
  popoverProps: { minWidth: $popoverMinWidth } = {},
  onClear,
}: FilterProps): ReactElement => {
  const isActive = hasInteractions || value.filter(Boolean).length > 0;
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [ref, setRef] = useRefCallback<HTMLButtonElement>();

  const mergedOverrides = useMemo(
    () =>
      mergeOverridesDeep(
        overrides,
        getOverrides({
          $isActive: isActive,
          $isOpen: isOpen,
          $width: ref.current?.offsetWidth,
          $minWidth: minWidth,
          $maxWidth: maxWidth,
          $popoverMinWidth,
        }),
      ),
    [isActive, isOpen, ref, overrides, minWidth, maxWidth, $popoverMinWidth],
  );

  const PopoverComponent = getOverride(mergedOverrides.Popover) || StatelessPopover;
  const ButtonComponent = getOverride(mergedOverrides.Button) || Button;
  const ValueTextComponent = getOverride(mergedOverrides.ValueText) || FilterValueText;
  const TagComponent = getOverride(mergedOverrides.Tag) || FilterTag;

  const multi = value.filter(({ id }) => Boolean(id)).length > 1;

  /**
   * Handles closing the popover by updating the `isOpen` state to `false`.
   * This function is used as a callback for events that should close the popover,
   * such as clicking outside the popover or pressing the escape key.
   */
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  /**
   * Computes the content to be displayed inside the popover.
   * If the `content` prop is a function (`ContentRenderProp`), it invokes the function
   * with an object containing the `close` method to allow the content to close the popover.
   * Otherwise, it directly uses the provided `React.ReactNode` as the content.
   */
  const popoverContent = useMemo(
    () => (typeof content === 'function' ? content({ close: handleClose }) : content),
    [content, handleClose],
  );

  // When the filter is initially open, scroll its button into view smoothly.
  // This ensures that the filter component is visible to the user on mount if it should start open.
  useEffect(() => {
    if (initialIsOpen) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [ref, initialIsOpen]);

  const textMinWidth = minWidth
    ? `calc(${minWidth} - ${FILTER_TOTAL_WIDTH_WITHOUT_TEXT})`
    : undefined;
  const textMaxWidth = maxWidth
    ? `calc(${maxWidth} - ${FILTER_TOTAL_WIDTH_WITHOUT_TEXT})`
    : undefined;

  return (
    <PopoverComponent
      showArrow
      isOpen={isOpen}
      content={popoverContent}
      autoFocus={false}
      onClickOutside={handleClose}
      onEsc={handleClose}
      {...getOverrideProps(mergedOverrides.Popover)}
    >
      <StatefulTooltipNext
        content={disabled ? disabledReason : ''}
        placement="bottom"
        ignoreBoundary
        showArrow
      >
        <div>
          <ButtonComponent
            ref={setRef}
            data-testid={testId}
            size={size}
            kind={kind as KindType}
            startEnhancer={startEnhancer}
            disabled={disabled}
            onClick={() => setIsOpen(true)}
            endEnhancer={
              onClear && (
                <FilterEndEnhancer
                  data-testid={`${testId}__end-enhancer`}
                  isActive={isActive}
                  disabled={disabled}
                  onClear={onClear}
                />
              )
            }
            {...getOverrideProps(mergedOverrides.Button)}
          >
            <ValueTextComponent
              multi={multi}
              value={value}
              tooltipText={tooltipText}
              label={label}
              minWidth={textMinWidth}
              maxWidth={textMaxWidth}
              {...getOverrideProps(mergedOverrides.ValueText)}
            />
            {multi && (
              <TagComponent
                data-testid={`${testId}--tag`}
                tooltipText={tooltipText}
                {...getOverrideProps(mergedOverrides.Tag)}
              >
                {value.length}
              </TagComponent>
            )}
          </ButtonComponent>
        </div>
      </StatefulTooltipNext>
    </PopoverComponent>
  );
};
