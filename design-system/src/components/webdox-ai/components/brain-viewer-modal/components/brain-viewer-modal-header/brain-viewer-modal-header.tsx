import { Close } from '@carbon/icons-react';

import { Button, IconButton } from '@components/button';
import { FullScreenHeader } from '@components/layouts/full-screen-layout';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { TruncatedText } from '@components/truncated-text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import {
  CopyToClipboardButton,
  getAllCopyToClipboardButtonStates,
} from '../../../copy-to-clipboard-button';
import { StyledButtonsContainer } from '../styled-buttons-container';
import { StyledEndEnhancerContainer } from '../styled-end-enhancer-container';

import { fullScreenHeaderOverrides } from './brain-viewer-modal-header.overrides';

import type { CopyButtonTexts } from '../../interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface BrainViewerModalHeaderProps extends WithTestId {
  title: string;
  clipboardItem?: ClipboardItem | string;
  zIndex?: number;
  copyButtonTexts?: CopyButtonTexts;
  onClose(): void;
}

/** Modal header to use within the TableViewerModal. */
export const BrainViewerModalHeader = ({
  'data-testid': dataTestId = 'modal-header',
  title,
  clipboardItem,
  zIndex,
  copyButtonTexts = {},
  onClose,
}: BrainViewerModalHeaderProps): JSX.Element => {
  const { theme } = useCss();
  const { t } = useTranslation();

  return (
    <FullScreenHeader
      $padding={theme.spacing.spacingMd}
      overrides={fullScreenHeaderOverrides}
      endEnhancer={
        <StyledEndEnhancerContainer>
          <StyledButtonsContainer>
            <CopyToClipboardButton
              data-testid={`${dataTestId}--copy-button`}
              value={clipboardItem}
            >
              {({ buttonState }) => {
                const { Icon, mainButtonText, mainTooltipText } = getAllCopyToClipboardButtonStates(
                  copyButtonTexts.buttonText ??
                    t('webdoxAI.tableCopyToClipboardButton.defaultTooltipText'),
                  copyButtonTexts.copiedTooltipText ??
                    t('webdoxAI.tableCopyToClipboardButton.copiedTooltipText'),
                  copyButtonTexts.buttonText ??
                    t('webdoxAI.tableCopyToClipboardButton.defaultText'),
                  copyButtonTexts.copiedButtonText ??
                    t('webdoxAI.tableCopyToClipboardButton.defaultText'),
                )[buttonState];

                return (
                  <StatefulTooltipNext
                    content={mainTooltipText}
                    showArrow
                    placement="bottom"
                    zIndex={zIndex}
                  >
                    <div>
                      <Button
                        data-testid={`${dataTestId}__copy-button--trigger`}
                        kind="secondary"
                        size="32px"
                        startEnhancer={<Icon />}
                      >
                        {mainButtonText}
                      </Button>
                    </div>
                  </StatefulTooltipNext>
                );
              }}
            </CopyToClipboardButton>
          </StyledButtonsContainer>
          <IconButton
            data-testid={`${dataTestId}--close-button`}
            kind="control"
            size="32px"
            onClick={onClose}
          >
            <Close size={16} />
          </IconButton>
        </StyledEndEnhancerContainer>
      }
    >
      <TruncatedText
        textProps={{ variant: 'bodySmall', fontWeight: '500', margin: 0 }}
        tooltipProps={{
          content: title,
          zIndex,
        }}
      >
        {title}
      </TruncatedText>
    </FullScreenHeader>
  );
};
