/**
 * Available variants for Switch component text sizing
 * - 14px: title 14px, description 12px
 * - 16px: title 16px, description 14px
 */
export type SwitchVariant = '14px' | '16px';

/**
 * Props interface for the SwitchTitle component
 */
export type SwitchTitleProps = {
  /** Title text displayed next to the switch */
  title?: string;
  /** Text size variant - affects title font size */
  variant?: SwitchVariant;
  /** If disabled, title text will be styled accordingly */
  disabled?: boolean;
};

/**
 * Props interface for the SwitchDescription component
 */
export type SwitchDescriptionProps = {
  /** Sub label text displayed as subtitle under the title */
  description?: string;
  /** Text size variant - affects description font size */
  variant?: SwitchVariant;
  /** If disabled, description text will be styled accordingly */
  disabled?: boolean;
  /** ID of element that describes the switch */
  ariaDescribedBy?: string;
};

/**
 * Props interface for the Switch component
 */
export type SwitchProps = {
  /** Test identifier for the switch component */
  dataTestId?: string;
  /** Title text displayed next to the switch */
  title?: string;
  /** Sub label text displayed as subtitle under the title */
  description?: string;
  /** If disabled, user cannot interact with the switch */
  disabled?: boolean;
  /** Position of the switch label relative to the toggle */
  labelPlacement?: 'right' | 'top';
  /** Current state of the switch (on/off) */
  checked?: boolean;
  /** Text size variant - affects title and description font sizes */
  variant?: SwitchVariant;
  /** Accessible label for the switch when no title is provided */
  ariaLabel?: string;
  /** ID of element that labels the switch (alternative to ariaLabel) */
  ariaLabelledBy?: string;
  /** ID of element that describes the switch */
  ariaDescribedBy?: string;
  /** Callback function triggered when the switch state changes */
  onChange?(newValue: boolean): void;
};

/**
 * Parameters interface for the switchOverrides function
 */
export interface SwitchOverridesParams {
  /** Test identifier for the switch component */
  dataTestId?: string;
  /** Current state of the switch (on/off) */
  checked: boolean;
  /** If disabled, user cannot interact with the switch */
  disabled: boolean;
  /** Position of the switch label relative to the toggle */
  labelPlacement?: 'right' | 'top';
  /** ID of element that describes the switch */
  ariaDescribedBy?: string;
  /** ID of element that labels the switch (alternative to ariaLabel) */
  ariaLabelledBy?: string;
  /** Accessible label for the switch when no title is provided */
  ariaLabel?: string;
  /** Callback function triggered when the switch state changes */
  handleToggle(): void;
}
