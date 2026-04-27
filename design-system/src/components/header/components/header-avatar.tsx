import { Avatar } from '@components/avatar/next';

import { useHeader } from '../header.provider';
import { composeDataTestId } from '../utils/compose-data-test-id';
import { getIconSize } from '../utils/size-maps';

import type { AvatarProps } from '@components/avatar/next';

export type HeaderAvatarProps = Omit<AvatarProps, 'size' | 'data-testid' | 'dataTestId'>;
/**
 * Header background icon component.
 */
const HeaderAvatar = (props: HeaderAvatarProps): JSX.Element => {
  const { size, dataTestId, isDisabled } = useHeader();

  const testId = composeDataTestId(`${dataTestId}-avatar`);

  return (
    <Avatar
      {...props}
      disabled={isDisabled}
      size={getIconSize(size)}
      dataTestId={testId}
    />
  );
};

export { HeaderAvatar };
