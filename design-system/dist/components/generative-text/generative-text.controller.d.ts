import { GenerativeTextProps } from './generative-text';
export type GenerativeTextControllerProps = GenerativeTextProps;
/**
 * Controller used to avoid UI visual problems. Will control the generative text task,
 * blocking the UI when a generative task is running When the generative texts are updated
 * from parent, will store them in a queue and promote then to text generation when the latest
 * task is finished
 */
export declare const GenerativeTextController: ({ generativeText, accumulatedText, ...rest }: GenerativeTextControllerProps) => JSX.Element;
