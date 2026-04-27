import { SectionedModalBody } from '@components/modal';
import { ProgressBar } from '@components/progress';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import type { InProgressDeleteModalStepProps } from '@components/delete-modal/delete-modal.interfaces';

/** Body for delete modal when is in 'in progress' status */
export const InProgressDeleteModalStep = ({
  isLoading = false,
}: InProgressDeleteModalStepProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useCss();

  return (
    <SectionedModalBody>
      <Text
        variant="body"
        marginTop={0}
        marginBottom={theme.spacing.spacingXl}
        fontWeight="400"
      >
        {t('deleteModal.modal.in_progress.body')}
      </Text>
      <ProgressBar
        completed={!isLoading}
        value={0}
        infinite
      />
    </SectionedModalBody>
  );
};
