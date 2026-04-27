import { Close } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';

import { getButtonOverrides } from '../../webdox-ai-document-viewer-wrapper.styles';

import type { ActionButtonStyleParams } from '../../webdox-ai-document-viewer-wrapper.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface CloseActionProps extends WithTestId, ActionButtonStyleParams {
  zIndex?: number;
  onClose(): void;
}

/** Component that displays a close icon button. */
export const CloseAction = ({
  'data-testid': dataTestId,
  onClose,
  zIndex,
  $isFirstChild,
  $isLastChild,
}: CloseActionProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StatefulTooltipNext
      showArrow
      content={t('general.close')}
      zIndex={zIndex}
    >
      <IconButton
        data-testid={dataTestId}
        kind="action-brain"
        onClick={onClose}
        overrides={getButtonOverrides({ $isFirstChild, $isLastChild })}
        size="32px"
      >
        <Close />
      </IconButton>
    </StatefulTooltipNext>
  );
};
