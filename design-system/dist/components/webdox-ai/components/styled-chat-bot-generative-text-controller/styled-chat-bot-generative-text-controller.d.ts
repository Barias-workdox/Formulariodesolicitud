import { GenerativeTextControllerProps } from '../../../generative-text/generative-text.controller';
export type StyledChatBotGenerativeTextControllerProps = Omit<GenerativeTextControllerProps, 'variant' | 'delay' | 'splitChar' | 'joinChar'>;
/**
 * Styled wrapper of the generative text controller with extra styles and the
 * standardized parameters
 */
export declare const StyledChatBotGenerativeTextController: (props: StyledChatBotGenerativeTextControllerProps) => JSX.Element;
