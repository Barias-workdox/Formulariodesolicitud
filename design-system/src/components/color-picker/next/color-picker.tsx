import { forwardRef, useState } from 'react';
import type { ChangeEvent, ReactElement, RefObject } from 'react';

import { Input } from '@components/input/next';
import {
  doesBrowserSupportsColorType,
  formatHexColor,
  isValidHexColor,
} from '@components/utils/color';
import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './color-picker.styles';

import type { InputProps } from '@components/input/next';

export interface ColorPickerProps extends Omit<InputProps, 'type'> {
  value?: string;
}

/**
 * A component that allows users to input a color value with hex format.
 */
export const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
  function ColorPickerComponent(
    {
      'data-testid': dataTestId = 'design-system-color-picker',
      value = '#FFFFFF',
      onChange,
      ...props
    },
    ref,
  ): ReactElement {
    const [currentColor, setCurrentColor] = useState(value);
    const isValid = isValidHexColor(value);
    const { containerStyles, colorPickerStyles } = useCss(styles, {
      color: value,
      isValid,
      size: props.size,
    });

    /**
     * Updates the value of colorHex.
     */
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
      const {
        target: { value: updatedValue },
      } = e;
      const updatedCurrentColor = formatHexColor(updatedValue);

      setCurrentColor(updatedCurrentColor);
      onChange(e);
    };

    return (
      <div className={containerStyles}>
        <Input
          inputRef={ref as RefObject<HTMLInputElement>}
          data-testid={`${dataTestId}--text-input`}
          aria-label={props.name}
          value={currentColor}
          type="text"
          onChange={handleOnChange}
          maxLength={7}
          {...props}
        />
        {doesBrowserSupportsColorType() && (
          <input
            data-testid={`${dataTestId}--color-input`}
            name={props.name}
            className={colorPickerStyles}
            type="color"
            value={value}
            onChange={handleOnChange}
          />
        )}
      </div>
    );
  },
);
