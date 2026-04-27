import { useMemo } from 'react';
import type { ReactElement } from 'react';

import { Upload } from '@carbon/icons-react';

import { Button } from '@components/button';
import { Text } from '@components/text';
import { bytesToShortNotation } from '@components/utils/files/file.utils';
import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/i18n/utils';

import { styles } from './file-uploader-button.styles';

import type { FileType } from '../../interfaces';
import type { ButtonProps } from '@components/button/button.interfaces';

export type FileUploaderButtonProps = Pick<ButtonProps, 'disabled' | 'onClick'> & {
  'data-testid': string;
  text: string;
  selectedFiles: FileType[];
};

/** Custom Button component for a `FileUploader` component */
export function FileUploaderButton({
  'data-testid': dataTestId,
  disabled,
  text,
  selectedFiles,
  onClick,
}: FileUploaderButtonProps): ReactElement {
  const { buttonContainerStyles, theme } = useCss(styles);

  const { t } = useTranslation();

  const showSelectedFilesMessage = selectedFiles.length > 0;

  const { count, size } = useMemo(
    () => ({
      count: selectedFiles.length,
      size: bytesToShortNotation(selectedFiles.reduce((prevSize, { size }) => prevSize + size, 0)),
    }),
    [selectedFiles],
  );

  return (
    <div className={buttonContainerStyles}>
      <Button
        data-testid={`${dataTestId}-button`}
        disabled={disabled}
        kind="tertiary"
        size="compact"
        startEnhancer={Upload}
        onClick={onClick}
      >
        {text}
      </Button>

      {showSelectedFilesMessage && (
        <Text
          variant="bodySmall"
          $style={{ textDecoration: 'underline' }}
          color={theme.colors.brand}
          margin={0}
          paddingTop={theme.spacing.spacingMd}
        >
          {t('fileuploader.filesToImport', { count, size })}
        </Text>
      )}
    </div>
  );
}
