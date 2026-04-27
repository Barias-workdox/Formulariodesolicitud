import { useMemo, type PropsWithChildren } from 'react';

import { FileTypeIcon } from '@components/file-type-icon';
import { Text } from '@components/text';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useCss } from '@components/utils/hooks/use-css';

import { FeedFileInfoTag } from './components';
import { BASE_DATA_TEST_ID } from './feed-file.constants';
import {
  StyledFeedFile,
  StyledFeedFileInfo,
  StyledFeedFileName,
  StyledPathAndNameContainer,
  StyledPathContainer,
  StyledNameContainer,
  feedFileTooltipOverrides,
  styles,
} from './feed-file.styles';

import type { FeedFileProps } from './feed-file.interfaces';
import type { FileType } from '@components/file-type-icon';

/**
 * Displays an Styled document list item
 */
export const FeedFile = ({
  'data-testid': dataTestId = BASE_DATA_TEST_ID,
  document: { name, fileExt, type, webkitRelativePath },
  tagProps,
  backgroundColor,
  children,
  showPath = false,
}: PropsWithChildren<FeedFileProps>): JSX.Element => {
  const { documentNameStyles } = styles;
  const { theme } = useCss();
  const extension = fileExt || (type?.split('/').pop() as FileType);

  const cleanPath = useMemo(() => {
    if (!showPath || !webkitRelativePath) {
      return undefined;
    }

    // Remove the filename from the end of the path if it's there
    if (name && webkitRelativePath.endsWith(name)) {
      return webkitRelativePath.slice(0, -name.length);
    }

    return webkitRelativePath;
  }, [showPath, webkitRelativePath, name]);

  return (
    <StyledFeedFile $backgroundColor={backgroundColor}>
      <StyledFeedFileInfo>
        <FileTypeIcon
          data-testid={`${dataTestId}__file-type-icon--${extension}`}
          fileExtension={extension}
          size={16}
        />
        <StyledFeedFileName>
          {cleanPath ? (
            <StyledPathAndNameContainer>
              <StyledPathContainer>
                <StatefulTooltipNext
                  content={webkitRelativePath}
                  showArrow
                  overrides={feedFileTooltipOverrides()}
                  ignoreBoundary
                >
                  <Text
                    variant="bodySmall"
                    $style={documentNameStyles(theme)}
                  >
                    <span>{cleanPath}</span>
                  </Text>
                </StatefulTooltipNext>
              </StyledPathContainer>
              <StyledNameContainer>
                <StatefulTooltipNext
                  content={name}
                  showArrow
                  overrides={feedFileTooltipOverrides()}
                  ignoreBoundary
                >
                  <Text
                    variant="bodySmall"
                    $style={documentNameStyles(theme)}
                  >
                    <span>{name}</span>
                  </Text>
                </StatefulTooltipNext>
              </StyledNameContainer>
            </StyledPathAndNameContainer>
          ) : (
            <StatefulTooltipNext
              content={name}
              showArrow
              overrides={feedFileTooltipOverrides()}
              ignoreBoundary
            >
              <Text
                variant="bodySmall"
                $style={documentNameStyles(theme)}
              >
                <span>{name}</span>
              </Text>
            </StatefulTooltipNext>
          )}
        </StyledFeedFileName>
        {tagProps !== undefined && (
          <FeedFileInfoTag
            data-testid={dataTestId}
            {...tagProps}
          />
        )}
        {children}
      </StyledFeedFileInfo>
    </StyledFeedFile>
  );
};
