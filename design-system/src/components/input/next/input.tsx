import type { ReactElement } from 'react';
import { useCallback, useMemo } from 'react';

import { mergeOverrides } from 'baseui';
import { Input as BaseWebInput } from 'baseui/input';

import { useSyncedRef } from '@hooks/use-synced-ref.hook';
import { noop } from '@utils/noop';

import { withIsHovered } from '../../hocs/with-is-hovered';

import { useCompoundEndEnhancer } from './hooks/use-compound-end-enhancer.hook';
import { useCompoundStartEnhancer } from './hooks/use-compound-start-enhancer.hook';
import { DEFAULT_KIND, DEFAULT_SIZE } from './input.constants';
import { getInputBaseOverrides } from './input.overrides';

import type { InputProps } from './input.interfaces';
import type { InputOverrides } from 'baseui/input';

/**
 * Input field component for forms.
 * Can be customized by the "kind" property. Possible kinds are "white" and "gray", "gray" is the default value.
 * Its styled components; StyledRoot and StyledInput are used to construct other components as "Select", "Textarea" and "DatePicker".
 */
const InputComponent = ({
  'data-testid': dataTestId,
  kind = DEFAULT_KIND,
  id,
  name,
  endEnhancer,
  positive,
  error,
  size = DEFAULT_SIZE,
  overrides,
  isHovered,
  clearable = true,
  value,
  showCopyContentButton = false,
  onClear = noop,
  isLoading,
  inputRef,
  startEnhancer,
  disabled,
  leading,
  prefixText = '',
  width,
  onChange,
  ...rest
}: InputProps): ReactElement => {
  const internalInputRef = useSyncedRef({ externalRef: inputRef });

  /**
   * Clears the input value and focuses the input field again.
   */
  const handleClear = useCallback(() => {
    onClear();

    if (onChange) {
      const syntheticEvent = {
        target: { value: '' },
        currentTarget: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>;

      onChange(syntheticEvent);
    }

    if (internalInputRef.current) {
      internalInputRef.current.focus();
    }
  }, [onClear, onChange, internalInputRef]);

  const { getStartEnhancerElement, showStartEnhancer } = useCompoundStartEnhancer({
    leading,
    prefixText,
    size,
    startEnhancer,
  });

  const { showEndEnhancer, getEndEnhancerElement } = useCompoundEndEnhancer({
    'data-testid': dataTestId,
    endEnhancer,
    value,
    clearable,
    disabled,
    showCopyContentButton,
    onClear: handleClear,
    error,
    isLoading,
    positive,
  });

  const mergedOverrides: InputOverrides = useMemo(
    () =>
      mergeOverrides(
        getInputBaseOverrides({
          kind,
          size,
          isHovered,
          dataTestId,
          withStartEnhancer: showStartEnhancer,
          width,
        }),
        overrides,
      ),
    [kind, size, isHovered, dataTestId, showStartEnhancer, width, overrides],
  );

  return (
    <BaseWebInput
      {...rest}
      onChange={onChange}
      disabled={disabled}
      inputRef={internalInputRef}
      value={value}
      positive={positive}
      error={error}
      id={id}
      name={name || id}
      // Hides the clear icon by default so it can be displayed within the end enhancer instead.
      clearable={false}
      startEnhancer={showStartEnhancer ? getStartEnhancerElement : undefined}
      endEnhancer={showEndEnhancer ? getEndEnhancerElement : undefined}
      overrides={mergedOverrides}
    />
  );
};

/**
 * Input field component  with is hovered prop injected.
 * Can be customized by the "kind" property. Possible kinds are "white" and "gray", "gray" is the default value.
 * Its styled components; StyledRoot and StyledInput are used to construct other components as "Select", "Textarea" and "DatePicker".
 */
export const Input = withIsHovered(InputComponent);
