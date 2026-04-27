import type { ReactElement } from 'react';

import { CheckmarkOutline, ChevronDown, Download, Edit, Upload } from '@carbon/icons-react';

import { Button, IconButton } from '@components/button';
import { DocumentViewer } from '@components/document-viewer';
import { FileIcon } from '@components/file-icon';
import { TitleLayout } from '@components/layouts';
import { StatefulMenu } from '@components/menu';
import { Popover } from '@components/popover';
import { Select } from '@components/select';
import { Text } from '@components/text';
import { StatefulTooltip } from '@components/tooltip';
import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/index';

import { BannerDocument } from '../banner-document';

import { styles, titleLayoutOverrides } from './contract-negotiation-body.styles';

import type { IContractNegotiationContext } from '../../../interfaces';
import type { IUseDocumentLastModificationText } from '../hooks/use-document-last-modification-text.hook';
import type { SelectOption } from '@components/select';
import type { Items, OnItemSelectFn } from 'baseui/menu';

export type ContractNegotiationBodyProps = Pick<
  IContractNegotiationContext,
  'isLoading' | 'isDocumentPreviewLoading'
> & {
  'data-testid': string;
  disabled?: IContractNegotiationContext['isApprovalDisabled'];
  document: Pick<
    IContractNegotiationContext['selectedDocument']['document'],
    'fileExt' | 'name' | 'url'
  >;
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
export const ContractNegotiationBody = ({
  'data-testid': dataTestId,
  disabled,
  document: { fileExt, name },
  documentApprovedAt,
  documentLastModificationText,
  documentPreviewUrl,
  documentAttachmentUrl,
  documentStatus,
  documentVersionOptions,
  isDocumentPreviewLoading = false,
  isLoading = false,
  readOnly = false,
  negotiableDocument = false,
  selectedVersionOption,
  showBanner,
  handleOpenNewVersionDrawer,
  onApproveDocument,
  onChangeDocumentVersion,
  onDownloadDocument,
  handleWriteNewNewVersion,
}: ContractNegotiationBodyProps): ReactElement => {
  const { t } = useTranslation();
  const { containerStyles, contentStyles, headerStyles, headerRightContainerStyles, footerStyles } =
    useCss(styles);

  /** Array of items on the menu */
  const items: Items = [
    {
      id: 'new-version',
      disabled: isLoading,
      label: t('contractNegotiationCollaboration.uploadNewVersion'),
      startEnhancer: <Upload />,
    },
    {
      id: 'edit-version',
      disabled: isLoading,
      label: t('contractNegotiationCollaboration.writeDocument'),
      startEnhancer: <Edit />,
    },
  ];

  /** Object that contains the handlers for the menu items */
  const menuOptionsHandler = {
    'new-version': (): void => handleOpenNewVersionDrawer(),
    'edit-version': (): void => handleWriteNewNewVersion(),
  };

  /** Handler to change the selected version. */
  const handleChangeVersionSelect = (value: SelectOption[]): void => {
    const [selectedVersion] = value;

    if (selectedVersion) {
      onChangeDocumentVersion(selectedVersion);
    }
  };

  return (
    <div className={containerStyles}>
      {showBanner && (
        <BannerDocument
          status={documentStatus}
          approvedAt={documentApprovedAt}
        />
      )}
      <div className={contentStyles}>
        <div className={headerStyles}>
          <TitleLayout
            overrides={titleLayoutOverrides()}
            titleText={
              <StatefulTooltip
                placement="bottom"
                showArrow
                content={name}
              >
                <Text
                  variant="bodySmall"
                  fontWeight="500"
                  margin={0}
                  color="neutral"
                  textOverflow="ellipsis"
                  overflow="hidden"
                >
                  {name}
                </Text>
              </StatefulTooltip>
            }
            subtitleText={
              <StatefulTooltip
                placement="bottom"
                showArrow
                content={documentLastModificationText}
              >
                <Text
                  variant="bodySmall"
                  margin={0}
                  color="neutralDepressed"
                  textOverflow="ellipsis"
                  overflow="hidden"
                >
                  {documentLastModificationText}
                </Text>
              </StatefulTooltip>
            }
            startEnhancer={
              <FileIcon
                fileExtension={fileExt}
                height="20px"
                width="20px"
              />
            }
          />
          <div className={headerRightContainerStyles}>
            {!negotiableDocument && (
              <Select
                onChange={handleChangeVersionSelect}
                value={selectedVersionOption}
                options={documentVersionOptions}
                searchable={false}
                data-testid={`${dataTestId}--version-select`}
              />
            )}
            <IconButton
              data-testid={`${dataTestId}--download`}
              kind="tertiary"
              onClick={onDownloadDocument}
            >
              <Download />
            </IconButton>
          </div>
        </div>
        <DocumentViewer
          data-testid={`${dataTestId}__document-viewer`}
          url={documentPreviewUrl}
          attachmentUrl={documentAttachmentUrl}
          isLoading={isDocumentPreviewLoading}
        />
      </div>
      {!readOnly && (
        <div className={footerStyles}>
          <Popover
            ignoreBoundary
            placement="top"
            content={
              <StatefulMenu
                items={items}
                onItemSelect={({ item: { id } }): OnItemSelectFn => menuOptionsHandler[id]()}
              />
            }
          >
            <Button
              kind="tertiary"
              endEnhancer={<ChevronDown />}
              data-testid={`${dataTestId}__edit-document-options`}
            >
              {t('contractNegotiationCollaboration.editDocument')}
            </Button>
          </Popover>

          <Button
            data-testid={`${dataTestId}__approve-document`}
            startEnhancer={<CheckmarkOutline />}
            isLoading={isLoading}
            disabled={isLoading || disabled}
            onClick={onApproveDocument}
          >
            {t('contractNegotiationCollaboration.approveDocument')}
          </Button>
        </div>
      )}
    </div>
  );
};
