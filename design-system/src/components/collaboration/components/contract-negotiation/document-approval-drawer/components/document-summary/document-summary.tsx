import type { ReactElement } from 'react';

import { FileIcon } from '@components/file-icon';
import { Tag } from '@components/tag';
import { Text } from '@components/text';
import {
  StatefulTooltip,
  tooltipCaptionOverridesStyles,
  tooltipCaptionStyles,
} from '@components/tooltip';
import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/i18n/utils';

import { getDocumentVersion } from '../../../utils/document-version';

import { rowTitleStyles, styles } from './document-summary.styles';

import type { IContractNegotiationContext } from '../../../../../interfaces';
import type { IUseDocumentLastModificationText } from '../../../hooks/use-document-last-modification-text.hook';

export interface DocumentSummaryProps {
  document: IContractNegotiationContext['selectedDocument']['document'];
  documentLastModificationText: IUseDocumentLastModificationText['lastModificationText'];
}

/**
 * Component that displays a summary of a collaboration document,
 * including its name, file type, version, and last modification information.
 */
export const DocumentSummary = ({
  document: { name: documentName, fileExt: documentFileExt, officeDocumentVersion },
  documentLastModificationText,
}: DocumentSummaryProps): ReactElement => {
  const { t } = useTranslation();
  const { infoContainerStyles, infoItemStyles, documentInfoStyles, divisionLineStyles, theme } =
    useCss(styles);

  const { versionNumber } = officeDocumentVersion;

  return (
    <div className={infoContainerStyles}>
      <div className={infoItemStyles}>
        <Text
          variant="upperDetails"
          color="neutral"
          fontWeight="500"
          margin={0}
          $style={rowTitleStyles(theme)}
        >
          {t('contractNegotiationCollaboration.document')}
        </Text>
        <div className={documentInfoStyles}>
          <FileIcon
            fileExtension={documentFileExt}
            height="20px"
            width="20px"
          />

          <StatefulTooltip
            placement="right"
            showArrow
            content={(): ReactElement => {
              return (
                <Text
                  variant="bodySmall"
                  $style={tooltipCaptionStyles(theme)}
                >
                  {documentName}
                </Text>
              );
            }}
            overrides={tooltipCaptionOverridesStyles()}
          >
            <Text
              variant="bodySmall"
              margin={0}
              color="neutralSubdued"
              flex={1}
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              overflow="hidden"
            >
              {documentName}
            </Text>
          </StatefulTooltip>
          <Tag
            kind="primary"
            variant="overlay"
          >
            {getDocumentVersion(versionNumber)}
          </Tag>
        </div>
      </div>

      <div className={divisionLineStyles} />

      <div className={infoItemStyles}>
        <Text
          variant="upperDetails"
          color="neutral"
          fontWeight="500"
          margin={0}
          $style={rowTitleStyles(theme)}
        >
          {t('contractNegotiationCollaboration.lastModification')}
        </Text>
        <StatefulTooltip
          placement="right"
          showArrow
          content={(): ReactElement => {
            return (
              <Text
                variant="bodySmall"
                $style={tooltipCaptionStyles(theme)}
              >
                {documentLastModificationText}
              </Text>
            );
          }}
          overrides={tooltipCaptionOverridesStyles()}
        >
          <Text
            variant="bodySmall"
            margin={0}
            color="neutralSubdued"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            overflow="hidden"
          >
            {documentLastModificationText}
          </Text>
        </StatefulTooltip>
      </div>
    </div>
  );
};
