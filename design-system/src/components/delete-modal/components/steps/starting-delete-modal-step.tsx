import { Button } from '@components/button';
import { ALL_DELETE_MODAL_STATUSES } from '@components/delete-modal/delete-modal.constants';
import { SectionedModalBody, SectionedModalFooter } from '@components/modal';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { DeleteModalCountdown } from '../delete-modal-countdown';

import type { StartingDeleteModalStepProps } from '@components/delete-modal/delete-modal.interfaces';

/** Body for delete modal when is in 'starting' status */
export const StartingDeleteModalStep = ({
  'data-testid': dataTestId,
  startingText,
  onClose,
  onTimeout,
}: StartingDeleteModalStepProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useCss();

  return (
    <>
      <SectionedModalBody
        $style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.spacingMd }}
      >
        {startingText}
        <DeleteModalCountdown onComplete={onTimeout} />
      </SectionedModalBody>

      <SectionedModalFooter>
        <Button
          data-testid={`${dataTestId}__cancel`}
          type="button"
          kind="tertiary"
          onClick={() => onClose(ALL_DELETE_MODAL_STATUSES.starting)}
        >
          {t('general.cancel')}
        </Button>
      </SectionedModalFooter>
    </>
  );
};
