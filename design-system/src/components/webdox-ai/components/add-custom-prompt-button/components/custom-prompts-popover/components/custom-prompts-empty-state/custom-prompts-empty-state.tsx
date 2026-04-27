import { Chat } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon';
import { EmptyState } from '@components/empty-state';
import { useTranslation } from '@components/utils';

import { StyledEmptyStateContainer } from '../../styled-components';

/**
 * Component to display an empty state for custom prompts.
 */
export const CustomPromptsEmptyState = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledEmptyStateContainer>
      <EmptyState
        Icon={
          <BackgroundIcon
            Icon={Chat}
            backgroundColor="neutralWashed"
            size="44px"
            iconColor="neutral"
          />
        }
        description={t('webdoxAI.chat.customPrompts.emptyMessage')}
      />
    </StyledEmptyStateContainer>
  );
};
