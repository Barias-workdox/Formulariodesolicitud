import { type ReactElement, useState } from 'react';

import { FileTypeIcon } from '@components/file-type-icon/file-type-icon';
import { ProgressBar } from '@components/progress/progress-bar';
import { Text } from '@components/text';
import { TruncatedText } from '@components/truncated-text';
import { useTranslation } from '@components/utils';

import { ActionButton } from './action-button';
import {
  StyledContainer,
  StyledFileDetails,
  StyledIconWrapper,
  StyledPathAndNameContainer,
  StyledPathContainer,
  StyledNameContainer,
} from './file-item.styles';

import type { FileUploadItem } from '../../file-upload-manager.interfaces';
import type { ProgressBarProps } from '@components/progress/progress-bar';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export type FileItemProps = WithTestId<FileUploadItem>;

/** gets the overrides for the progress bar used in file upload manager  */
const getProgressBarOverrides = (): ProgressBarProps['overrides'] => ({
  BarContainer: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      marginTop: $theme.spacing.spacingXs,
      marginBottom: $theme.spacing.spacingXs,
    }),
  },
  Bar: {
    style: ({ $theme }): StyleObject => ({
      backgroundColor: $theme.colors.neutralSubtle,
      borderRadius: $theme.spacing.spacing2xs,
    }),
  },
});

/**
 * Component that renders a single file item in the upload manager
 */
export function FileItem(props: FileItemProps): ReactElement {
  const {
    'data-testid': dataTestId = 'file-upload-manager',
    id,
    name,
    fileType,
    errorMessage,
    status,
    path,
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const fileText =
    props.status === 'rejected'
      ? (props.reason ?? errorMessage)
      : t(`fileUploadManager.fileStatusLabels.${status}`);

  const progressBarOverrides = getProgressBarOverrides();

  // Remove name from end of path if it's included
  const cleanPath = path && path.endsWith(name) ? path.slice(0, -name.length) : path;

  return (
    <StyledContainer
      $isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledIconWrapper>
        <FileTypeIcon
          data-testid={`${dataTestId}__file-type-${id}`}
          fileExtension={fileType}
          size={24}
        />
      </StyledIconWrapper>
      <StyledFileDetails>
        <StyledPathAndNameContainer>
          {cleanPath ? (
            <StyledPathContainer>
              <TruncatedText
                textProps={{
                  variant: 'bodySmall',
                  margin: '0',
                  padding: '0',
                }}
                tooltipProps={{
                  content: path,
                }}
              >
                {cleanPath}
              </TruncatedText>
            </StyledPathContainer>
          ) : null}
          <StyledNameContainer>
            <TruncatedText
              textProps={{
                variant: 'bodySmall',
                margin: '0',
                padding: '0',
              }}
              tooltipProps={{
                content: name,
              }}
            >
              {name}
            </TruncatedText>
          </StyledNameContainer>
        </StyledPathAndNameContainer>
        {props.status === 'uploading' ? (
          <ProgressBar
            value={props.progress}
            size="medium"
            overrides={progressBarOverrides}
            completed={false}
          />
        ) : (
          <Text
            variant="bodySmall"
            margin={0}
            padding={0}
            color="neutralDepressed"
          >
            {fileText}
          </Text>
        )}
      </StyledFileDetails>
      <ActionButton
        {...props}
        isHovered={isHovered}
      />
    </StyledContainer>
  );
}
