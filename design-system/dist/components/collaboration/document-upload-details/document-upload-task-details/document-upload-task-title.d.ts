interface DocumentUploadTaskTitleProps {
    uniqueId: number;
    documentTypeLabel: string;
    categoryLabel: string;
    description?: string;
    required: boolean;
}
/** Displays the number of tasks, the document type label and the category label. */
export declare const DocumentUploadTaskTitle: ({ uniqueId, documentTypeLabel, categoryLabel, description, required, }: DocumentUploadTaskTitleProps) => JSX.Element;
export {};
