import { type ReactElement, type ReactNode, useMemo } from 'react';

import { Radio } from 'baseui/radio';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { BorderedRadioContent } from './bordered-radio-content';
import { getOverrides } from './bordered-radio.styles';

import type { RadioProps } from 'baseui/radio';

export interface BorderedRadioProps extends Omit<RadioProps, 'labelPlacement' | 'align'> {
  'data-testid'?: string;
  title?: string;
  /** ReactNode displayed above the description.*/
  icon: ReactNode;
}

/**
 * Radio button with squared borders
 */
export const BorderedRadio = ({
  'data-testid': dataTestId,
  icon,
  title,
  description,
  overrides,
  value,
  ...rest
}: BorderedRadioProps): ReactElement => {
  const _dataTestId = dataTestId ?? `radio-${value}`;

  const mergedOverrides: BorderedRadioProps['overrides'] = useMemo(() => {
    const baseOverrides: BorderedRadioProps['overrides'] = getOverrides({
      'data-testid': _dataTestId,
    });

    return mergeOverridesDeep(baseOverrides, overrides);
  }, [_dataTestId, overrides]);

  return (
    <Radio
      {...rest}
      value={value}
      overrides={mergedOverrides}
      labelPlacement="bottom"
    >
      <BorderedRadioContent
        description={description}
        icon={icon}
        title={title}
      />
    </Radio>
  );
};
