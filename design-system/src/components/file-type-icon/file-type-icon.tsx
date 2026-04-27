import { useCss } from '@components/utils/hooks/use-css';

import { ReactComponent as FileTypeBase } from '../../assets/icons/file-type-base.svg';
import { ReactComponent as FileTypeFolder } from '../../assets/icons/folder.svg';
import { ReactComponent as FileTypeUnknown } from '../../assets/icons/unknown.svg';

import { DEFAULT_ICON_SIZE, FILE_ICON_CONFIG } from './file-type-icon.constants';
import { StyledContainer, StyledFileTypeText, styles } from './file-type-icon.styles';

import type { FileType, FileTypeIconSize } from './file-type-icon.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface FileTypeIconProps extends WithTestId {
  fileExtension?: FileType;
  size: FileTypeIconSize;
  isDisabled?: boolean;
  ariaHidden?: boolean;
}

/**
 * Displays an icon representing a specific file type based on its extension.
 * If the file extension is unknown, it displays a default unknown file icon.
 */
export const FileTypeIcon = ({
  'data-testid': dataTestIdDeprecated,
  dataTestId: dataTestId = dataTestIdDeprecated,
  fileExtension,
  size = DEFAULT_ICON_SIZE,
  isDisabled,
  ariaHidden = true,
}: FileTypeIconProps): JSX.Element => {
  const selectedFileIconConfig = fileExtension ? FILE_ICON_CONFIG[fileExtension] : undefined;
  const { primaryColor, secondaryColor, text } = selectedFileIconConfig || {};
  const isFileTypeUnknown = selectedFileIconConfig === undefined;

  const { iconStyles } = useCss(styles, {
    primaryColor,
    secondaryColor,
    size,
  });

  const isFolder = fileExtension === 'folder';

  return (
    <StyledContainer
      data-testid={dataTestId}
      $size={size}
      $isDisabled={isDisabled}
      aria-hidden={ariaHidden}
    >
      {isFolder ? (
        <FileTypeFolder />
      ) : (
        <>
          {isFileTypeUnknown ? (
            <FileTypeUnknown
              data-testid={`${dataTestId}--unknown`}
              className={iconStyles}
            />
          ) : (
            <>
              <StyledFileTypeText size={size}>{text}</StyledFileTypeText>
              <FileTypeBase className={iconStyles} />
            </>
          )}
        </>
      )}
    </StyledContainer>
  );
};
