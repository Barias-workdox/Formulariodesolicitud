import { useMemo } from 'react';
import type { ReactElement } from 'react';

import { Radio as BaseRadio } from 'baseui/radio';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { radioOverrides } from './radio-group.styles';

import type { WithTestId } from '@interfaces/common.interfaces';
import type { RadioProps as BaseRadioProps } from 'baseui/radio';

type RadioProps = WithTestId<BaseRadioProps>;

/**
 * A custom Radio component that extends the functionality of the BaseUI Radio component.
 * It allows for deep merging of style overrides and supports a test ID prop for testing purposes.
 */
export const Radio = ({ 'data-testid': testId, overrides, ...rest }: RadioProps): ReactElement => {
  const mergedOverrides = useMemo(
    () => mergeOverridesDeep(radioOverrides(testId), overrides),
    [overrides, testId],
  );

  return (
    <BaseRadio
      {...rest}
      overrides={mergedOverrides}
    />
  );
};
