import type { ReactElement } from 'react';

import { FileIcon } from '@components/file-icon';
import { DynamicFormControl } from '@components/forms';
import { TitleLayout } from '@components/layouts';
import { Tag } from '@components/tag';
import { Text } from '@components/text';
import { StatefulTooltip } from '@components/tooltip';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';

import { getDocumentVersion } from '../../../utils/document-version';
import { CollapsibleInfo } from '../collapsible-info';
import { StatusIcon } from '../status-icon';

import { checkboxOverrides, styles } from './checkbox-form.styles';

import type {
  CollaborationActivityDocumentsForm,
  CollaborationResourceStatusInfo,
} from '@components/collaboration/interfaces';

export type CheckboxFormProps = {
  'data-testid': string;
  document: CollaborationActivityDocumentsForm;
  status: CollaborationResourceStatusInfo;
};

/**
 * Component that renders a custom checkbox element for a document along with a Collapsible component
 * with all the required information of that specific document
 */
export const CheckboxForm = ({
  'data-testid': dataTestId,
  document,
  status,
}: CheckboxFormProps): ReactElement => {
  const {
    index,
    fileExt,
    name,
    officeDocumentVersion: { versionNumber },
    updatedAt,
  } = document;

  const { elementContainerStyles, elementStyles, infoStyles } = useCss(styles);

  const { t } = useTranslation();
  const { formatDateAsText } = useDateUtilsWithLocale();

  return (
    <div className={elementContainerStyles}>
      <div className={elementStyles}>
        <DynamicFormControl
          data-testid={`${dataTestId}__checkbox`}
          controlKind="checkbox"
          name={`documents.${index}.value`}
          formControlOverrides={checkboxOverrides}
        >
          <TitleLayout
            startEnhancer={
              <FileIcon
                fileExtension={fileExt}
                height="20px"
                width="20px"
              />
            }
            titleText={
              <StatefulTooltip
                showArrow
                placement="bottom"
                content={name}
              >
                <Text
                  variant="body"
                  margin={0}
                  fontWeight="500"
                  $style={styles.textStyles()}
                >
                  {name}
                </Text>
              </StatefulTooltip>
            }
            subtitleText={
              <StatefulTooltip
                showArrow
                placement="bottom"
                content={t('contractNegotiationCollaboration.updatedOnDate', {
                  date: formatDateAsText(updatedAt, true),
                })}
              >
                <Text
                  variant="bodySmall"
                  margin={0}
                  color="neutralSubdued"
                  $style={styles.textStyles()}
                >
                  {t('contractNegotiationCollaboration.updatedOnDate', {
                    date: formatDateAsText(updatedAt, true),
                  })}
                </Text>
              </StatefulTooltip>
            }
          />
        </DynamicFormControl>

        <div className={infoStyles}>
          <StatusIcon
            data-testid={`${dataTestId}__status-icon`}
            status={status}
          />

          <Tag
            kind="primary"
            variant="overlay"
          >
            {getDocumentVersion(versionNumber)}
          </Tag>
        </div>
      </div>

      <CollapsibleInfo
        document={document}
        status={status}
      />
    </div>
  );
};
