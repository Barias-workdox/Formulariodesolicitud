import { ReactNode } from 'react';
import { DirectionType } from './webdox-ai-collapsible-button.interfaces';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export interface WebdoxAICollapsibleButtonProps extends WithTestId {
    options: ReactNode[];
    direction?: DirectionType;
    isToggled?: boolean;
    isLoading?: boolean;
    onToggle?(): void;
}
/** Component that displays an animated button to use it in WebdoxAI pages. */
export declare const WebdoxAICollapsibleButton: import('react').ForwardRefExoticComponent<WebdoxAICollapsibleButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
