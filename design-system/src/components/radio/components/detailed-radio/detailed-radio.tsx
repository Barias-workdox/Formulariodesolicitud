import { type ReactElement, type ReactNode, useMemo } from 'react';

import { Radio } from 'baseui/radio';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { DetailedRadioContent } from './components/detailed-radio-content';
import { detailedRadioOverrides } from './detailed-radio.styles';

import type { RadioOverrides, RadioProps } from 'baseui/radio';

export type DetailedRadioProps = Omit<RadioProps, 'description'> & {
  /**
   * The test ID for the radio button.
   */
  'data-testid': string;
  /**
   * The description of the radio button
   */
  description: ReactNode;
  /**
   * The icon component to display alongside the radio button.
   */
  icon?: ReactNode;
};

/**
 * Simple Styled Radio with reusable styles, it will be used in the same way as a normal radio
 */
export const DetailedRadio = ({
  'data-testid': dataTestId,
  children,
  description,
  icon,
  overrides,
  value,
  ...rest
}: DetailedRadioProps): ReactElement => {
  const _dataTestId = dataTestId ?? `radio-${value}`;

  const mergedOverrides: RadioOverrides = useMemo(() => {
    const baseOverrides: RadioOverrides = detailedRadioOverrides({
      'data-testid': _dataTestId,
    });

    return mergeOverridesDeep(baseOverrides, overrides);
  }, [_dataTestId, overrides]);

  return (
    <Radio
      {...rest}
      value={value}
      labelPlacement="right"
      overrides={mergedOverrides}
    >
      <DetailedRadioContent
        data-testid={_dataTestId}
        description={description}
        icon={icon}
      >
        {children}
      </DetailedRadioContent>
    </Radio>
  );
};
