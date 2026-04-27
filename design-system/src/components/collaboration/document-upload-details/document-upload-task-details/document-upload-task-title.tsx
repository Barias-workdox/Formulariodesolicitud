import { TitleLayout } from '@components/layouts/title-layout';
import { useTranslation } from '@components/utils/i18n/utils';

import { Text } from '../../../text';
import { useCss } from '../../../utils/hooks/use-css';

import { taskStyles } from './document-upload-task-details.styles';

interface DocumentUploadTaskTitleProps {
  uniqueId: number;
  documentTypeLabel: string;
  categoryLabel: string;
  description?: string;
  required: boolean;
}

/** Displays the number of tasks, the document type label and the category label. */
export const DocumentUploadTaskTitle = ({
  uniqueId,
  documentTypeLabel,
  categoryLabel,
  description,
  required = false,
}: DocumentUploadTaskTitleProps): JSX.Element => {
  const { taskLabelsContainer } = useCss(taskStyles);
  const { t } = useTranslation();

  const documentTitle = description || documentTypeLabel;
  const documentSubtitle =
    categoryLabel || t(`collaborationUploadDetails.${required ? 'required' : 'optional'}Document`);

  return (
    <div className={taskLabelsContainer}>
      <TitleLayout
        titleText={
          <Text
            variant="bodySmall"
            fontWeight="500"
            margin={0}
            color="neutral"
            whiteSpace="normal"
          >
            {`${uniqueId} - ${documentTitle}`}
          </Text>
        }
        subtitleText={
          <Text
            variant="bodySmall"
            margin={0}
            color="neutralSubdued"
          >
            {documentSubtitle}
          </Text>
        }
      />
    </div>
  );
};
