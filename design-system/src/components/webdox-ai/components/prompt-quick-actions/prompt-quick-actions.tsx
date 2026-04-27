import { useEffect, useRef, useState } from 'react';

import { ArrowsVertical } from '@carbon/icons-react';

import { StatelessPopover } from '@components/popover';
import { Text } from '@components/text';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';
import { useQuickActions } from '@hooks/use-quick-actions';

import {
  StyledFooter,
  StyledFooterItem,
  StyledHeader,
  StyledHeaderCount,
  StyledHeaderTitle,
  StyledQuickActionsItem,
  StyledQuickActionsList,
  StyledQuickActionsMenu,
  StyledTooltip,
} from './styled-components/styled-prompt-quick-actions';

import type { CustomPrompt } from '@components/webdox-ai';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

// Define the type for each quick action option

export interface QuickActionOption {
  id: number;
  title?: string;
  content: string;
}

// Props interface for PromptQuickActions component
export interface PromptQuickActionsProps extends WithTestId, WithZIndex {
  isOpen: boolean;
  filterValue: string;
  allOptions: CustomPrompt[];
  setIsOpen(isOpen: boolean): void;
  handleChange(val: string): void;
}

/**
 * PromptQuickActions
 *
 * Renders a floating quick actions menu positioned near the caret.
 * Supports keyboard navigation (ArrowUp, ArrowDown) and selection (Enter).
 * Handles outside clicks to close the menu.
 */
export const PromptQuickActions = ({
  dataTestId = 'prompt-quick-actions',
  isOpen,
  filterValue,
  allOptions,
  zIndex,
  handleChange,
  setIsOpen,
}: PromptQuickActionsProps): React.ReactElement => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const { t } = useTranslation();

  const { options, setFilterValue, handleSelect } = useQuickActions({
    allOptions,
    setIsOpen,
    onSelect: handleChange,
  });

  /**
   * Effect to handle keyboard navigation.
   */
  useEffect(() => {
    /**
     * Keyboard navigation handler.
     * Sets up global keyboard event listeners to navigate and select options.
     * - ArrowDown: moves the active selection down (loops to start).
     * - ArrowUp: moves the active selection up (loops to end).
     * - Enter: selects the currently active option and triggers onSelect.
     *
     */
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (!options.length) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setActiveIndex((prev) => (prev + 1) % options.length);
          break;
        case 'ArrowUp':
          event.preventDefault();
          setActiveIndex((prev) => (prev - 1 + options.length) % options.length);
          break;
        case 'Enter':
          event.preventDefault();
          event.stopPropagation();
          handleSelect(options[activeIndex]);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return (): void => window.removeEventListener('keydown', handleKeyDown);
  }, [options, activeIndex, handleSelect]);

  /**
   * Keep the refs array length synced with the options array length.
   * This avoids referencing non-existent elements when options change.
   */
  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, options.length);
  }, [options.length]);

  /**
   * Scroll the currently active option into view smoothly.
   * Triggered whenever activeIndex changes.
   */
  useEffect(() => {
    const el = itemRefs.current[activeIndex];

    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeIndex]);

  /**
   * Update the filter value when the filter value changes.
   */
  useEffect(() => {
    setFilterValue(filterValue);
  }, [filterValue, setFilterValue]);

  return (
    <StatelessPopover
      isOpen={isOpen}
      onClickOutside={() => setIsOpen(false)}
      onEsc={() => setIsOpen(false)}
      placement="topLeft"
      zIndex={zIndex}
      content={
        <StyledQuickActionsMenu ref={containerRef}>
          <StyledHeader>
            <StyledHeaderTitle>{t('webdoxAI.chat.customPrompts.myPrompts')}</StyledHeaderTitle>
            <StyledHeaderCount>{`(${options.length})`}</StyledHeaderCount>
          </StyledHeader>
          <StyledQuickActionsList>
            {options.map((option, index) => {
              const { title, content } = option;
              const hasTitle = title && title.length > 0;

              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <StatefulTooltipNext
                    content={() => (
                      <StyledTooltip>
                        {hasTitle && <strong> {title} </strong>}
                        <span> {`"${content || ''}"`} </span>
                      </StyledTooltip>
                    )}
                    placement="auto"
                    showArrow
                    ignoreBoundary
                    zIndex={zIndex}
                  >
                    <StyledQuickActionsItem
                      data-testid={`${dataTestId}__item-${index}`}
                      onClick={() => handleSelect(option)}
                      $isActive={index === activeIndex}
                    >
                      {hasTitle && (
                        <Text
                          variant="body"
                          color="neutral"
                          whiteSpace="nowrap"
                          overflow="hidden"
                          textOverflow="ellipsis"
                          fontWeight="bold"
                          margin={0}
                        >
                          {title}
                        </Text>
                      )}
                      <Text
                        variant={hasTitle ? 'bodySmall' : 'body'}
                        color="neutralSubdued"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        margin={0}
                      >
                        {`"${content || ''}"`}
                      </Text>
                    </StyledQuickActionsItem>
                  </StatefulTooltipNext>
                </div>
              );
            })}
          </StyledQuickActionsList>
          <StyledFooter>
            <StyledFooterItem>
              <strong>{`"${t('webdoxAI.chat.quickActions.confirmationKey')}"`} </strong>
              {t('webdoxAI.chat.quickActions.footerConfirmationMessage')}
            </StyledFooterItem>
            <StyledFooterItem>
              <ArrowsVertical />
              {t('webdoxAI.chat.quickActions.footerNavigateMessage')}
            </StyledFooterItem>
          </StyledFooter>
        </StyledQuickActionsMenu>
      }
    >
      <span style={{ position: 'absolute', top: 0, left: 0 }} />
    </StatelessPopover>
  );
};
