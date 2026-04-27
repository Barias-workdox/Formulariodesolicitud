import { BackgroundIcon } from '@components/background-icon/next';

import { useHeader } from '../header.provider';
import { composeDataTestId } from '../utils/compose-data-test-id';
import { getIconSize } from '../utils/size-maps';

import type { BackgroundIconProps } from '@components/background-icon/next';

/**
 * Header background icon component.
 */
const HeaderBackgroundIcon = (
  props: Omit<BackgroundIconProps, 'size' | 'data-testid' | 'dataTestId'>,
): JSX.Element => {
  const { size, dataTestId, isDisabled } = useHeader();

  const testId = composeDataTestId(`${dataTestId}-background-icon`);

  return (
    <BackgroundIcon
      {...props}
      dataTestId={testId}
      disabled={isDisabled}
      size={getIconSize(size)}
    />
  );
};

export { HeaderBackgroundIcon };
