import { DocumentTasks } from '@carbon/icons-react';

import { Button } from '@components/button';
import { useTranslation } from '@components/utils';

import { getButtonOverrides } from '../../webdox-ai-document-viewer-wrapper.styles';

import type { ActionButtonStyleParams } from '../../webdox-ai-document-viewer-wrapper.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface ExplainActionProps extends WithTestId, ActionButtonStyleParams {
  disabled?: boolean;
  /** Callback to execute when explain action is executed. */
  onExplain(): void;
}

/**
 * Component that provides a button to explain the content.
 */
export const ExplainAction = ({
  'data-testid': dataTestId,
  $isFirstChild,
  $isLastChild,
  disabled,
  onExplain,
}: ExplainActionProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Button
      data-testid={dataTestId}
      disabled={disabled}
      kind="action-brain"
      size="32px"
      endEnhancer={<DocumentTasks />}
      onClick={onExplain}
      overrides={getButtonOverrides({ $isFirstChild, $isLastChild })}
    >
      {t('general.explain')}
    </Button>
  );
};
