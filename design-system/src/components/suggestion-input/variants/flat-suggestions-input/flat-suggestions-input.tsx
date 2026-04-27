import { type ReactElement, useMemo, useState } from 'react';

import { RecentlyViewed, Search } from '@carbon/icons-react';

import { Input } from '@components/input/next';
import { SuggestionsInputList } from '@components/suggestion-input/components/suggestions-input-list';
import { useSuggestionsInput } from '@components/suggestion-input/hooks/use-suggestions-input';
import { normalizeValue } from '@components/suggestion-input/suggestions-input.utils';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { includesStringNormalized } from '@components/utils/strings/text.utils';

import { StyledWrapper, inputOverrides } from './flat-suggestions-input.styles';

import type { InputType } from '../../suggestion-input.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { StyleObject } from 'styletron-react';

type FlatSuggestionsInputProps = WithTestId & {
  value: string;
  suggestions: string[];
  width?: StyleObject['width'];
  type?: InputType;
  autoFocus?: boolean;
  onChange(value: string): void;
};

/**
 * Renders a flat suggestion input without a popover.
 * Displays an input field and a list of suggestions inline.
 */
export const FlatSuggestionsInput = ({
  dataTestId = 'flat-suggestions-input',
  value,
  suggestions,
  width,
  type = 'text',
  autoFocus = false,
  onChange,
}: FlatSuggestionsInputProps): ReactElement => {
  const [localValue, setLocalValue] = useState(value);
  const { t } = useTranslation();
  const { theme } = useCss();

  /**
   * Updates both the local and external (parent) state when the user types or selects a suggestion.
   */
  const handleFilterChange = (value: string = ''): void => {
    onChange(value);
    setLocalValue(value);
  };

  /**
   * Handles changes to an input element, normalizing the value according to its type.
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    const normalizedValue = normalizeValue(value, type);

    setLocalValue(normalizedValue);
  };

  const { listRef, highlightedIndex, onKeyDown } = useSuggestionsInput({
    value: localValue,
    items: suggestions,
    handleChange: handleFilterChange,
  });

  const filteredSuggestions = useMemo(
    () => suggestions.filter((suggestion) => includesStringNormalized(suggestion, localValue)),
    [suggestions, localValue],
  );

  return (
    <StyledWrapper $width={width}>
      <Input
        data-testid={`${dataTestId}__input`}
        clearable
        autoFocus={autoFocus}
        startEnhancer={<Search />}
        placeholder={t('general.search')}
        value={localValue}
        kind="white"
        overrides={inputOverrides}
        onClear={() => handleFilterChange('')}
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
      />
      {filteredSuggestions.length > 0 && (
        <SuggestionsInputList
          dataTestId={dataTestId}
          topEnhancer={
            <Text
              variant="bodySmall"
              color="neutralSubdued"
              margin={`${theme.spacing.spacingXs} ${theme.spacing.spacingMd}`}
              $style={{
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing.spacingXs,
                whiteSpace: 'nowrap',
              }}
            >
              <RecentlyViewed />
              {t('suggestionsInput.latestSearches')}
            </Text>
          }
          listRef={listRef}
          items={filteredSuggestions}
          highlightedIndex={highlightedIndex}
          handleChange={handleFilterChange}
        />
      )}
    </StyledWrapper>
  );
};
