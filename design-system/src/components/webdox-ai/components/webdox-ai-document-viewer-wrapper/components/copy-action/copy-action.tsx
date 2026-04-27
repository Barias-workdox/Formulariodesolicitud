import { Button } from '@components/button';
import { useTranslation } from '@components/utils';

import {
  CopyToClipboardButton,
  getAllCopyToClipboardButtonStates,
} from '../../../copy-to-clipboard-button';
import { getButtonOverrides } from '../../webdox-ai-document-viewer-wrapper.styles';

import type { ActionButtonStyleParams } from '../../webdox-ai-document-viewer-wrapper.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface CopyActionProps extends WithTestId, ActionButtonStyleParams {
  selectedText: string;
  zIndex?: number;
  /** Callback to execute when copy action is executed. */
  onCopy(): void;
}

/** Component that displays a custom copy to clipboard button. */
export const CopyAction = ({
  'data-testid': dataTestId = 'copy-action',
  selectedText,
  zIndex,
  $isFirstChild,
  $isLastChild,
  onCopy,
}: CopyActionProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <CopyToClipboardButton
      data-testid={dataTestId}
      value={selectedText}
      tooltipProps={{ placement: 'bottom' }}
      zIndex={zIndex}
      onCopy={onCopy}
    >
      {({ buttonState }): JSX.Element => {
        const { Icon, textKey } = getAllCopyToClipboardButtonStates()[buttonState];

        return (
          <Button
            data-testid={`${dataTestId}__button`}
            kind="action-brain"
            size="32px"
            endEnhancer={<Icon />}
            overrides={getButtonOverrides({ $isFirstChild, $isLastChild })}
          >
            {t(textKey)}
          </Button>
        );
      }}
    </CopyToClipboardButton>
  );
};
