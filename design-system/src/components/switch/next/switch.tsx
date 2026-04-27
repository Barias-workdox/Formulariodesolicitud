import { type ReactElement, useMemo, useCallback } from 'react';

import { Checkbox, LABEL_PLACEMENT, STYLE_TYPE } from 'baseui/checkbox';

import { SwitchDescription } from './components/switch-description';
import { SwitchTitle } from './components/switch-title';
import { switchOverrides } from './switch.styles';

import type { SwitchProps } from './switch.interface';

/**
 * A styled Switch component that functions as a controlled input with all required UI states.
 *
 * Features:
 * - Fully accessible with ARIA attributes and keyboard support
 * - Supports both title and description text
 * - Customizable label placement
 * - Disabled state handling
 * - Theme-aware styling
 * - Two text size variants: 14px (14px/12px) and 16px (16px/14px)
 * - Comprehensive accessibility support with ariaLabel, ariaLabelledBy, and ariaDescribedBy
 *
 * Accessibility:
 * - Provide an accessible name via title, ariaLabel, or ariaLabelledBy
 * - Use ariaDescribedBy to reference additional descriptive content
 * - Component automatically handles proper ARIA attributes for screen readers
 */
export const Switch = ({
  dataTestId = 'switch',
  description,
  checked = false,
  title,
  disabled = false,
  labelPlacement = LABEL_PLACEMENT['right'],
  variant = '16px',
  ariaLabel,
  ariaLabelledBy = 'switch-label',
  ariaDescribedBy = 'switch-description',
  onChange,
}: SwitchProps): ReactElement => {
  const accessibleName = ariaLabel || title;

  /**
   * Handles the switch toggle by calling the onChange callback with the opposite of current checked state
   */
  const handleToggle = useCallback((): void => {
    if (!disabled) {
      onChange?.(!checked);
    }
  }, [checked, disabled, onChange]);

  // Memoize switch overrides to avoid recalculation on every render
  const checkboxOverrides = useMemo(
    () =>
      switchOverrides({
        checked,
        disabled,
        handleToggle,
        ariaDescribedBy,
        ariaLabelledBy,
        ariaLabel: accessibleName,
        dataTestId,
        labelPlacement,
      }),
    [
      checked,
      disabled,
      handleToggle,
      ariaDescribedBy,
      ariaLabelledBy,
      accessibleName,
      dataTestId,
      labelPlacement,
    ],
  );

  return (
    <Checkbox
      data-testid={dataTestId}
      checked={checked}
      disabled={disabled}
      labelPlacement={labelPlacement}
      checkmarkType={STYLE_TYPE.toggle_round}
      overrides={checkboxOverrides}
      onChange={handleToggle}
    >
      {title && (
        <SwitchTitle
          title={title}
          variant={variant}
          disabled={disabled}
        />
      )}
      {description && (
        <SwitchDescription
          description={description}
          variant={variant}
          disabled={disabled}
          ariaDescribedBy={ariaDescribedBy}
        />
      )}
    </Checkbox>
  );
};
