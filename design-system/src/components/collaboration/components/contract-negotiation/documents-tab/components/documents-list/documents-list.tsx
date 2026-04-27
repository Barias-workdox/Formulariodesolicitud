import type { ReactElement } from 'react';

import { DocumentBlank } from '@carbon/icons-react';
import { ListHeading, ListItem } from 'baseui/list';

import { FileTypeIcon } from '@components/file-type-icon';
import { Text } from '@components/text';
import { tooltipCaptionOverridesStyles, tooltipCaptionStyles } from '@components/tooltip';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useCss } from '@components/utils/hooks/use-css';

import { DocumentStatusTag } from '../document-status-tag';

import {
  documentsListHeadingOverrides,
  documentsListItemOverrides,
  styles,
} from './documents-list.styles';

import type { CollaborationResource, IContractNegotiationContext } from '../../../../../interfaces';
import type { FileType } from '@components/file-type-icon';

type DocumentId = IContractNegotiationContext['selectedDocument']['document']['id'];

export type DocumentsListProps = Pick<IContractNegotiationContext, 'isLoading'> & {
  dataTestId?: string;
  listHeadingText: string;
  documents: CollaborationResource[];
  selectedDocumentId: DocumentId;
  onClick(id: DocumentId): void;
};

/**
 * DocumentsList is a component that renders a heading and a list of documents.
 * Each document in the list is clickable, allowing users to indicate their selection.
 */
export const DocumentsList = ({
  dataTestId,
  listHeadingText,
  documents = [],
  selectedDocumentId,
  isLoading = false,
  onClick,
}: DocumentsListProps): ReactElement => {
  const { listStyles, documentInfoStyles, theme } = useCss(styles);

  return (
    <ul className={listStyles}>
      <ListHeading
        overrides={documentsListHeadingOverrides(theme)}
        heading={
          <Text
            // The heading is rendered inside a <p> element,
            // so it's necessary to wrap the text in a <span> to prevent a warning.
            as="span"
            variant="bodySmall"
            fontWeight="500"
            color="neutral"
            margin={0}
            alignItems="center"
            display="flex"
            gridGap={theme.spacing.spacingXs}
          >
            <DocumentBlank color={theme.colors.neutralDepressed} />
            {listHeadingText}
          </Text>
        }
      />
      {documents.map(({ document: { id, name, fileExt, negotiable = false }, status }, index) => {
        const isSelected = selectedDocumentId === id;

        /** Execute onClick function with the document id. */
        const handleClick = (): void => {
          if (isLoading) {
            return;
          }

          onClick(id);
        };

        return (
          <ListItem
            key={id}
            overrides={documentsListItemOverrides(theme, {
              dataTestId: `${dataTestId}__document-${index}`,
              isSelected,
            })}
            onClick={handleClick}
          >
            <div className={documentInfoStyles}>
              <FileTypeIcon
                fileExtension={fileExt as FileType}
                size={20}
                data-testid="document-list__document-icon"
              />
              <StatefulTooltipNext
                placement="right"
                showArrow
                content={(): ReactElement => {
                  return (
                    <Text
                      variant="bodySmall"
                      $style={tooltipCaptionStyles(theme)}
                    >
                      {name}
                    </Text>
                  );
                }}
                overrides={tooltipCaptionOverridesStyles()}
              >
                <Text
                  variant="bodySmall"
                  margin={0}
                  color={isSelected ? 'neutral' : 'neutralSubdued'}
                  $style={styles.documentNameTextStyles()}
                >
                  {name}
                </Text>
              </StatefulTooltipNext>
            </div>
            {status && negotiable && <DocumentStatusTag status={status} />}
          </ListItem>
        );
      })}
    </ul>
  );
};
