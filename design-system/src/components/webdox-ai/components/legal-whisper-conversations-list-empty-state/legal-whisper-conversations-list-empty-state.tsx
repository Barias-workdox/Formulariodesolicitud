import type { ReactElement } from 'react';

import { Search } from '@carbon/icons-react';

import { EmptyState } from '@components/empty-state/next';
import { useTranslation } from '@components/utils';

/**
 * Legal Whisper Conversations List Empty State
 *
 * This component is used to display an empty state message when there are no conversations in the list.
 */
export const LegalWhisperConversationsListEmptyState = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <EmptyState
      title={t('webdoxAI.legalWhisperSettings.recentConversationsEmptyState.title')}
      description={t('webdoxAI.legalWhisperSettings.recentConversationsEmptyState.description')}
      Icon={Search}
      iconColor="neutral"
      backgroundColor="neutralSubtle"
    />
  );
};
