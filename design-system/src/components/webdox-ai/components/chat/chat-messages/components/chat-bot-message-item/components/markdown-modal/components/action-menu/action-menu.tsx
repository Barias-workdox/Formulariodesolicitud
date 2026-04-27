import { Maximize } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { CopyToClipboardButton } from '@components/webdox-ai/components/copy-to-clipboard-button';

import { getBaseOverrides } from '../../../../../../../../info-button/info-button.overrides';

import { StyledWrapper } from './components/styled-wrapper';

import type { WebdoxAIChatControllerProps } from '../../../../../../../../../controllers/webdox-ai-chat.controller';
import type { CopyButtonTexts } from '@components/webdox-ai/components/brain-viewer-modal/interfaces';

export interface ActionMenuProps extends Pick<WebdoxAIChatControllerProps, 'zIndex'> {
  'data-testid': string;
  clipboardItem?: ClipboardItem | string;
  copyButtonTexts?: CopyButtonTexts;
  onOpenTableViewer(): void;
}

/**
 * Component that display table actions.
 */
export const ActionMenu = ({
  'data-testid': dataTestId,
  clipboardItem,
  zIndex,
  copyButtonTexts = {},
  onOpenTableViewer,
}: ActionMenuProps): JSX.Element => {
  const { theme } = useCss();
  const { Button } = getBaseOverrides(theme);
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <CopyToClipboardButton
        data-testid={`${dataTestId}--copy-to-clipboard-button`}
        value={clipboardItem}
        tooltipText={t('webdoxAI.tableCopyToClipboardButton.defaultTooltipText')}
        copiedTooltipText={t('webdoxAI.tableCopyToClipboardButton.copiedTooltipText')}
        buttonText={t('webdoxAI.tableCopyToClipboardButton.defaultText')}
        copiedButtonText={t('webdoxAI.tableCopyToClipboardButton.defaultText')}
        {...copyButtonTexts}
        zIndex={zIndex}
      />
      <StatefulTooltipNext
        zIndex={zIndex}
        content={t('webdoxAI.chat.expandTable')}
      >
        <div>
          <IconButton
            data-testid={`${dataTestId}--expand-table-button`}
            size="32px"
            kind="tertiary"
            overrides={Button}
            onClick={onOpenTableViewer}
          >
            <Maximize />
          </IconButton>
        </div>
      </StatefulTooltipNext>
    </StyledWrapper>
  );
};
