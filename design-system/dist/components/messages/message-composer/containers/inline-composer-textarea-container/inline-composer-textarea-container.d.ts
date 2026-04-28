import { ReactElement, ReactNode } from 'react';
import { ComposerTextareaContainerProps } from '../../common/composer-textarea-container/composer-textarea-container.interfaces';
import { OverrideObject } from '../../../../../themes/theme.interfaces';
export type InlineComposerTextareaContainerProps = ComposerTextareaContainerProps & {
    startEnhancer?: ReactNode;
    overrides?: {
        Container?: OverrideObject<unknown>;
        ComposerWrapper?: OverrideObject<unknown>;
        SendButton?: OverrideObject<unknown>;
    };
};
/**
 * `InlineComposerTextareaContainer` is a flexible and customizable container component designed for inline message composition scenarios.
 * It incorporates a `ComposerTextarea` for text input and an `IconButton` with a send icon, facilitating a user-friendly message
 * creation experience. The component supports various states and behaviors such as editing, loading, and disabled states, and allows
 * for the inclusion of a `startEnhancer` to prepend custom ReactNode content, such as icons or buttons, to the composition area.
 *
 * The layout is designed with flexibility in mind, featuring a horizontally aligned display that includes any start enhancer,
 * the text input area, and the send button. This design ensures a cohesive and integrated user interface suitable for
 * applications requiring inline message composition capabilities.
 */
export declare const InlineComposerTextareaContainer: ({ "data-testid": dataTestId, placeholder, evaluateMention, onKeyDown, onPaste, ...props }: InlineComposerTextareaContainerProps) => ReactElement;
