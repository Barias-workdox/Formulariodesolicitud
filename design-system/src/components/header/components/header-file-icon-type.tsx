import { FileTypeIcon } from '@components/file-type-icon';

import { useHeader } from '../header.provider';
import { composeDataTestId } from '../utils/compose-data-test-id';
import { getFileIconSize } from '../utils/size-maps';

import type { FileTypeIconProps } from '@components/file-type-icon';

/**
 * Header file icon type component.
 */
export const HeaderFileIconType = (
  props: Omit<FileTypeIconProps, 'size' | 'data-testid' | 'dataTestId' | 'isDisabled'>,
): JSX.Element => {
  const { size, dataTestId, isDisabled } = useHeader();

  const testId = composeDataTestId(`${dataTestId}-file-icon-type`);

  return (
    <FileTypeIcon
      {...props}
      isDisabled={isDisabled}
      dataTestId={testId}
      size={getFileIconSize(size)}
    />
  );
};
