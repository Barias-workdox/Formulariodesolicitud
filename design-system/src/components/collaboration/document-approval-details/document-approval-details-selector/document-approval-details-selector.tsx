import { useEffect, useMemo } from 'react';

import { FileTypeIcon } from '@components/file-type-icon';
import { TitleLayout } from '@components/layouts';
import { Select } from '@components/select';
import { useCss } from '@components/utils/hooks/use-css';

import { optionLabelStyles, styles } from './document-approval-details-selector.styles';

import type { CollaborationSubtask } from '../../interfaces';
import type { FileType } from '@components/file-type-icon';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { Option as BaseWebOption } from 'baseui/select';

export interface Option extends BaseWebOption {
  id: string | number;
  fileExt?: FileType;
}

export interface DocumentApprovalDetailsSelectorProps {
  'data-testid': string;
  documentSelected: Option[];
  subtasks: CollaborationSubtask[];
  setDocumentSelected(option: Option[]): void;
}

/**
 * Return an options list for select component with all documents of the first invitation.
 * We suppose that all documents content in the invitations are the same on each them.
 * If the invitations is empty, return an empty options list.
 */
const getDocumentsList = (subtasks: CollaborationSubtask[] = []): Option[] =>
  subtasks.length === 0
    ? []
    : subtasks[0].resources.map(({ document: { id, name: label, fileExt, deletedAt } }) => ({
        id,
        label,
        fileExt: fileExt as FileType,
        deletedAt,
      }));

/** Render the custom option label in the documents selector */
const optionLabel = ({ option }: { option: Option }, theme: DesignSystemTheme): React.ReactNode => {
  return (
    <TitleLayout
      overrides={optionLabelStyles(theme)}
      startEnhancer={
        <FileTypeIcon
          data-testid="document-approval-details-selector__file-icon"
          fileExtension={option.fileExt as FileType}
          size={20}
        />
      }
      titleText={option.label as string}
    />
  );
};

/** Styled select component for the collaboration summary. Contains the document label (without ellipsis) and the file icon */
export const DocumentApprovalDetailsSelector = ({
  'data-testid': dataTestId = 'document-approval-details-selector',
  documentSelected,
  subtasks,
  setDocumentSelected,
}: DocumentApprovalDetailsSelectorProps): JSX.Element => {
  const { selectWrapperStyles, theme } = useCss(styles);
  const documentsList = useMemo(() => getDocumentsList(subtasks), [subtasks]);

  // Set in the document selector the first element in the documents list each time invitations props change
  useEffect(() => {
    if (!documentSelected.length) {
      const [selectedOption] = documentsList;

      setDocumentSelected([selectedOption]);
    }
  }, [documentSelected, documentsList, setDocumentSelected]);

  return (
    <div className={selectWrapperStyles}>
      <Select
        data-testid={dataTestId}
        options={documentsList}
        value={documentSelected}
        onChange={setDocumentSelected}
        searchable={false}
        disabled={documentsList.length < 1}
        getValueLabel={({ option }): React.ReactNode =>
          optionLabel({ option: option as Option }, theme)
        }
      />
    </div>
  );
};
