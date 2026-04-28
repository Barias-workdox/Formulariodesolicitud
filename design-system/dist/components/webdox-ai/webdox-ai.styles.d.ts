import { DesignSystemTheme } from '../../themes';
import { BackgroundIconShape } from '../background-icon';
import { ModalOverrides } from 'baseui/modal';
import { StyleObject } from 'styletron-react';
/**
 * Styles for the suiteAI background gradient.
 */
export declare const getSuiteAIBackgroundGradient: ({ shape, isLoading, }?: {
    shape?: BackgroundIconShape;
    isLoading?: boolean;
}) => StyleObject;
export declare const chatBotModalStyles: {
    formContainerStyles: StyleObject;
};
/** Modal overrides */
export declare const modalOverrides: () => ModalOverrides;
/** Used inside the webdox AI forms body */
export declare const StyledSectionedModalBody: import('styletron-react').StyletronComponent<"div", {}>;
export declare const styledChatBotGenerativeTextStyles: {
    textStyles: (theme: DesignSystemTheme) => StyleObject;
};
