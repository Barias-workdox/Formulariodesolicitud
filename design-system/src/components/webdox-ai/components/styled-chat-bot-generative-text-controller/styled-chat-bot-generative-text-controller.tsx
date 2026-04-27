import { GenerativeTextController } from '@components/generative-text/generative-text.controller';
import { messageContentStyles } from '@components/messages';
import { useCss } from '@components/utils/hooks/use-css';

import { GENERATIVE_ANSWER_WORD_PROPS, GENERATIVE_TEXT_VARIANT } from '../../constants';
import { styledChatBotGenerativeTextStyles } from '../../webdox-ai.styles';

import type { GenerativeTextControllerProps } from '@components/generative-text/generative-text.controller';

export type StyledChatBotGenerativeTextControllerProps = Omit<
  GenerativeTextControllerProps,
  'variant' | 'delay' | 'splitChar' | 'joinChar'
>;

/**
 * Styled wrapper of the generative text controller with extra styles and the
 * standardized parameters
 */
export const StyledChatBotGenerativeTextController = (
  props: StyledChatBotGenerativeTextControllerProps,
): JSX.Element => {
  const { theme } = useCss(styledChatBotGenerativeTextStyles);

  return (
    <GenerativeTextController
      variant={GENERATIVE_TEXT_VARIANT}
      $style={{
        ...messageContentStyles.textStyle(theme),
        ...styledChatBotGenerativeTextStyles.textStyles(theme),
      }}
      {...GENERATIVE_ANSWER_WORD_PROPS}
      {...props}
    />
  );
};
