import { forwardRef, useState } from 'react';
import type { ChangeEvent, ReactElement, RefObject } from 'react';

import { Input } from '../input';
import { doesBrowserSupportsColorType, formatHexColor, isValidHexColor } from '../utils/color';
import { useCss } from '../utils/hooks/use-css';

import { styles } from './color-picker.styles';

import type { InputProps } from '../input';

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
      kind = 'gray',
      name,
      placeholder,
      onChange,
    },
    ref,
  ): ReactElement {
    const [currentColor, setCurrentColor] = useState(value);
    const isValid = isValidHexColor(value);
    const { containerStyles, colorPickerStyles } = useCss(styles, { color: value, isValid });

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
          aria-label={name}
          name={name}
          value={currentColor}
          placeholder={placeholder}
          type="text"
          kind={kind}
          onChange={handleOnChange}
          maxLength={7}
        />
        {doesBrowserSupportsColorType() && (
          <input
            data-testid={`${dataTestId}--color-input`}
            name={name}
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
