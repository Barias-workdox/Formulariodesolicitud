import { PropsWithChildren, ReactElement } from 'react';
import { ComposerTextareaContainerProps } from '../../common/composer-textarea-container/composer-textarea-container.interfaces';
import { OverrideObject } from '../../../../../themes/theme.interfaces';
export type InlineComposerWraper = PropsWithChildren<Pick<ComposerTextareaContainerProps, 'isEditing' | 'isDisabled' | '$maxHeight'>> & {
    overrides?: {
        ComposerWrapper?: OverrideObject<unknown>;
    };
};
/**
 * wrapper to inline composer text area
 */
export declare const InlineComposerWrapper: ({ isEditing, isDisabled, $maxHeight, overrides: { ComposerWrapper }, children, }: InlineComposerWraper) => ReactElement;
