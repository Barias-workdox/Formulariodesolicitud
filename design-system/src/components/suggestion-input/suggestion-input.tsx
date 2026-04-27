import { useEffect, useState } from 'react';
import type { ChangeEvent, MutableRefObject, ReactElement } from 'react';

import { Search } from '@carbon/icons-react';
import { Popover } from 'baseui/popover';

import { noop } from '../../utils/noop';
import { Input } from '../input/next';
import { useTranslation } from '../utils';

import { SuggestionsInputList } from './components/suggestions-input-list';
import { useSuggestionsInput } from './hooks/use-suggestions-input';
import { defaultMapItemToNode, defaultMapItemToString } from './suggestions-input.utils';

import type { SuggestionInputProps } from './suggestion-input.interfaces';

/**
 * `SuggestionInput` is a component that renders an input field with an attached
 * suggestion list, displayed in a popover. As the user types or navigates via
 * keyboard, they can select from the list of suggestions.
 *
 * @typeParam T - The type of each suggestion item (e.g., string or a custom object).
 */
export function SuggestionInput<T>({
  'data-testid': dataTestId = 'design-system-suggestion-input',
  items,
  value,
  topEnhancer,
  placeholder,
  delayRenderContent = 0,
  onChange = noop,
  onSelect = noop,
  onIsOpenChange = noop,
  mapItemToNode = defaultMapItemToNode,
  mapItemToString = defaultMapItemToString,
  ...restInputProps
}: SuggestionInputProps<T>): ReactElement {
  const { t } = useTranslation();

  /**
   * Controls whether the suggestion popover is open. This state is separate
   * from the final "visible content" state to allow measuring anchor width first.
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /** Controls when we actually render the popover content (allows width to be computed). */
  const [isVisibleContent, setIsVisibleContent] = useState<boolean>(false);

  /** Opens the popover on input focus. */
  const handleFocus = (): void => {
    setIsOpen(true);
  };

  /** Handles the input change event, calling the provided `onChange` callback. */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    onChange(e.target.value);
  };

  /** Handles the selection of an item from the list (or pressing Enter). */
  const handleChange = (item = ''): void => {
    onChange(item);
    onSelect(item);
    setIsOpen(false);
  };

  /** Clears the input value. */
  const handleClear = (): void => {
    handleChange('');
  };

  const { innerRef, listRef, inputRef, highlightedIndex, updateHighlightedIndex, onKeyDown } =
    useSuggestionsInput({
      value,
      isOpen,
      items,
      mapItemToString,
      handleChange,
    });

  /**
   * Because the Popover's internal anchorRef isn't directly accessible,
   * we cast it here to a mutable ref object. This is a known pattern
   * to work around potential TS compilation issues with Popover inner refs.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anchorRef: MutableRefObject<HTMLDivElement> = (innerRef.current as any)?.anchorRef ?? {
    current: null,
  };

  /** Closes the popover on blur or pressing Escape. */
  const handleBlur = (): void => {
    inputRef.current?.blur();
    setIsOpen(false);
  };

  /**
   * Whenever the popover is closed, reset the highlighted index and hide the content.
   * Also invoke the `onIsOpenChange` callback if provided.
   */
  useEffect(() => {
    if (!isOpen) {
      updateHighlightedIndex(-1);
      setIsVisibleContent(false);
    }

    onIsOpenChange(isOpen);
  }, [isOpen, onIsOpenChange, updateHighlightedIndex]);

  /**
   * Delay showing the popover content by `delayRenderContent` milliseconds
   * so that the width calculation can be correct (and to allow transitions).
   */
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsVisibleContent(true);
      }, delayRenderContent);

      return (): void => clearTimeout(timer);
    }
  }, [isOpen, delayRenderContent]);

  return (
    <Popover
      innerRef={innerRef}
      isOpen={isVisibleContent}
      autoFocus={false}
      popoverMargin={0}
      onEsc={handleBlur}
      onClickOutside={handleBlur}
      content={
        <SuggestionsInputList
          dataTestId={dataTestId}
          listRef={listRef}
          width={`${anchorRef.current?.clientWidth || 0}px`}
          items={items}
          topEnhancer={topEnhancer}
          highlightedIndex={highlightedIndex}
          mapItemToNode={mapItemToNode}
          mapItemToString={mapItemToString}
          handleChange={handleChange}
        />
      }
    >
      {/* This wrapper is required for the Popover anchor */}
      <div>
        <Input
          clearable
          data-testid={dataTestId}
          inputRef={inputRef}
          startEnhancer={<Search />}
          placeholder={placeholder ?? t('general.search')}
          value={value}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyDown={onKeyDown}
          onClear={handleClear}
          {...restInputProps}
        />
      </div>
    </Popover>
  );
}
