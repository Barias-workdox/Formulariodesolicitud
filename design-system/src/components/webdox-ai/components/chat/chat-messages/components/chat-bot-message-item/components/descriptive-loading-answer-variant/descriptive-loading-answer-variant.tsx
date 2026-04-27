import { useTranslation } from '@components/utils';
import { TextRotator } from '@components/webdox-ai/components/text-rotator';
import { WebdoxAISpinner } from '@components/webdox-ai/components/webdox-ai-spinner';

import { ChatMessageLayout } from '../../../chat-message-layout';

import { StyledContainer } from './styled-components';

import type { WithTestId } from '@interfaces/common.interfaces';

/**
 * A loading indicator component that provides descriptive text and animations
 * while the system retrieves data, creating a user-friendly experience during
 * potentially lengthy processes.
 */
export const DescriptiveLoadingAnswerVariant = ({
  dataTestId = 'descriptive-loading',
}: WithTestId): JSX.Element => {
  const { t } = useTranslation();

  const texts = [
    t('webdoxAI.chat.descriptiveLoading.text1'),
    t('webdoxAI.chat.descriptiveLoading.text2'),
    t('webdoxAI.chat.descriptiveLoading.text3'),
  ];

  return (
    <ChatMessageLayout kind="primary">
      <StyledContainer>
        <WebdoxAISpinner dataTestId={`${dataTestId}--spinner`} />
        <TextRotator texts={texts} />
      </StyledContainer>
    </ChatMessageLayout>
  );
};
