import { ReactElement } from 'react';
import { IContractNegotiationContext } from '../../../interfaces';
import { IUseDocumentLastModificationText } from '../hooks/use-document-last-modification-text.hook';
import { SelectOption } from '../../../../select';
export type ContractNegotiationBodyProps = Pick<IContractNegotiationContext, 'isLoading' | 'isDocumentPreviewLoading'> & {
    'data-testid': string;
    disabled?: IContractNegotiationContext['isApprovalDisabled'];
    document: Pick<IContractNegotiationContext['selectedDocument']['document'], 'fileExt' | 'name' | 'url'>;
    documentApprovedAt: IContractNegotiationContext['selectedDocument']['approvedAt'];
    documentLastModificationText: IUseDocumentLastModificationText['lastModificationText'];
    /**
     * Url to preview the selected document.
     *
     * @deprecated instead use documentAttachmentUrl.
     */
    documentPreviewUrl?: IContractNegotiationContext['selectedDocumentPreviewUrl'];
    documentAttachmentUrl?: IContractNegotiationContext['selectedDocumentAttachmentUrl'];
    documentStatus: IContractNegotiationContext['selectedDocument']['status'];
    documentVersionOptions: SelectOption[];
    readOnly?: boolean;
    negotiableDocument?: boolean;
    selectedVersionOption?: SelectOption;
    showBanner: boolean;
    handleOpenNewVersionDrawer(): void;
    handleWriteNewNewVersion(): void;
    onApproveDocument(): void;
    onChangeDocumentVersion(value: SelectOption): void;
    onDownloadDocument(): void;
};
/**
 * ContractNegotiationBody component renders a document,
 * along with a header containing information about the document,
 * and a footer that allows users to approve the document or upload a new version of it.
 */
export declare const ContractNegotiationBody: ({ "data-testid": dataTestId, disabled, document: { fileExt, name }, documentApprovedAt, documentLastModificationText, documentPreviewUrl, documentAttachmentUrl, documentStatus, documentVersionOptions, isDocumentPreviewLoading, isLoading, readOnly, negotiableDocument, selectedVersionOption, showBanner, handleOpenNewVersionDrawer, onApproveDocument, onChangeDocumentVersion, onDownloadDocument, handleWriteNewNewVersion, }: ContractNegotiationBodyProps) => ReactElement;
