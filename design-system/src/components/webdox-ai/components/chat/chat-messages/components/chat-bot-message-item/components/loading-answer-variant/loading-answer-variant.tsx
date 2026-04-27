import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { WebdoxAISpinner } from '@components/webdox-ai/components';

import { ChatMessageLayout } from '../../..';

import { StyledContainer } from './styled-components';

import type { WithTestId } from '@interfaces/common.interfaces';

/**
 * WebdoxAI message loading
 */
export const LoadingAnswerVariant = ({ dataTestId }: WithTestId): JSX.Element => {
  const { t } = useTranslation();

  return (
    <ChatMessageLayout kind="primary">
      <StyledContainer>
        <WebdoxAISpinner dataTestId={`${dataTestId}--spinner`} />
        <Text
          variant="microCopy"
          color="neutral"
          margin={0}
        >
          {t('webdoxAI.chat.processingAnswer')}
        </Text>
      </StyledContainer>
    </ChatMessageLayout>
  );
};
