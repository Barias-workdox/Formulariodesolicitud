import { forwardRef } from 'react';

import { useCss } from '@components/utils/hooks/use-css';

import { ReactComponent as BrainIcon } from '../../../../assets/icons/webdox-ai/brain-icon.svg';

import { StyledButton, styles } from './webdox-ai-button.styles';

import type { ButtonProps } from '@components/button/button.interfaces';

export type WebdoxAIButtonProps = Pick<
  ButtonProps,
  'data-testid' | 'disabled' | 'isLoading' | 'onClick'
> & {
  hasError?: boolean;
};

/** Component that displays an animated button to use it in WebdoxAI pages. */
export const WebdoxAIButton = forwardRef<HTMLButtonElement, WebdoxAIButtonProps>(
  function WebdoxAIButtonInner(
    { 'data-testid': dataTestId, isLoading = false, hasError, onClick = (): void => {} },
    ref,
  ): JSX.Element {
    const { iconStyles } = useCss(styles, { $isLoading: isLoading });

    return (
      <StyledButton
        data-testid={dataTestId}
        ref={ref}
        type="button"
        $isLoading={isLoading}
        $hasError={hasError}
        onClick={onClick}
      >
        <BrainIcon
          data-testid={`${dataTestId}--brain-icon`}
          className={iconStyles}
        />
      </StyledButton>
    );
  },
);

WebdoxAIButton.displayName = 'WebdoxAIButton';
