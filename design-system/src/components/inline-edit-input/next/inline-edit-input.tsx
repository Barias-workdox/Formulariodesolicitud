import { useCallback, useMemo, useRef, useState } from 'react';

import { useClickAway } from 'react-use';

import { Input } from '@components/input/next';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useSyncedRef } from '@hooks/use-synced-ref.hook';
import { noop } from '@utils/noop';

import { InputControls } from './components/input-controls';
import { InlineEditInputMode } from './inline-edit-input.interfaces';
import { getOverrides } from './inline-edit-input.overrides';

import type { InputKind, InputProps } from '@components/input/next';
import type { WithZIndex } from '@interfaces/common.interfaces';

export type InlineEditInputProps = InputProps &
  WithZIndex & {
    mode?: InlineEditInputMode;
    onModeChange?(mode: InlineEditInputMode): void;
  };

/**
 * InlineEditInput component for editing text inline.
 * It allows switching between caption and input modes.
 * In caption mode, it displays the text and an edit button.
 * In input mode, it allows the user to edit the text.
 */
export const InlineEditInput = ({
  'data-testid': dataTestId,
  disabled,
  inputRef,
  kind,
  mode,
  onChange = noop,
  onModeChange = noop,
  overrides,
  readOnly,
  value,
  zIndex,
  ...rest
}: InlineEditInputProps): JSX.Element => {
  const [internalValue, setInternalValue] = useState<InputProps['value']>(value);

  const internalInputRef = useSyncedRef({ externalRef: inputRef });
  const rootRef = useRef<HTMLDivElement>();

  const isCaptionMode = mode === InlineEditInputMode.CAPTION;
  const inputKind: InputKind = isCaptionMode ? kind : 'white';
  const hasNoChanges = internalValue === value;

  const mergedOverrides = useMemo(() => {
    const baseOverrides = getOverrides({ rootRef });

    return mergeOverridesDeep(baseOverrides, overrides);
  }, [overrides]);

  useClickAway(internalInputRef, (event) => {
    const isInsideParent = rootRef?.current && rootRef.current.contains(event.target as Node);
    const shouldOnBlur = hasNoChanges && !isInsideParent;

    if (shouldOnBlur) {
      onModeChange(InlineEditInputMode.CAPTION);
    }
  });

  /**
   * Handles the change to input mode.
   * It sets the internal value to the current value, allowing the user to edit the text
   */
  const handleEdit = useCallback((): void => {
    if (!isCaptionMode || readOnly) return;

    setInternalValue(value);
    onModeChange(InlineEditInputMode.INPUT);

    if (internalInputRef.current) {
      const input = internalInputRef.current;

      input.focus();

      const { length } = input.value;

      input.setSelectionRange(length, length);
    }
  }, [internalInputRef, isCaptionMode, onModeChange, readOnly, value]);

  /**
   * Handles the edit button click event.
   * It changes the mode to INPUT, allowing the user to edit the text.
   */
  const handleCancel = useCallback((): void => {
    setInternalValue(value);
    onModeChange(InlineEditInputMode.CAPTION);
    internalInputRef.current?.blur();
  }, [internalInputRef, onModeChange, value]);

  /**
   * Handles the edit button click event.
   * It changes the mode to INPUT, allowing the user to edit the text.
   */
  const handleSubmit = useCallback((): void => {
    if (hasNoChanges) {
      return;
    }

    const syntheticEvent = {
      target: { value: internalValue },
      currentTarget: { value: internalValue },
    } as React.ChangeEvent<HTMLInputElement>;

    onModeChange(InlineEditInputMode.CAPTION);
    onChange(syntheticEvent);
    internalInputRef.current?.blur();
  }, [hasNoChanges, internalInputRef, internalValue, onChange, onModeChange]);

  /**
   * Handles the change event of the input.
   * It updates the internal value of the input.
   */
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;

    setInternalValue(newValue);
  }, []);

  /**
   * Handles the keydown event.
   */
  const handleOnKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>): void => {
      switch (event.key) {
        case 'Escape':
          handleCancel();
          break;
        case 'Enter':
          event.preventDefault();
          handleSubmit();
          break;
        default:
          break;
      }
    },
    [handleCancel, handleSubmit],
  );

  return (
    <Input
      {...rest}
      data-testid={dataTestId}
      disabled={disabled}
      readOnly={readOnly}
      kind={inputKind}
      inputRef={internalInputRef}
      overrides={mergedOverrides}
      onFocus={handleEdit}
      onChange={handleChange}
      clearable={false}
      value={internalValue}
      onKeyDown={handleOnKeyDown}
      endEnhancer={
        <InputControls
          data-testid={`${dataTestId}__controls`}
          disabled={disabled}
          submitDisabled={hasNoChanges}
          readOnly={readOnly}
          mode={mode}
          onEdit={handleEdit}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          zIndex={zIndex}
        />
      }
    />
  );
};
