import { CollaborationSubtask } from '../../interfaces';
import { FileType } from '../../../file-type-icon';
import { Option as BaseWebOption } from 'baseui/select';
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
/** Styled select component for the collaboration summary. Contains the document label (without ellipsis) and the file icon */
export declare const DocumentApprovalDetailsSelector: ({ "data-testid": dataTestId, documentSelected, subtasks, setDocumentSelected, }: DocumentApprovalDetailsSelectorProps) => JSX.Element;
