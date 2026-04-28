import { WebdoxAIOptionType } from '../../interfaces/webdox-ai.interfaces';
export type DirectionType = 'row' | 'column';
export interface WebdoxAIOption {
    disabled?: boolean;
    isLoading?: boolean;
    type: WebdoxAIOptionType;
    zIndex?: number;
    onClick?(): void;
}
