import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { ComposerTextareaContainerProps } from '../../common/composer-textarea-container/composer-textarea-container.interfaces';
import { OverrideObject } from '../../../../../themes/theme.interfaces';
export type InlineComposerContainerProps = PropsWithChildren<Pick<ComposerTextareaContainerProps, 'messageRef' | 'localValue' | 'data-testid' | 'isEditing' | 'isDisabled' | 'isLoading' | '$maxHeight' | 'onCreate'>> & {
    startEnhancer?: ReactNode;
    overrides?: {
        Container?: OverrideObject<unknown>;
        SendButton?: OverrideObject<unknown>;
    };
};
/**
 * Container to use with the inline composer textarea component
 * here we are going to handle the button
 */
export declare const InlineComposerContainer: ({ "data-testid": dataTestId, messageRef, localValue, isEditing, isDisabled, isLoading, $maxHeight, overrides: { Container, SendButton }, startEnhancer, children, onCreate, }: InlineComposerContainerProps) => ReactElement;
