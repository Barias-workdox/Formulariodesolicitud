import { SearchLocate, NotebookReference, Information } from '@carbon/icons-react';
import { isNil } from 'lodash';

import { IconButton } from '@components/button';
import { Text } from '@components/text';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';

import {
  DEFAULT_CURRENCY,
  HIGHTLIGHTED_AVAILABLE_METADATA,
  METADATA_EMPTY_VALUE,
  DATA_EXTRACTION_LIST_ITEM_TOOLTIP_Z_INDEX,
} from './data-extraction-list-item.constants';
import {
  StyledDataExtractionListContent,
  StyledDataExtractionListItemContainer,
  StyledDataExtractionListContentRow,
  StyledInformationPlaceholder,
} from './data-extraction-list-item.styles';

import type { DataExtractionListItemProps } from './data-extraction-list-item.interfaces';
import type { DocumentMetadata } from '@components/webdox-ai/interfaces/document-metadata.interfaces';

/**
 * Component for displaying a metadata item.
 */
export const DataExtractionListItem = ({
  'data-testid': dataTestId,
  keyName,
  metadataItem,
  isDisabled,
  handleClick,
  onGoToEntitiesDirectoryClick,
}: DataExtractionListItemProps): JSX.Element => {
  const { t } = useTranslation();
  const { dateWithoutTimezoneOffset, formatDateAsText } = useDateUtilsWithLocale();

  /**
   *  It will parse the metadata value according to the data type. New type of data
   *  are added in this parse switch function. It will also take care of error data
   *  and loading state data
   */
  const getParsedMetadataValue = (metadata: DocumentMetadata): string => {
    const { value: metadataValue, dataType, extras } = metadata;

    if (isDisabled || isNil(metadataValue) || isNil(dataType)) {
      return METADATA_EMPTY_VALUE;
    }

    switch (dataType) {
      case 'date': {
        if (typeof metadataValue === 'string') {
          try {
            const date = dateWithoutTimezoneOffset(metadataValue);
            const dateString = formatDateAsText(date.toISOString());

            return dateString;
          } catch (error) {
            console.error(`Invalid date value: ${metadataValue}`, error);
          }
        }

        return '-';
      }

      case 'money': {
        if (typeof metadataValue === 'string' && metadataValue !== '') {
          const currency = extras?.currency ?? DEFAULT_CURRENCY;
          const moneyValue = `${currency} ${metadataValue}`;

          return moneyValue;
        }

        return '-';
      }
      case 'ref':
      case 'string': {
        if (typeof metadataValue === 'string' || typeof metadataValue === 'number') {
          return metadataValue as string;
        }

        console.error(`Invalid value for string attributes: ${metadataValue}`);

        return '-';
      }

      default: {
        console.warn(
          `Unhandled attribute type: "${dataType}" with value: "${metadataValue}". Defaulting to simple text.`,
        );

        return 'value';
      }
    }
  };

  return (
    <StyledDataExtractionListItemContainer data-testid={dataTestId}>
      <StyledDataExtractionListContent>
        <StyledDataExtractionListContentRow>
          <Text
            variant="upperDetails"
            color="neutralSubdued"
            fontWeight={400}
            $style={{ textTransform: 'uppercase', letterSpacing: '1px' }}
          >
            {t(`webdoxAI.dataExtraction.metadata.${keyName}`)}
          </Text>
          {(keyName === 'counterparty' || keyName === 'party') && (
            <StatefulTooltipNext
              content={t(`webdoxAI.dataExtraction.viewEntitiesDirectory`, {
                metadataValue: t(
                  `webdoxAI.dataExtraction.metadata.${keyName}${metadataItem.length > 1 ? '_plural' : ''}`,
                ).toLowerCase(),
              })}
              showArrow
              placement="left"
              zIndex={DATA_EXTRACTION_LIST_ITEM_TOOLTIP_Z_INDEX}
            >
              <IconButton
                data-testid="data-extraction-list-item__view-entities-directory--button"
                kind="control"
                size="24px"
                disabled={isDisabled}
                onClick={onGoToEntitiesDirectoryClick}
              >
                <NotebookReference />
              </IconButton>
            </StatefulTooltipNext>
          )}
        </StyledDataExtractionListContentRow>
        {metadataItem.map((metadata: DocumentMetadata) => {
          return (
            <StyledDataExtractionListContentRow key={`metadata-list-${keyName}`}>
              <Text
                variant="bodySmall"
                color="neutralStrong"
                fontWeight={500}
                as="div"
                textOverflow="ellipsis"
                overflow="hidden"
                $style={{ letterSpacing: '1px' }}
              >
                {getParsedMetadataValue(metadata)}
              </Text>
              {HIGHTLIGHTED_AVAILABLE_METADATA.includes(keyName) ? (
                <StatefulTooltipNext
                  content={t(`webdoxAI.dataExtraction.localizeDataInDocument`)}
                  showArrow
                  placement="left"
                  zIndex={DATA_EXTRACTION_LIST_ITEM_TOOLTIP_Z_INDEX}
                >
                  <IconButton
                    data-testid="data-extraction-list-item__localize-data--button"
                    kind="tertiary"
                    size="24px"
                    disabled={isDisabled}
                    onClick={() => handleClick(metadata)}
                  >
                    <SearchLocate />
                  </IconButton>
                </StatefulTooltipNext>
              ) : (
                <StatefulTooltipNext
                  content={t(`webdoxAI.dataExtraction.metadaDataByContextMsg`)}
                  showArrow
                  placement="left"
                  zIndex={DATA_EXTRACTION_LIST_ITEM_TOOLTIP_Z_INDEX}
                >
                  <StyledInformationPlaceholder
                    data-testid="data-extraction-list-item__view-entities-directory--button"
                    aria-disabled={isDisabled}
                    $isDisabled={isDisabled}
                  >
                    <Information />
                  </StyledInformationPlaceholder>
                </StatefulTooltipNext>
              )}
            </StyledDataExtractionListContentRow>
          );
        })}
      </StyledDataExtractionListContent>
    </StyledDataExtractionListItemContainer>
  );
};
