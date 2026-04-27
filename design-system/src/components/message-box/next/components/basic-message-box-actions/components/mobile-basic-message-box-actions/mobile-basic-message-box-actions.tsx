import { SendAltFilled } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { useMessageBoxContext } from '@components/message-box/next/hooks';
import { composeMessageBoxActionsTestId } from '@components/message-box/next/utils';

import { MobileStyledWrapper } from '../../styled-components';

import type { BasicMessageBoxActionsProps } from '../../basic-message-box-actions';

export type MobileBasicMessageBoxActionsProps = Pick<
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
 * Component that renders the basic actions of the message box for mobile view.
 */
export const MobileBasicMessageBoxActions = ({
  onSecondaryButtonClick,
  primaryButtonIcon,
  primaryButtonProps,
  primaryButtonText,
  secondaryButtonIcon,
  secondaryButtonProps,
  secondaryButtonText,
}: MobileBasicMessageBoxActionsProps): JSX.Element => {
  const { disabled, isEmpty, handleSubmit } = useMessageBoxContext();

  return (
    <MobileStyledWrapper>
      {secondaryButtonText && (
        <IconButton
          aria-label={secondaryButtonText}
          dataTestId={composeMessageBoxActionsTestId('__secondary-button')}
          kind="secondary"
          size="32px"
          {...secondaryButtonProps}
          onClick={(event) => {
            event.stopPropagation();
            onSecondaryButtonClick?.();
          }}
        >
          {secondaryButtonIcon}
        </IconButton>
      )}
      <IconButton
        aria-label={primaryButtonText}
        dataTestId={composeMessageBoxActionsTestId('__primary-button')}
        kind="primary"
        size="32px"
        disabled={disabled || isEmpty}
        {...primaryButtonProps}
        onClick={(event) => {
          event.stopPropagation();
          handleSubmit();
        }}
      >
        {primaryButtonIcon ?? <SendAltFilled />}
      </IconButton>
    </MobileStyledWrapper>
  );
};
