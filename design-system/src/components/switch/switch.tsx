import type { ReactElement, ReactNode, Ref } from 'react';

import { Checkbox, LABEL_PLACEMENT, STYLE_TYPE } from 'baseui/checkbox';

import { useSyncedRef } from '@hooks/use-synced-ref.hook';

import { Spinner } from '../spinner/spinner';
import { Text } from '../text';
import { useCss } from '../utils/hooks/use-css';

import { checkboxOverridesStyles, styles } from './switch.styles';

import type { LabelPlacement } from 'baseui/checkbox';

export type LabelPlacementType = LabelPlacement;

export { LABEL_PLACEMENT, STYLE_TYPE };

export type SwitchProps = {
  'data-testid'?: string;
  children?: ReactNode;
  name?: string;
  /** Used to get a ref to the input element. Useful for focusing on validation errors */
  inputRef?: Ref<HTMLInputElement>;
  /** Sub label text such as subtitle under children node */
  description?: string;
  /** If Disabled, can not interact with user. Defaults to `false` */
  disabled?: boolean;
  /** If is loading, will show a spinner and cannot interact with user. Defaults to `false` */
  loading?: boolean;
  /** Where to put the Switch Label. Defaults to `right` */
  labelPlacement?: LabelPlacementType;
  /** Value of the Switch */
  checked?: boolean;
  /** Handle change callback when Switch is toggled. Works as a controlled input */
  onChange?(newValue: boolean): void;
};

/**
 * A Styled Switch, working as a controlled input with every required UI state
 */
export const Switch = ({
  'data-testid': dataTestId = 'design-system-switch',
  name,
  inputRef: externalInputRef,
  description,
  checked = false,
  children,
  loading = false,
  disabled = false,
  labelPlacement = LABEL_PLACEMENT['right'],
  onChange,
}: SwitchProps): ReactElement => {
  const { theme, containerStyles } = useCss(styles);
  const inputRef = useSyncedRef<HTMLInputElement>({ externalRef: externalInputRef });

  /** Handler function for the onChange event on the Checkbox component  */
  const handleChange = (): void => onChange?.(!checked);

  return (
    <div
      data-testid={dataTestId}
      className={containerStyles}
    >
      {loading && (
        <div data-testid={`${dataTestId}--spinner`}>
          <Spinner size="sm" />
        </div>
      )}

      <Checkbox
        checked={checked}
        disabled={disabled || loading}
        name={name}
        inputRef={inputRef}
        labelPlacement={labelPlacement}
        checkmarkType={STYLE_TYPE.toggle_round}
        overrides={checkboxOverridesStyles(theme, checked, disabled)}
        onChange={handleChange}
      >
        {children}
        {description !== undefined && (
          <Text
            variant="bodySmall"
            margin={0}
            color="neutralDepressed"
          >
            {description}
          </Text>
        )}
      </Checkbox>
    </div>
  );
};
