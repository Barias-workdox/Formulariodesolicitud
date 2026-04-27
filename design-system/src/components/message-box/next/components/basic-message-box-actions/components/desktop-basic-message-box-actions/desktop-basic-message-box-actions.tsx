import { Button } from '@components/button';
import { useMessageBoxContext } from '@components/message-box/next/hooks';

import { DesktopStyledWrapper } from '../../styled-components';

import type { BasicMessageBoxActionsProps } from '../../basic-message-box-actions';

export type DesktopBasicMessageBoxActionsProps = Pick<
  BasicMessageBoxActionsProps,
  | 'onSecondaryButtonClick'
  | 'primaryButtonIcon'
  | 'primaryButtonProps'
  | 'primaryButtonText'
  | 'secondaryButtonIcon'
  | 'secondaryButtonProps'
  | 'secondaryButtonText'
>;

/**
 * Component that renders the basic actions of the message box for desktop view.
 */
export const DesktopBasicMessageBoxActions = ({
  onSecondaryButtonClick,
  primaryButtonIcon,
  primaryButtonProps,
  primaryButtonText,
  secondaryButtonIcon,
  secondaryButtonProps,
  secondaryButtonText,
}: DesktopBasicMessageBoxActionsProps): JSX.Element => {
  const { disabled, isEmpty, handleSubmit } = useMessageBoxContext();

  return (
    <DesktopStyledWrapper>
      {secondaryButtonText && (
        <Button
          aria-label={secondaryButtonText}
          kind="secondary"
          size="32px"
          {...secondaryButtonProps}
          endEnhancer={secondaryButtonIcon}
          onClick={(event) => {
            event.stopPropagation();
            onSecondaryButtonClick?.();
          }}
        >
          {secondaryButtonText}
        </Button>
      )}
      <Button
        aria-label={primaryButtonText}
        kind="primary"
        size="32px"
        disabled={disabled || isEmpty}
        {...primaryButtonProps}
        endEnhancer={primaryButtonIcon}
        onClick={(event) => {
          event.stopPropagation();
          handleSubmit();
        }}
      >
        {primaryButtonText}
      </Button>
    </DesktopStyledWrapper>
  );
};
