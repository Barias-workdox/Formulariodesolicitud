import type { ReactElement, ReactNode } from 'react';

import { ComposerTextarea } from '../../common/composer-textarea';

import { InlineComposerContainer } from './inline-composer-container';
import { InlineComposerWrapper } from './inline-composer-wrapper';

import type { ComposerTextareaContainerProps } from '../../common/composer-textarea-container/composer-textarea-container.interfaces';
import type { OverrideObject } from '@themes/theme.interfaces';

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
export const InlineComposerTextareaContainer = ({
  'data-testid': dataTestId,
  placeholder,
  evaluateMention,
  onKeyDown,
  onPaste,
  ...props
}: InlineComposerTextareaContainerProps): ReactElement => {
  const { isDisabled, messageRef, overrides } = props;

  return (
    <InlineComposerContainer
      data-testid={`${dataTestId}__inline-composer-container`}
      {...props}
    >
      <InlineComposerWrapper {...props}>
        <ComposerTextarea
          data-testid={`${dataTestId}__inline-composer-textarea`}
          placeholder={placeholder}
          messageRef={messageRef}
          isDisabled={isDisabled}
          onKeyDown={onKeyDown}
          $padding="0 1rem"
          evaluateMention={evaluateMention}
          onPaste={onPaste}
          overrides={overrides}
        />
      </InlineComposerWrapper>
    </InlineComposerContainer>
  );
};
