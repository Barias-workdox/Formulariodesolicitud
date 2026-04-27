import { useMemo } from 'react';
import type { ReactElement } from 'react';

import { FileIcon } from '@components/file-icon';
import { TitleLayout } from '@components/layouts';
import { Text } from '@components/text';
import { StatefulTooltip } from '@components/tooltip';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './activity-documents.styles';

import type { IActivity } from '@components/activity-timeline/activity-timeline.interfaces';

export type ActivityDocumentsProps = Pick<IActivity['extraData'], 'documents'>;

type DocumentProps = Pick<ActivityDocumentsProps, 'documents'> & {
  title: string;
};

/**
 * Component that render a section of documents
 *
 * @deprecated Use the `Timeline` API instead
 */
const Documents = ({ title, documents = [] }: DocumentProps): ReactElement => {
  const { documentContainerStyles, documentStyles, theme } = useCss(styles);

  return (
    <div className={documentContainerStyles}>
      <Text
        margin={0}
        color="neutral"
        variant="bodySmall"
        $style={styles.titleStyles(theme)}
      >
        {title}
      </Text>

      {documents.map(({ id, name, fileExt }) => (
        <div
          key={`activity-document-${title}-${id}`}
          className={documentStyles}
        >
          <TitleLayout
            startEnhancer={
              <FileIcon
                fileExtension={fileExt}
                height="24px"
                width="24px"
              />
            }
            titleText={
              <StatefulTooltip
                showArrow
                placement="bottom"
                content={name}
              >
                <Text
                  margin={0}
                  variant="bodySmall"
                  fontWeight="400"
                  color="neutralSubdued"
                >
                  {name}
                </Text>
              </StatefulTooltip>
            }
          />
        </div>
      ))}
    </div>
  );
};

/**
 * Component that displays a list of documents in the activity timeline
 *
 * @deprecated Use the `Timeline` API instead
 */
export const ActivityDocuments = ({ documents = [] }: ActivityDocumentsProps): ReactElement => {
  const { t } = useTranslation();
  const { containerStyles } = useCss(styles);

  const negotiableDocuments = useMemo(
    () => documents.filter(({ negotiable = false }) => negotiable),
    [documents],
  );

  const backgroundDocuments = useMemo(
    () => documents.filter(({ negotiable = false }) => !negotiable),
    [documents],
  );

  return (
    <div className={containerStyles}>
      {negotiableDocuments.length > 0 && (
        <Documents
          title={t('contractNegotiationCollaboration.documentsTab.negotiable')}
          documents={negotiableDocuments}
        />
      )}
      {backgroundDocuments.length > 0 && (
        <Documents
          title={t('contractNegotiationCollaboration.documentsTab.background')}
          documents={backgroundDocuments}
        />
      )}
    </div>
  );
};
