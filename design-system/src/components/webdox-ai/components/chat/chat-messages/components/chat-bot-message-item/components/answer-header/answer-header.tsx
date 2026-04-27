import { ReactComponent as BrainIcon } from '@assets/icons/webdox-ai/brain-icon.svg';
import { ReactComponent as LegalWhisperIcon } from '@assets/icons/webdox-ai/legal-whisper-icon.svg';
import { Tag } from '@components/tag/next';
import { Text } from '@components/text';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';

import { StyledContainer } from './styled-components';

import type { TagProps } from '@components/tag/next/tag.interfaces';
import type { ChatBotChatMessageType, WebdoxAIOptionType } from '@components/webdox-ai';
import type { WithTestId } from '@interfaces/common.interfaces';

export type AnswerHeaderProps = WithTestId<
  Pick<ChatBotChatMessageType, 'createdAt' | 'suiteAIOption'>
>;

const tagConfigBySuiteAIOption: Record<WebdoxAIOptionType, Pick<TagProps, 'kind' | 'icon'>> = {
  brainCompanion: {
    kind: 'positive',
    icon: BrainIcon,
  },
  legalWhisper: {
    kind: 'negative',
    icon: LegalWhisperIcon,
  },
};

/**
 * Renders the answer header with the tag and the date
 */
export const AnswerHeader = ({
  dataTestId = 'answer-header',
  createdAt = '',
  suiteAIOption = 'brainCompanion',
}: AnswerHeaderProps): JSX.Element => {
  const { formatDateAsText } = useDateUtilsWithLocale();

  const { kind, icon } = tagConfigBySuiteAIOption[suiteAIOption];

  return (
    <StyledContainer>
      <Tag
        dataTestId={`${dataTestId}__tag`}
        kind={kind}
        variant="outlined"
        icon={icon}
        shape="rounded"
        size="sm"
      />
      <Text
        margin={0}
        variant="microCopy"
      >
        {formatDateAsText(createdAt, true)}
      </Text>
    </StyledContainer>
  );
};
