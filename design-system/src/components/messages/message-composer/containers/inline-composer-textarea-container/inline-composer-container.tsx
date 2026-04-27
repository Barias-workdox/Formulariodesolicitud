import type { PropsWithChildren, ReactElement, ReactNode } from 'react';

import { SendAlt } from '@carbon/icons-react';
import { getOverrides } from 'baseui';

import { IconButton } from '@components/button/variants/icon-button';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useStyleOverrides } from '@components/utils/hooks/use-css';

import { stylesOverrides } from '../../common/composer-textarea-container/composer-textarea-container.styles';

import type { ComposerTextareaContainerProps } from '../../common/composer-textarea-container/composer-textarea-container.interfaces';
import type { OverrideObject } from '@themes/theme.interfaces';

export type InlineComposerContainerProps = PropsWithChildren<
  Pick<
    ComposerTextareaContainerProps,
    | 'messageRef'
    | 'localValue'
    | 'data-testid'
    | 'isEditing'
    | 'isDisabled'
    | 'isLoading'
    | '$maxHeight'
    | 'onCreate'
  >
> & {
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
export const InlineComposerContainer = ({
  'data-testid': dataTestId,
  messageRef,
  localValue,
  isEditing,
  isDisabled,
  isLoading,
  $maxHeight,
  overrides: { Container, SendButton } = {},
  startEnhancer,
  children,
  onCreate = (): void => {
    return;
  },
}: InlineComposerContainerProps): ReactElement => {
  const { Container: ContainerOverrides } = mergeOverridesDeep(stylesOverrides, { Container });

  const { containerStyles } = useStyleOverrides({
    $styles: { containerStyles: ContainerOverrides.style },
    isEditing,
    isDisabled,
    $minHeight: '38px',
    $maxHeight,
  });

  const [ButtonComponent, buttonComponentProps] = getOverrides(SendButton, IconButton);

  const isSubmitDisabled = !messageRef.current?.textContent || isDisabled;

  const defaultProps = {
    isLoading,
    disabled: isSubmitDisabled,
    onClick: (): void => {
      if (onCreate) {
        onCreate(localValue);
      }
    },
    children: <SendAlt size={24} />,
  };

  return (
    <div className={containerStyles}>
      {startEnhancer}
      {children}
      <ButtonComponent
        kind="primary"
        data-testid={`${dataTestId}__button`}
        {...defaultProps}
        {...buttonComponentProps}
      />
    </div>
  );
};
