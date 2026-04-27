import type { ReactElement } from 'react';

import { ReactComponent as BrainBrandingIcon } from '@assets/icons/webdox-ai/brain-branding.svg';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';

import { ChatMessageLayout } from '../../..';

import { StyledContainer } from './styled-components';
import { StyledIconContainer } from './styled-components/styled-icon-container';

/**
 * The styled first answer by the chat bot. It is a placeholder answer that
 * will not persist in the conversation
 */
export const FirstAnswerVariant = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <ChatMessageLayout kind="primary">
      <StyledContainer>
        <StyledIconContainer>
          <BrainBrandingIcon height="50px" />
        </StyledIconContainer>

        <Text
          variant="h2"
          fontWeight="500"
          color="neutral"
          margin={0}
        >
          {t('webdoxAI.chat.firstAnswer.title')}
        </Text>
      </StyledContainer>
    </ChatMessageLayout>
  );
};
